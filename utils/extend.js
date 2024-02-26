import { isPlainObject, isArray } from './types';
/**
 * 
 * @param  {Object} target
 */
export function extend(target, ...args) {
    let deep;

    if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
    }
    args.forEach(function(arg) {
        _extend(target, arg, deep);
    });
    return target;

    function _extend(target, source, deep) {
        for (let key in source) {
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                    target[key] = {};
                }
                if (isArray(source[key]) && !isArray(target[key])) {
                    target[key] = [];
                }
                _extend(target[key], source[key], deep);
            } else if (source[key] !== undefined) {
                target[key] = source[key];
            }
        }
    }
}
