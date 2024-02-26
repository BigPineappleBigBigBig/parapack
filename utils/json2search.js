import { getType } from './types';

// 校验哪些值不满足条件，不加入
export function validatorDefault(val) {
    return val !== '' && val !== null && val !== undefined;
}

/**
 * object对象格式化成字符串，以 &，=链接
 */
export function json2search(json, validator, encode = false) {
    const ary = [];
    for (const key in json) {
        const val = json[key];
        // 默认检测
        if (!validatorDefault(val)) {
            continue;
        }
        // 自定义检测
        if (validator && !validator(val)) {
            continue;
        }
        const type = getType(val);
        if (type === 'String' || type === 'Number') {
            let targetVal = val;

            if (encode) {
                try {
                    targetVal = decodeURIComponent(val);
                } catch (e) {
                    console.log(e);
                }
                ary.push(`${key}=${encodeURIComponent(targetVal)}`);
            } else {
                ary.push(`${key}=${targetVal}`);
            }
        } else if (type === 'Object') {
            ary.push(`${key}=${encodeURIComponent(JSON.stringify(val))}`);
        }
    }
    return ary.join('&');
}