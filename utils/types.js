/**
 * 获取数据类型
 */
export function getType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}
  
export function isObject(o) {
    return getType(o) === 'Object';
}
  
export function isWindow(o) {
    return getType(o) === 'Window';
}
  
export function isArray(ary) {
    return getType(ary) === 'Array';
}
  
export function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}
  