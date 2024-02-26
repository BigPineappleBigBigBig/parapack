const Mock = require('mockjs');

if(process.browser) {
    Mock.setup({
        timeout: '200-500' // 表示响应时间介于 200 和 500 毫秒之间，默认值是'10-100'。
    });
}

export default Mock;
