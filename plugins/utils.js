import {fix, mul} from '@/utils/math';
import Cookies from 'js-cookie';
import mergeWith from 'lodash-es/mergeWith';
import unionWith from 'lodash-es/unionWith';
import isEqual from 'lodash-es/isEqual';
import intersectionWith from 'lodash-es/intersectionWith';
import {SUB_USER_ID} from "~/config/app";
const SUBUSERID = SUB_USER_ID;

const DOMIAN_WHITE_LIST = [
    'ibox.com',
    'ibox.art',
    'ibox.fan'
];

function addZero(t) {
    return t > 9 ? t : '0' + t;
}
//时区转化计算
function timeInZone(time, zone) {
    let thisTime = new Date(time);
    let zoneOffset = thisTime.getTimezoneOffset();
    if(zone) {
        zoneOffset = zoneOffset + zone*60;
    }
    return new Date(thisTime-0+zoneOffset*60*1000);
}
export function time2Date(t, n, e, timezone) {
    /* eslint-disable no-redeclare */
    if (isNaN(t)) {
        return t;
    }
    var t = (t + '').split(':'),
        a =
		1 * t[0] < Math.pow(10, 11) && !t[1] ?
		    new Date(1e3 * t[0]) :
		    new Date(1 * t[0]);
    a = timezone ? timeInZone(a, timezone) : a;
    var
        i = a.getFullYear(),
        o = addZero(a.getMonth() + 1),
        r = addZero(a.getDate()),
        c = addZero(e ? a.getUTCHours() : a.getHours()),
        s = addZero(a.getMinutes()),
        u = addZero(a.getSeconds());
    return n ?
        n
            .toLowerCase()
            .replace('y', i)
            .replace('m', o)
            .replace('d', r)
            .replace('h', c)
            .replace('i', s)
            .replace('s', u) :
        i + '-' + o + '-' + r + ' ' + c + ':' + s + ':' + u;
}
export function getDay(time) {
    if (isNaN(time)) {
        return time;
    }
    var date = new Date(time);
    const day = date.getDay();
    switch (day) {
        case 0:
            return `星期日`;
        case 1:
            return `星期一`;
        case 2:
            return `星期二`;
        case 3:
            return `星期三`;
        case 4:
            return `星期四`;
        case 5:
            return `星期五`;
        case 6:
            return `星期六`;
    }
    return time;
}
export function initParams(hash, search) {
    var lh = hash || location.hash,
        ls = search || location.search;
    var lha = lh.replace('#', '').split('&'),
        lsa = ls.replace('?', '').split('&');
    window['hashParams'] = {};
    window['searchParams'] = {};
    genParams(lha, 'hash');
    genParams(lsa, 'search');
}
function genParams(a, key) {
    for (var i = 0, l = a.length; i < l; i++) {
        if (!a[i]) break;
        var kv = a[i].split('='),
            k = kv[0],
            v = kv[1];
        if (k === 's') {
            var bq = v.split('_');
            if (bq.length > 1) {
                window.PAGE_BASE = bq[0];
                window.PAGE_QUOTE = bq[1];
                window.PAGE_TYPE = bq[2] || window.PAGE_TYPE;
                window.symbol = bq[0]+bq[1];
            }
        }
        window[key + 'Params'][k] = v;
    }
}
export function $_GET(key, where) {
    initParams();
    if (where === 'hash') {
        return window.hashParams && window.hashParams[key];
    }
    if (where === 'search') {
        return window.searchParams && window.searchParams[key];
    }
    return window.hashParams[key] || window.searchParams[key];
}
export function camelCase(key = '') {
    return key.trim().toLowerCase().replace(/[-_]+([a-z])/g, (x) => x.substr(-1).toUpperCase());
}
export function kebabCase(key = '') {
    return key.trim().replace(/[A-Z]/g, (x) => `-${x.toLowerCase()}`).replace(/[-_]+/g, '-');
}
export function shortNameCase(key = '') {
    const arr = key.trim().split('-');
    if (arr.length === 1) {
        return key;
    }
    return arr.map(i => i.substr(0, 1)).join('');
}
function mixDom(node, val) {
    const obj = {
        attr: val
    };
    obj.node = node;
    return obj;
}
export function attFather(n, a, t) {
    if (!n || !a || !n.parentNode) return null;
    if (t ? n.getAttribute(a) !== null : n.getAttribute(a)) {
        return mixDom(n, n.getAttribute(a));
    }
    return attFather(n.parentNode, a);
}
export function classFather(n, c, exact){
    if (!n || !c || !n.parentNode) return null;
    if (exact) {
        let classes = n.className.split(' ');
        if (classes.includes(c)) {
            return n;
        }
    } else {
        if (n.className.toString().indexOf(c)>-1) {
            return n;
        }
    }

    return classFather(n.parentNode, c, exact);
}
export function fibna(n) {
    return n < 2 ? n : fibna(n - 2) + fibna(n - 1);
}

