// import moment from "moment";
// import 'moment-timezone';
import { extend } from './extend';
import { json2search } from './json2search';

export function isPrd() {
    if (process.server) {
        return true;
    } else {
        const {hostname} = location;
        return !(hostname.includes('localhost') || hostname.includes('www-test'));
    }
}

export function isMobile() {
    if (process.server) {
        return false;
    } else {
        return !!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
    }
}

export function isWechat() {
    let ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i).indexOf("micromessenger") > -1;
}

export const getLangValue = (obj, key, deep) => {
    if(deep === key.length - 1) {
        return obj[key[deep]];
    } else{
        return getLangValue(obj[key[deep]], key, deep + 1);
    }
};

export const getEnv = () => {
    const { NODE_ENV } = process.env;
    let hostname;
    if( process.browser ) {
        hostname = location.hostname;
    }
    const DEV_HOST = ['localhost', 'nft-web-dev', '10.162', '192.168'];
    const TEST_HOST = ['nft-cms-test'];
    const filterHost = list => {
        let res = false;
        if (hostname) {
            for (let item of list) {
                if (hostname.includes(item)) {
                    res = true;
                    break;
                }
            }
        }
        return res;
    };

    if ( NODE_ENV === 'development' || filterHost(DEV_HOST) ) { // 开发环境
        return 'DEV';
    } else if ( filterHost(TEST_HOST) ) { // 测试环境
        return 'TEST';
    } else { // 线上
        return 'PRD';
    }
};

//   export getAPI_HOST () {
//     if (isPrd()) {
//       return process?.env?.NEXT_PUBLIC_API_HOST || '/';
//     }
//     return `https://www-${process?.env?.BUILD_ENV || 'test1'}.imall.art`;
//   }

//   static getHOST(): string {
//     if (!window) return '';
//     return window.location.origin;
//   }

export function resolveURL(url, searches = {}, options = {}) {
    const { encode = true } = options;
    const a = document.createElement('a');
    a.href = url;
    const originSearches = a.search.split('?')[1] || '';
    const paramsAry = originSearches.split('&');
    let searchesMap = {};
    for (let i = 0; i < paramsAry.length; i += 1) {
        const item = paramsAry[i];
        const ary = item.split('=');
        searchesMap[ary[0]] = ary[1];
    }
    searchesMap = extend(true, {}, searchesMap, searches);
    let search = json2search(searchesMap, undefined, encode);
    if (search) {
        search = `?${search}`;
    }
    return `${url}${search}`;
}

export const throttle = (fn, wait) => {
    let pre = Date.now();
    return function () {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - pre >= wait) {
            fn.apply(context, args);
            pre = Date.now();
        }
    };
};
export const currentSystem = () => {
    const u = navigator.userAgent;
    const ua = u.toLowerCase();
    let type = '';
    if (/iphone|ipad|ipod/.test(ua)) {  // iOS 系统 ->  跳AppStore下载地址
        type = 'iOS';
    } else if (/android/.test(ua)) { // 安卓系统 -> 跳安卓端下载地址
        type = 'android';
    } else {
        type = 'pc';
    }
    return type;
};

/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/
export const debounce = (fn, wait) => {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, wait);
    };
};

export function loadScript(id, url) {
    return new Promise(resolve => {
        let find = document.getElementById(id);
        if (find) {
            resolve();
            return;
        }
        let script = document.createElement('script');
        script.id = id;
        script.type = 'text/javascript';
        script.src = url;
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (this.readyState === "loaded" || this.readyState === "complete") {
                    console.log('script', id, 'ready');
                    resolve(id);
                }
            };
        } else {
            script.onload = function () {
                console.log('script', id, 'onload');
                resolve(id);
            };
        }
        document.body.appendChild(script);
    });
}

export function loadStyle(id, url) {
    return new Promise(resolve => {
        let find = document.getElementById(id);
        if (find) {
            resolve();
            return;
        }
        let link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = function () {
            console.log('loadStyle', id, 'onload');
            resolve(id);
        };
        document.head.appendChild(link);
    });
}

//下载文件
export function downloadFile(data, fileName) {
    if (!data) {
        return;
    }
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // for IE
        let csvData = new Blob([data], {type: "text/csv"});
        window.navigator.msSaveOrOpenBlob(csvData, fileName);
    } else {
        // for Non-IE (chrome, firefox etc.)
        let url = window.URL.createObjectURL(new Blob([data]));
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
    }
}

