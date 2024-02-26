enum OnSaleEnum {
    /** @description 售罄 */
    SoldOut = 1,
    /** @description 热卖 */
    Selling,
    /** @description 即将开售 */
    Timing,
    /** @description 尚未挂售 */
    UnResell,
    /** @description 取消挂售 */
    CancelResell,
    /** @description 转售 */
    Resell,
    /** @description 隐藏 */
    Hide,
    /** @description 即将/尚未开拍 */
    UnAuction,
    /** @description 竞拍中 */
    Auctioning,
    /** @description 结算中 */
    Calculating,
    /** @description 已成交 */
    Auctioned,
    /** @description 已流拍 */
    Unsold,
    /** @description 商品转入中、锁单 */
    Lock,
    /** @description 正在提出 */
    Withdrawing,
    /** @description 已提出 */
    Withdrawal,
    /** @description 待支付 */
    Obligation,
    /** @description 站外导入尚未挂售 */
    NoSell,
    /** @description 商品挂售上链中 */
    UPChaining,
    /** @description 商品取消挂售上链中 */
    CancelChaining,
    /** @description 合成锁定中（原料藏品） */
    MergeSourceLocked ,
    /** @description 合成中（目标藏品） */
    MergeTargetLocked,
    /** @description 已销毁（原料藏品） */
    Destroyed,
    /** @description 待合成（目标藏品） */
    UnCreated,
    /** @description 待空投 */
    WaitDrop
}

interface GetRateInterface{
    /** @description 链上手续费 */
    chainFee: number,
    /** @description 平台手续费 */
    platformFee: number,
    /** @description 支付通道手续费 */
    payFee: number
}

interface TblGoodsPurchaseListItemInterface {
    /** @description  主键ID */
    id: number,
    /** @description  专辑id */
    albumId: number,
    /** @description  0 初始化 1 终止 */
    purchaseStatus: number,
    /** @description  开始时间 */
    startTime: number,
    /** @description  结束时间 */
    endTime: number,
}

interface TblGoodsDropInterface{
    /** @description  主键ID */
    id: number,
    /** @description  专辑id */
    albumId: number,
    /** @description  0 未开始 1 已完成 */
    dropStatus: number,
    /** @description  开始时间 */
    startTime: number,
}

interface GetGoodsInfoInterface{
    /** @description  用途 1-售卖 2-目标 3- 空投 */
    goodUse: number,
    /** @description 是否显示价格 0-显示，1-不显示 */
    showPrice: number,
    /** @description 专辑状态，0:隐藏专辑、1：售罄、2:热卖、3、即将开售、4:尚未开售、5:取消挂售 */
    albumStatus: number,
    /** @description 优先空投数据 */
    tblGoodsDrop?: TblGoodsDropInterface,
    /** @description 优先购数据 */
    tblGoodsPurchaseList?: TblGoodsPurchaseListItemInterface[],
    /** @description  专辑id */
    albumId: number,
    /** @description  商品名称 */
    gName: string,
    /** @description  品牌id */
    brandId?: number,
    /** @description  品牌名称(冗余用) */
    brandName?: string,
    /** @description  商品地址 */
    gUrls: string[],
    /** @description  作品描述 */
    gDesc: string,
    /** @description  商品特征 多个["胡景晖","确认去"] 最多10个 */
    gFeatures?: string[],
    /** @description  缩略图1 */
    thumbPic: string,
    /** @description  缩略图2 */
    thumbPic2: string,
    /** @description  商品细节图片 */
    gDetailUrls: string[],
    /** @description  创作者id */
    authorId: number,
    /** @description  转售分成百分比 */
    transferShare: number,
    /** @description  销售状态 */
    onSale: OnSaleEnum,
    /** @description  购买代币usdt */
    token?: string,
    /** @description  代币数量 */
    tokenNum?: number,
    /** @description  开售时间 */
    onSaleTime?: number
}

export {
    OnSaleEnum,
    GetRateInterface,
    GetGoodsInfoInterface
}
