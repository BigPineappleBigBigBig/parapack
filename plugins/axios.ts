/**
 * 设置axios参数和拦截器
 */
import Vue from 'vue';
import axios from 'axios';
import bus from '~/utils/eventBus';
import { formatHeader } from '~/plugins/utils';
import { Message } from 'element-ui';

const http = axios.create({
    baseURL: '',
    timeout: 3600000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    withCredentials: true
});

const defaultHeader = {};

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
            params[item] = new Date(params[item]).getTime();
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
        if (res.data.success || res.config.responseType) {
            return res.data;
        }
        const config = {
            message: res.data.message || res.data.msg,
        };

        if (res.data.code === 40103) {
            bus.$emit('auth', res.data.data.redirectUrl);
        }
        if (res.data.code !== 40103) {
            setTimeout(() => {
                Message.error(config);
            }, 300);
        }

        return res.data;
    },
    (err) => {
        // Do something with response error
        setTimeout(() => {
            Message.error({
                message: err?.message || '连接服务失败',
            });
        }, 300);
        return Promise.reject(err);
    },
);

// 发送请求
export const send = function (option) {
    console.log(option);
    if (!option || !option.method || !option.url) {
        console.error('缺少axios请求配置（method、url、system）');
        return;
    }
    const headers = option.headers
        ? {
            ...defaultHeader,
            ...option.headers,
        }
        : defaultHeader;
    const url = option.path ? pathReplace(option) : option.url;
    return http({
        url,
        responseType: option.responseType,
        method: option.method,
        headers: {
            ...headers,
            ...formatHeader()
        },
        params: {
            ...(option.params || {})
        } || {},
        data: {
            ...(option.data || {}),
        } || {},
    });
}

declare module 'vue/types/vue' {
    interface Vue {
        $axios(options: any)
    }
}

Vue.prototype.$axios = send;