// 格式化时间，基于非时间戳格式
export function formatTimeByNoTz(time, format = 'YYYY-MM-DD'){
    var times = Date.parse(new Date(time));
    return formatTimeByTz(times,format);
}

// 北京时间转澳洲时间
// export function getTimeByTz(time, offset = 600) {
//     // 悉尼 zone 偏移 600
//     // 先获得本地时区 utc 偏移
//     const localOffset = moment().utcOffset();
//     const diffMSeconds = (localOffset - offset) * (60 * 1000);

//     return moment(time).valueOf() + diffMSeconds;
// }

/**
 * 获取明天的时间戳，默认时区为 澳洲悉尼
 */
// export function getYesterdayTimeByTz(offset = 600) {
//     // 获得今天凌晨时间戳
//     const todayDate = new Date(moment().format('YYYY/MM/DD'));
//     const todayTimestamp = todayDate.getTime();
//     // 先获得本地时区 utc 偏移
//     const localOffset = moment().utcOffset();
//     const diffMSeconds = (localOffset - offset) * (60 * 1000);
//     return todayTimestamp + diffMSeconds;
// }

// 格式化时间，基于timezone
// export function formatTimeByTz(
//     time,
//     format = "YYYY-MM-DD",
//     timezone = "Asia/Shanghai"
// ) {
//     return moment(time).tz(timezone).format(format);
// }

export function checkPerm(perm) {
    return true;
}

// 验证max位整数
export function formatIntMax(value, max) {
    let reg = new RegExp("^[0-9]{1," + max + "}?$");
    return reg.test(value);
}

// 验证人名币，小数点后最多min位，小数点前最多max位
export function formatCNY(value, max = 8, min = 2) {
    if (value.toString().indexOf(".") <= -1) {
        return formatIntMax(value, max);
    } else {
        let reg = new RegExp("^[0-9]{0," + max + "}(.[0-9]{1," + min + "})?$");
        if (reg.test(value.toString())) {
            return true;
        }
    }
    return false;
}

// 时间格式化
export function dateFormat(date, fmt = "YYYY-mm-dd HH:MM:SS") {
    let ret;
    date = new Date(parseInt(date, 10));
    const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(
                ret[1],
                ret[1].length === 1
                    ? opt[k]
                    : opt[k].padStart(ret[1].length, "0")
            );
        }
    }
    return fmt;
}

export function oneOf(ele, targetArr) {
    return targetArr.indexOf(ele) >= 0;
}

export function swapArray(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
}

export function convertJsonToFromData(data, keys = '', buffer = {}) {
    if (!buffer) {
        buffer = {};
    }
    let type = (typeof data);
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            const newKeys = keys ? (keys + "[" + i + "]") : "[" + i + "]";
            convertJsonToFromData(data[i], newKeys, buffer);
        }
    } else if ("object" === type) {
        for (let key in data) {
            const newKeys = keys ? keys + "." + key : key;
            convertJsonToFromData(data[key], newKeys, buffer);
        }
        buffer[keys] = data;
    } else {
        buffer[keys] = data;
    }
    return buffer;
}

export function deepClone(obj) {
    if(typeof obj !== 'object' || obj == null) return obj;
    let res;
    if(obj instanceof Array) {
        res = [];
    }else {
        res = {};
    }
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            res[key] = deepClone(obj[key]);
        }
    }
    return res;
}

export const getNumberClass = (value) => {
    const Num = Number(value);
    if (Number.isNaN(Num)) {
        return 'pp-text-t1';
    }
    if (Num > 0 && Num < 0.01) {
        return 'pp-text-t1';
    }
    if (Num > 0) {
        return 'text-[#25AC4E]';
    }
    if (Num < 0) {
        return 'text-red';
    }
    return 'pp-text-t1';
};

export const formatData = (timer) => {
    if(!timer) return '';
    const year = timer.getFullYear();
    const month = timer.getMonth() + 1; // 由于月份从0开始，因此需加1
    const day = timer.getDate();
    const hour = timer.getHours();
    const minute = timer.getMinutes();
    const second = timer.getSeconds();
    return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`;
};
// 定义具体处理标准
// timeEl 传递过来具体的数值：年月日时分秒
// total 字符串总长度 默认值为2
// str 补充元素 默认值为"0"
function pad(timeEl, total = 2, str = '0') {
    return timeEl.toString().padStart(total, str);
}

