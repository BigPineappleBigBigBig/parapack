const REG = {
    "*": /[\w\W]+/,
    "p": /^[0-9]{5,11}$/,
    "pwd": /(?!\d+$)[\w\W]{8,20}$/,
    "passport": /^(?!_-)(?!.*?_$)([a-zA-Z0-9\s,'.]){5,20}$/,
    "pinyin": /[A-Za-z]$/,
    "e": /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    "xss":/^([^/\\:<>!*|"?$=%^#])*$/,
    "url":/^http(s)?:\/\//,
    "account":/^[0-9]{5,11}$|^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    "null": (value) => !!value ? 2 : 0,
    "invite": /[a-zA-Z0-9_]{5}$/,
    "total":/^[0-9]+([.]{1}[0-9]+){0,1}$/,    //总金额 只允许输入整数和小数
    "userPwd": /^[A-Za-z0-9]{6,20}$/
};

export default function Validate(value, type) {
    if (!value || !type) {
        return;
    }

    switch (type) {
        case 'phone':
            return REG.p.test(value);
        case 'email':
            return REG.e.test(value);
        case 'pwd':
            return REG.pwd.test(value);
        case 'passport':
            return REG.passport.test(value);
        case 'pinyin':
            return REG.pinyin.test(value);
        case 'xss':
            return REG.xss.test(value);
        case 'url':
            return REG.url.test(value);
        case 'null':
            return REG['null'].test(value);
        case 'account':
            return REG['account'].test(value);
        case 'invite':
            return REG['invite'].test(value);
        case 'total':
            return REG['total'].test(value);
        case 'userPwd':
            return REG['userPwd'].test(value);
        default:
            return true;
    }
}
