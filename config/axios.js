/**
 * 设置axios参数和拦截器
 */
import Vue from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';
import { TOKEN_NAME } from "~/config/app";

// 环境判断
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const http = axios.create({
    timeout: 3600000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    withCredentials: true,
    crossDomain: true
});

const defaultHeader = {};

function toLogin(url) {
    Cookies.remove('nftUser');
    localStorage.nUserData = null;
    window.location.href = url;
}

// 开发环境需要从测试环境获取session
if (env === 'dev') {
    Cookies.set('SESSION', 'ZWEyZjE4YzItYmM3Ni00NWU4LTg2MGUtMGJiYzU4MzFmNzkw');
}

// 判断请求参数是否为日期字符串
const isDate = (params) => {
    for (const item in params) {
        if (typeof params[item] === 'object') {
            isDate(params[item]);
        } else if (
            /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}).*$/.test(params[item])
        ) {
            // let stamp = params[item].substring(0, 19);
            // stamp = stamp.replace(/-/g, '/');
            const timestamp = new Date(params[item]).getTime();
            params[item] = timestamp;
        }
    }
};

// 处理 url 上的变量 path
function pathReplace(option) {
    let url = option.url;
    for (const i in option.path) {
        if (Object.prototype.hasOwnProperty.call(option.path, i)) {
            url = url.replace(new RegExp(`{(${i})}`, 'ig'), option.path[i]);
        }
    }
    return url;
}

// 请求拦截器
http.interceptors.request.use(
    (config) => {
        // 在请求发出之前进行一些操作
        if (env === 'ev') {
            console.log(
                '%c 请求地址: ',
                'background:#333;color:#bada55',
                config.baseURL + config.url,
                `   method:${config.method}`,
                '   data:',
                config.data,
            );
        }
        return config;
    },
    // Do something with request error
    (err) => {
        Promise.reject(err);
    },
);
// 响应拦截器
http.interceptors.response.use(
    (res) => {
        // 在这里对返回的数据进行处理
        if (env === 'dev') {
            if (res.status === 200) {
                console.log(
                    `${'%c 响应: status '}${res.status}`,
                    'background:#333;color:#bada55',
                    '   data:',
                    res.data,
                );
            } else {
                console.log(
                    `${'%c 响应: status '}${res.status}`,
                    'background:#d8ddf1;color:#ec1b1b',
                    '   data:',
                    res.data,
                );
            }
        }
        if (res.data.code === 1) {
            return res.data;
        }
        const config = {
            title: '错误',
            content: res.data.message || res.data.msg,
        };
        if([115, 116, 40103].includes(res.data.code)) {
            localStorage.clear();
            // 需要登录
            res.message = '{#登录超时，需要重新登录#}';
            toLogin(location.origin+'/login');
        }
        if (res.data.code !== 40103) {
            setTimeout(() => {
                this.$Notice.error(config);
            }, 300);
        }

        return res.data;
    },
    (err) => {
        // Do something with response error
        setTimeout(() => {
            this.$Notice.error({
                title: '错误',
                content: '连接服务失败'
            });
        }, 300);
        return Promise.reject(err);
    },
);

// 发送请求
function send(option) {
    if (!option || !option.method || !option.url) {
        console.error('缺少axios请求配置（method、url、system）');
        return;
    }

    const url = option.path ? pathReplace(option) : option.url;
    return http({
        url,
        method: option.method,
        headers: option.headers
            ? {
                ...defaultHeader,
                ...option.headers,
            }
            : defaultHeader,
        params: option.params || {},
        data: { ...option.data,
        } || {},
    });
}

export function initAxios() {
    Vue.prototype.$axios = send;
}
