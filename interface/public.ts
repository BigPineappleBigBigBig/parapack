interface ListTemplateInterface<T>{
    list: T[];
}

interface PageListTemplateInterface<T> {
    currPage: number,
    hashNext: number,
    list: T[],
    pageSize: number,
    totalCount: number,
    totalPage: number
}

enum OnSaleEnum {
    /** @description 售罄 */
    SoldOut = 1,
    /** @description 热卖 */
    Selling,
    /** @description 即将开售 */
    Timing,
    /** @description 尚未开售 */
    UnResell,
    /** @description 取消寄售 */
    CancelResell,
    /** @description 寄售 */
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
    /** @description 站外导入尚未寄售 */
    NoSell,
    /** @description 商品寄售上链中 */
    UPChaining,
    /** @description 商品取消寄售上链中 */
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

export {
    ListTemplateInterface,
    PageListTemplateInterface,
    OnSaleEnum,
};
