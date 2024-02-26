import {PageListTemplateInterface} from "~/interface/public";

interface ExpYesPushItemInterface {
    /** @description  是否匿名 */
    anonymous: boolean
    /** @description  内容 */
    content: string
    /** @description  创建时间 */
    createTime: number
    /** @description  曝光者头像 */
    exHeadPic: string
    /** @description  曝光者昵称 */
    exName: string
    /** @description  id */
    id: number
    /** @description  图片多张 用 ，隔开 */
    pics: string
    /** @description  是否处理 */
    processed: boolean
    /** @description  处理时间 */
    processingTime: number
    /** @description  是否发布 */
    pushed: boolean
    /** @description  发布时间 */
    pushedTime: number
    /** @description  官方回复 */
    reply: string
    /** @description  主题 */
    title: string
    /** @description  曝光者id */
    uid: number
    /** @description  权重 */
    weights: number
}

interface ExpYesPushListInterface extends PageListTemplateInterface<ExpYesPushItemInterface>{
}

export {
    ExpYesPushItemInterface,
    ExpYesPushListInterface
}
