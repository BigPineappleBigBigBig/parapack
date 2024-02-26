import Vue from 'vue';
import { fix, mul } from '@/utils/math';
import { time2Date, ts, StrReplaceKey, toPercent } from './utils';

Vue.filter('t2d', time2Date);
Vue.filter('fix', fix);
Vue.filter('mul', mul);
Vue.filter('ts', ts);
Vue.filter('strReplaceKey', StrReplaceKey);
Vue.filter('upper', (x) => x ? x.toUpperCase() : x);
Vue.filter('toPercent', toPercent);
Vue.filter('address', (v) => (v && v.length > 10 ? `${v.substring(0, 6)}...${v.substring(v.length - 4, v.length)}`: v));
Vue.filter('contractAddress', (v) => (v && v.length > 10 ? `${v.substring(0, 6)}...${v.substring(v.length - 30, v.length)}`: v));
Vue.filter('defaultValue', (v) => {
    return v || '--';
});
Vue.filter('size', (v) => {
    if(!v) return '';
    let size = "";
    if( v < 0.1 * 1024 ){ //如果小于0.1KB转化成B
        size = v.toFixed(2) + "B";
    }else if(v < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB
        size = (v / 1024).toFixed(2) + "KB";
    }else if(v < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
        size = (v / (1024 * 1024)).toFixed(2) + "MB";
    }else{ //其他转化成GB
        size = (v / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }

    let sizestr = size + "";
    let len = sizestr.indexOf("\.");
    let dec = sizestr.substr(len + 1, 2);
    if(dec === "00"){//当小数点后为00时 去掉小数部分
        return sizestr.substring(0,len) + sizestr.substr(len + 3,2);
    }
    return sizestr;
});
