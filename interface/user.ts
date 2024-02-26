interface UserReqInfoInterface{
    /** @description 用户id */
    userId: number,
    /** @description 用户名称 */
    userName: string,
    /** @description 用户钱包 */
    walletAddress: string,
    /** @description 手机号 */
    mobile: string,
    /** @description 是否拉入黑名单 0-否，1-拉入黑名单 */
    isProhibit: number,
    /** @description 是否问题用户 0-否，1-是 */
    isSpecial: number,
    /** @description 易宝钱包ID */
    yeepayWalletId?: number,
    /** @description 易宝用户编号 */
    merNo?: string,
    /** @description 平台手续费百分比 */
    userRate?: number,
    /** @description 链上手续费百分比 */
    chainRate?: number,
    /** @description 生效开始时间 */
    startTime?: number,
    /** @description 生效结束时间 */
    endTime?: number,
    /** @description 用户创建时间 */
    createTime?: number,
}

export {
    UserReqInfoInterface
}
