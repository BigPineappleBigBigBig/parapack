import {PageListTemplateInterface} from "~/interface/public";

/** @description 状态 0 未开始 1 进行中 2 已结束 */
enum SyntheticStatusEnum {
    Create = 0,
    Doing = 1,
    End = 2
}

interface SyntheticListItemInterface{
    /** @description 数据id */
    id: number,
    /** @description 活动名称 */
    activityName: string,
    /** @description 已合成数量 */
    targetNumber: number,
    /** @description 已销毁数量 */
    burnNumber: number,
    /** @description 活动开始时间 */
    startTime: number | Date,
    /** @description 活动结束时间 */
    endTime: number | Date,
    /** @description 状态 0 未开始 1 进行中 2 已结束 */
    activityStatus: SyntheticStatusEnum
}

interface SyntheticListInterface extends PageListTemplateInterface<SyntheticListItemInterface>{

}

interface ActivityGroupSaveReqInterface{
    /** @description 所需数量 */
    burnAlbumNum: number,
    /** @description 专辑id列表不允许为空 */
    albumIdList: any[]
}

interface SynthesisFormParamsInterface {
    /** @description 主键ID */
    id?: number
    /** @description 活动名字 */
    activityName: string,
    /** @description 活动封面 */
    activityPic: string,
    /** @description 活动说明 */
    activityInfo: string,
    /** @description 活动类型：默认为0-多合一, 1-分组非必选 */
    syntheticType?: number,
    /** @description 合成类型 0时使用。 合成目标专辑 */
    targetAlbumId?: number,
    /** @description 合成类型 0时使用。 燃料专辑 */
    burnAlbumIdList?: any[],
    /** @description 合成类型 1时使用。 燃料专辑原料组列表 */
    burnGroupList?: ActivityGroupSaveReqInterface[],
    /** @description 合成类型 1时使用。 目标专辑原料组 */
    targetGroup?: ActivityGroupSaveReqInterface,
    /** @description 合成条件 0-所有用户，1-部分用户 */
    syntheticCondition?: number,
    /** @description 合成条件 1时使用，用户白名单 */
    file?: any,
    /** @description 合成条件说明 */
    syntheticConditionInfo?: string,
    /** @description 活动开始时间 */
    startTime: any | Date,
    /** @description 活动结束时间 */
    endTime: any | Date,
}

export {
    SynthesisFormParamsInterface,
    SyntheticListItemInterface,
    SyntheticListInterface,
    SyntheticStatusEnum
};
