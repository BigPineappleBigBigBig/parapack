// 登录用户相关
export enum User_Login_Info {
    /** @description 登录 */
    LogIn = '@v1.1/user/login',
    /**
     * @description 校验token
     * @method post
     * */
     CheckToken = '@nft/user/checkToken',
    /**
     * @description 绑定手机号时发送短信验证码的接口
     * @method post
     * */
     SendSMSCode = '@nft/user/sendSMSCode',
    // /**
    //  * @description 查询用户信息
    //  * @method post
    //  *  */
    // GetUserInfo = '@cms/tblSysUserBackstage/getUserByUCode',
    // /**
    //  * @description 更新用户密码
    //  * @method post
    //  *  */
    // ModifyUserPwd = '@cms/tblSysUserBackstage/updatePassword',
}

// 做市相关
export enum Market_Api {
    /**
     * @description 获取子账号
     * @method get
     * */
    SubUserList = '@market/users/listSubUserByMainUserId',
    /**
     * @description 创建订单并支付
     * @method get
     * */
     GetWalletBalanceByType = '@market/users/getWalletBalanceByType',
    /**
     * @description 根据专辑id 查询 在售商品列表
     * @method get
     * */
    ListOnSaleGoods = '@market/goods/listOnSaleGoodsByAlbumId',
     /**
     * @description 查询所有拥有的藏品
     * @method get
     * */
    ListGoodsByOwner = '@market/goods/listGoodsByOwnerUserId',
    /**
     * @description 查询所有拥有的藏品
     * @method get
     * */
    listLikeName = '@market/album/listLikeName',
    /**
     * @description 寄售商品
     * @method get
     * */
    Resale = '@market/goods/resale',
     /**
     * @description 取消寄售
     * @method get
     * */
    CancelResale = '@market/goods/cancelResale',
    /**
     * @description 创建订单并支付
     * @method post
     * */
    CreateOrderAndPay = '@market/goods/createOrderAndPay',
    /**
     * @description 批量锁商品
     * @method GET
     * */
    BatchLockGoods = '@market/orders/batchLockGoods',
    /**
     * @description 批量购买
     * @method post
     * */
    BatchCreateOrderAndPay = '@market/orders/batchCreateOrderAndPay',
    /**
     * @description 我的藏品
     * @method get
     * */
    ListGoodsByOwnerMainUserId = '@market/goods/listGoodsByOwnerMainUserId',

    
}