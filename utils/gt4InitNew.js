export  const initGt4 = (config)=>{
    const {product='bind',captchaId,ref,closeBack,others={},key,successBack,DomId}=config;
    try {
        initGeetest4({
            captchaId,
            product,
            rem:1,
            ...others
        },function (captchaObj) {
            document.getElementById(DomId).addEventListener('click', function () {
                captchaObj.showCaptcha();
            });
            captchaObj.onSuccess(function () {
                let result = captchaObj.getValidate();
                let paramsObj ={
                    lot_number: result.lot_number,
                    captcha_output: result.captcha_output,
                    pass_token: result.pass_token,
                    gen_time: result.gen_time,
                    captcha_id: captchaId,
                    captcha_key: key
                };
                successBack&&successBack(paramsObj);
                // captchaObj.reset();
                return;
            }).onFail(function (failObj) {
                //  对错误信息做一些统计
                // let paramsObj ={...failObj};
                console.log('failObj',failObj);
                // reject(paramsObj);
                // return;
            }).onError(function (error) {
                // let paramsObj ={code_num:0};
                console.log('error',error);
                // reject(paramsObj);
                // return;
                // 出错啦，可以提醒用户稍后进行重试
                // error 包含error_code、msg
                // {code: '60000',msg:"用户配置错误"，desc:{ detail: "用户id缺少"} }
            }).onClose(function () {
                closeBack&&closeBack();
                // captchaObj.destroy();
                return;
                // 用户把验证关闭了，这时你可以提示用户需要把验证通过后才能进行后续流程
            });
        });
    } catch (error) {
        console.log(error);
    }
};