export function redirectURL(route, locale='en-us') {
    const {fullPath} = route;
    let [, symbol] = fullPath.split(/[#|\?]s=/);
    let [, lang, type, maybeType] = fullPath.split(/[//|/?|/#]/);
    if (!lang.match(/\w\w-\w\w/)) {
        lang = 'zh-cn';
    }
    if (type !== 'exchange' && type !== 'margin') {
        if (type !== 'coin_coin') {
            symbol = symbol || type;
        }
        type = maybeType;
    }
    let link = '/';
    let params = symbol || '';
    if (lang === 'en-us') {
        link = `/en-us/exchange/${params}/`;
    } else {
        link = `/${lang}/${type}/${params}/`;
    }
    return link;
}
export function getFloatLen(n) {
    const [, float] = (n + '').split('.');
    if (float) {
        return float.length;
    }
    return 0;
}

export function isPC() {
    let userAgentInfo = navigator.userAgent,
        Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod', 'rv:1.2.3.4', 'windows mobile', 'midp'],
        flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) >= 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

export function URLFilter(s){
    let _s=decodeURIComponent(s)||'',str, white=DOMIAN_WHITE_LIST;
    let tempA = document.createElement('a');

    const hasProtocol = _s.match(/\/\//);
    tempA.href = !hasProtocol ? '//' + _s : _s;

    let domain = `${location.protocol}//${tempA.hostname.replace(/。/g, '.')}`;

    const isValid = white.some(d => {
        if (domain.match(('\\' + '.').concat(d, '$'))) {
            return true;
        }
    });

    if (isValid) {
        return tempA.href;
    }
    str = _s.replace('http://', '').replace('https://', '');
    str = str.replace(/^\/+/, '').replace(/\\/g, '');
    return `${location.origin}/${str}`;
}
export function removeCookies(cks = []) {
    if (process.browser) {
        const mydomain = location.hostname.replace('localhost', '');
        if (typeof cks === 'string') {
            cks = [cks];
        }
        cks.forEach(item => {
            Cookies.remove(item, { domain: getHost() });
            Cookies.remove(item, { domain: getHost(1) });
            Cookies.remove(item, { domain: `localhost${mydomain}` });
        });
    }
}
export function removeUCStateClass() {
    if (process.browser) {
        document.querySelector('html').classList.remove('UC_IS_LOGIN');
    }
}
export function getHost(origin) {
    const { hostname } = location;
    if (origin && process.env.isProd) {
        const hostArr = hostname.split('.');
        hostArr.shift();
        return hostArr.join('.');
    }
    return hostname;
}
export function addGtagGIO() {
}

export function addZendesk() {

    if (['finance', 'login'].some(i => location.pathname.includes(i))) {
        return;
    }
    const helpLabels = ['如何币币交易', 'OTC如何交易', '合约交易操作指南'];
    const keysMap = {
        'default': '7de2a5ba-edd3-4cd5-b032-91dc9bbc3cc4',
        'tr-tr': '168c3d8e-4bc2-4a1b-92d6-761cc16ab38e',
        // // for test
        // 'zh-cn': 'd17aacee-cbb7-4f2d-ba4e-5ec819d7c74d',
        // 'en-us': 'd17aacee-cbb7-4f2d-ba4e-5ec819d7c74d',
    };
    const accountKey = 'gUj42jsOShnJLX9O8bhx3WnaLBpsUW3s';
    const { lang } = localStorage;
    const zkLang = '{#ZKLANG#}';
    const dispatcher = (name) => {
        if (name.includes('---')) {
            return false;
        }
        if (lang === 'zh-cn') {
            return !name.includes('--');
        } else {
            return name.includes('--');
        }
    };
    const sdkUrl = aliasUrl('cdn') + '/global/zendesk-sdk.js?v=112601';
    const snippetUrl= 'https://static.zdassets.com/ekr/snippet.js?key=' + (keysMap[lang] || keysMap.default);

    ((d, w) => {
        const s = d.createElement('script');
        s.id = 'ze-snippet';
        s.src = snippetUrl;
        const k = d.createElement('script');
        k.src = sdkUrl;
        k.onload = () => {
            zChat.init({
                account_key: accountKey
            });
            zChat.on('chat', function (event_data) {
                if(event_data.type !== 'chat.msg' || event_data.nick === 'visitor'){
                    return;
                }
                if (!~event_data.display_name.indexOf('火币牛牛')) {
                    zE && zE('webWidget', 'updateSettings', {
                        webWidget: {
                            chat: {
                                profileCard: {
                                    rating: true,
                                }
                            }
                        }
                    });
                } else {
                    zE && zE('webWidget', 'updateSettings', {
                        webWidget: {
                            chat: {
                                profileCard: {
                                    rating: false,
                                }
                            }
                        }
                    });
                }
            });
        };

        s.onload = () => {
            zE(() => zE.setLocale(zkLang));
            if (lang !== 'tr-tr') {
                zE('webWidget', 'helpCenter:setSuggestions', { labels: helpLabels });
                zE(() => {
                    $zopim(() => {
                        if (lang === 'zh-cn') {
                            $zopim.livechat.setLanguage('zh');
                        } else {
                            $zopim.livechat.setLanguage('en');
                            $zopim.livechat.window.setTitle('Support');
                            $zopim.livechat.departments.setLabel('Choose a question type');
                            $zopim.livechat.prechatForm.setGreetings('Hello, please choose a question type, add your UID or phone number. Thank you for your understanding and cooperation.');
                        }
                        $zopim.livechat.addTags('autoanswer');
                        $zopim.livechat.setOnConnected(() => {
                            const all = $zopim.livechat.departments.getAllDepartments();
                            const list = all.reduce((sofar, cur) => {
                                const { name } = cur;
                                if (dispatcher(name)) {
                                    sofar.push(name);
                                }
                                return sofar;
                            }, []);
                            $zopim.livechat.departments.filter(...list);
                        });
                    });
                });
            }
        },
        w.zESettings = {
            webWidget: {
                contactOptions: {
                    enabled: true
                }
            }
        };
        d.body.appendChild(s);
        d.body.appendChild(k);
    })(document, window);
}

export function getPrecision (symbol, symbolsObj) {
    const symbolInfo = symbolsObj[symbol] || {};
    const {
        trade_price_precision: tpp = 8,
        trade_amount_precision: tap = 8,
        trade_total_precision: ttp = 8,
        fee_precision: fp = 8,
        display_name = symbol.toUpperCase()
    } = symbolInfo;

    return {
        tpp,
        tap,
        ttp,
        fp,
        display_name,
    };
}
const restArguments = function (func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function () {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0;
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
        }
        switch (startIndex) {
            case 0:
                return func.call(this, rest);
            case 1:
                return func.call(this, arguments[0], rest);
            case 2:
                return func.call(this, arguments[0], arguments[1], rest);
        }
        var args = Array(startIndex + 1);
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
        }
        args[startIndex] = rest;
        return func.apply(this, args);
    };
};
const delay = restArguments(function (func, wait, args) {
    return setTimeout(function () {
        return func.apply(null, args);
    }, wait);
});
export const debounce = function (func, wait, immediate) {
    var timeout, result;

    var later = function (context, args) {
        timeout = null;
        if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function (args) {
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(this, args);
        } else {
            timeout = delay(later, wait, this, args);
        }

        return result;
    });

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
};

export const dpi = {
    // eslint-disable-next-line max-len
    innerHTML: '!function(b,c){function e(){var g=1920,i=screen.width,j=screen.height,k=i/g,l=i.viewMeta||c.querySelector("[name=viewport]")||c.createElement("meta");i.viewMeta||c.getElementsByTagName("head")[0].appendChild(l),l.setAttribute("name","viewport"),l.setAttribute("content","width="+g+", initial-scale="+k+",maximum-scale="+k+",minimum-scale="+k+", user-scalable=no,target-densitydpi=device-dpi,minimal-ui,uc-fitscreen=no"),i.viewMeta=l,window.viewPortNum=k}e(); b.addEventListener("resize", function(){e()},!1);"onorientationchange" in b && b.addEventListener("orientationchange",function(){e()},!1),b.showPlaceholder=1}(window,document);',
    type: 'text/javascript'
};

const sec = 1000;
const min = 60 * sec;
const hour = 60 * min;
const day = 24 * hour;

export const getLeftTime = function(start, end, fix) {
    const left = end - start;
    let d = Math.floor(left / day) + '';
    let h = Math.floor(left % day / hour) + '';
    let i = Math.floor(left % hour / min) + '';
    let s = Math.floor(left % min / sec) + '';
    if (fix) {
        d = d.padStart(2, '0');
        h = h.padStart(2, '0');
        i = i.padStart(2, '0');
        s = s.padStart(2, '0');
    }
    return {d, h, i, s};
};

export const ts = (text, ...args) => {
    args.forEach(i => {
        text = text.replace(/(%s|--)/, i);
    });
    return text;
};
export const ts2 = (text, ...args) => {
    args.forEach((i, j) => {
        const reg = new RegExp(`%s${j}`);
        text = text.replace(reg, i);
    });
    return text;
};
export const ta = (text, ...args) => {
    args.forEach(i => {
        if (i * 1) { // 如果传入的是纯数字，认为是zendesk文章
            i = '{#zendeskArticle1#}' + i;
        }
        text = text.replace('<a>', `<a href="${i}" target="_blank" rel="noopener noreferrer">`);
    });
    return text;
};
/**
 * @return {string}
 */
export const StrReplaceKey = function (str, ...arg) {
    return str.replace(/{([0-9]+)(?:\|\|([^}]+))?}/ig, (_, idx, dValue) => {
        return arg[idx] || dValue || '';
    });
};

export function aliasUrl(siteName = 'hbg') {
    // TODO: 测试环境处理
    const alias = process.browser ? window.GLOBAL_ALIAS : (process.env.alias || {});
    const reg = /(pro-web|www)/;
    if (process.browser) {
        switch(siteName) {
            case 'otc':
                return window.location.origin.replace('www', 'c2c');
            case 'hbdm':
                return window.location.origin.replace(reg, 'dm');
            case 'account':
                return window.location.origin.replace(reg, 'account');
            case 'institution':
                return window.location.origin.replace('www', 'institution');
            case 'futures':
                return window.location.origin.replace('www', 'futures');
            case 'hpt':
                return window.location.origin.replace('www', 'pool');
            case 'current':
                return window.location.origin;
            default:
                return alias[siteName];
        }
    }
    return alias[siteName];
}

// 生成分享的链接 （微博、Facebook、Twitter）
const shareOriginList = {
    wb: 'http://service.weibo.com/share/share.php',
    fb: 'https://www.facebook.com/sharer/sharer.php',
    tt: 'http://twitter.com/share'
};

export function createShareUrl ({
    title = '',
    picUrl = '',
    url = '',
    source = 'wb'
}) {
    const origin = shareOriginList[source];
    title = `${encodeURIComponent(title)}`;
    picUrl = `${encodeURIComponent(picUrl)}`;
    url = encodeURIComponent(url);
    if (source === 'wb') {
        return `${origin}?title=${title} ${picUrl}`;
    } else if (source === 'tt') {
        return `${origin}?text=${title}&url=${url}`;
    } else {
        return `${origin}?u=${url}`;
    }
}

// base64转blob
export function dataURItoBlob (dataURI) {
    let arr = dataURI.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}
// url转base64
export function dataURItoBase64(img){
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    return canvas.toDataURL('image/png');
}
// canvas转blob
export function canvasToBlob (canvas, fileType = 'image/png') {
    return new Promise((resolve, reject) => {
        try {
            if (canvas.toBlob) {
                canvas.toBlob(function(blob) {
                    resolve(blob);
                });
            } else if (canvas.msToBlob) {
                const blob = canvas.msToBlob();
                resolve(blob);
            } else {
                resolve(dataURItoBlob(canvas.toDataURL(fileType)));
            }
        } catch (e) {
            resolve(null);
        }
    });
}

export function term2Day (val, p = 0) {
    const day = 24 * 60 * 60 * 1000;
    if (val > 60 * 60 * 1000) {
        return fix(val / day, p);
    } else {
        return '0.04';
    }
}
export function toPercent(n, p){
    const r = mul(n, 100);
    return (n !== undefined && !isNaN(n)) ? `${p ? fix(r, p): r }%` : '--';
}

// 格式化请求头字段
export function formatHeader (){
    let defaultHeader = {};
    if (!process.browser) return defaultHeader;
    
    const SUB_USER_ID = localStorage.getItem(SUBUSERID);
    const ALL_COOKIE = Cookies.get();
    Object.keys(ALL_COOKIE).forEach( item => defaultHeader[item] = ALL_COOKIE[item] );
    if (defaultHeader.sensorsdata2015jssdkcross) {
        defaultHeader.sensorsdata2015jssdkcross = "";
    }

    return {
        "SUB-USER-ID": SUB_USER_ID,
        ...defaultHeader
    };
};

// 清空登录状态
export const clearLoginStatus = () => {
    Cookies.remove("token");
    localStorage.removeItem("USER_INFO");
};

export function isArray(val) {
    return val && Array.isArray(val);
}

export function isObject(val) {
    return val !== null && toString.call(val) === '[object Object]';
}

export const deepMerge = (
    source,
    target,
    mergeArrays = 'replace'
) => {
    if (!target) {
        return source;
    }
    if (!source) {
        return target;
    }
    return mergeWith({}, source, target, (sourceValue, targetValue) => {
        if (isArray(targetValue) && isArray(sourceValue)) {
            switch (mergeArrays) {
                case 'union':
                    return unionWith(sourceValue, targetValue, isEqual);
                case 'intersection':
                    return intersectionWith(sourceValue, targetValue, isEqual);
                case 'concat':
                    return sourceValue.concat(targetValue);
                case 'replace':
                    return targetValue;
                default:
                    throw new Error(`Unknown merge array strategy: ${mergeArrays}`);
            }
        }
        if (isObject(targetValue) && isObject(sourceValue)) {
            return Utils.deepMerge(sourceValue, targetValue, mergeArrays);
        }
        return undefined;
    });
};