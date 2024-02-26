const Mock = require("../index").default;

Mock.mock(/notice\/update/, "post", (o) => {
    const data = {
        "code": 1,
        "message": null,
        "success": true,
        "data": null
    };
    console.info("MOCK:", o, data);
    return data;
});
