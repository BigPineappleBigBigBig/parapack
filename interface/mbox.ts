import {ListTemplateInterface} from "~/interface/public";

interface GetBlindPurchaseItemInterface{
    /** @description 优先购id */
    id: number,
    /** @description 盲盒id */
    blindId: number,
    /** @description 0 正常状态 1终止状态 */
    purchaseStatus: number,
    /** @description 已售数量 */
    sellNum: number,
    /** @description 开始时间 */
    startTime: string,
    /** @description 结束时间 */
    endTime: string,
    /** @description 创建时间 */
    createTime: string,
}

interface GetBlindPurchaseListInterface extends ListTemplateInterface<GetBlindPurchaseItemInterface>{

}

export {
    GetBlindPurchaseItemInterface,
    GetBlindPurchaseListInterface
}
