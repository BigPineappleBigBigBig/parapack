import {ListTemplateInterface, PageListTemplateInterface} from "~/interface/public";

export enum BannerType {
    /** @description 首页的banner */
    HomeBanner,
    /** @description 盲盒的banner */
    MboxBanner,
    /** @description 黄金位 */
    HomeGold
}

export enum ContentType {
    /** @description 专辑 */
    Album,
    /** @description 盲盒 */
    Mbox,
    /** @description 自定义的链接 */
    Link,
    /** @description 品牌 */
    Brand,
    /** @description 创作者 */
    Creator,
    /** @description 分类 */
    Classify
}

export enum VersionUpdateEnum {
    /** @description 强制更新 */
    Force = 0,
    /** @description 建议更新 */
    Suggest = 1,
    /** @description 不提示更新 */
    Normal = 2,
    /** @description 不更新 */
    None = 3
}

export enum OsType {
    Android,
    IOS = 1,
    IOSFIRM = 2
}

interface HomepageBannerInfoListInterface extends ListTemplateInterface<HomepageBannerInfoInterface>{

}

interface HomepageBannerInfoInterface {
    /** @description 自增主键 */
    id?: number;
    /** @description 图片 */
    pic: string;
    /** @description 对应的配置的id */
    contentId?: number;
    /** @description 外部链接 */
    url?: string;
    /** @description 大标题 */
    title?: string;
    /** @description 小标题 */
    subtitle?: string;
    /** @description banner内容的类型 0 专辑 1 盲盒 2 自定义的链接 3 品牌 4 创作者 */
    contentType: ContentType;
    /** @description banner类型 0 首页的banner 1 盲盒的banner 2 黄金位 */
    bannerType: BannerType;
    /** @description 同类型下的排序 */
    sort_num?: number;
}

interface SearchAlbumListInterface extends ListTemplateInterface<AlbumListInfoInterface>{

}

interface AlbumListInfoInterface{
    /** @description 专辑的id */
    albumId: number;
    /** @description 专辑的名字 */
    albumName: string;
}

interface VersionInfoInterface{
    /** @description 版本id */
    id: number,
    /** @description 版本名称 */
    verCode: string,
    /** @description app下载地址 */
    downUrl?: string,
    /** @description 送审状态 1送审 0不送审 默认0  */
    checkStatus: number | boolean,
    /** @description 安装包上传时间 */
    uploadTime?: number,
    /** @description 官网是否生效，0 是 ； 1 否 */
    isEffective?: number,
    /** @description app更新方式，0:强制更新;1:建议更新;2:不提示更新；3不更新 */
    verUpdate?: VersionUpdateEnum,
    /** @description 操作系统 */
    osType?: OsType,
    /** @description 操作人id */
    optUid?: number,
    /** @description 创建时间 */
    createTime?: number,
    /** @description 更新时间 */
    updateTime?: number,
    /** @description 是否上架0不上架，1上架 */
    onShelvesStatus?: number | boolean,
    /** @description ipa包下载链接 */
    ipaUrl?: string,
}

interface AndroidVersionInfoInterface{
    /** @description 版本名称 */
    verCode: string,
    /** @description app下载地址 */
    downUrl?: string,
    /** @description 送审状态 1送审 0不送审 默认0  */
    checkStatus: number | boolean,
    /** @description 安装包上传时间 */
    uploadTime?: number,
    /** @description 更新时间 */
    updateTime: number,
}

interface iosVersionInfoInterface{
    /** @description 版本名称 */
    verCode: string,
    /** @description app下载地址 */
    downUrl: string,
    /** @description 是否上架 */
    onShelvesStatus: number,
    /** @description 送审状态 1送审 0不送审 默认0  */
    checkStatus: number | boolean,
}

interface iosFirmVersionInfoInterface{
    /** @description 版本名称 */
    verCode: string,
    /** @description app下载地址 */
    downUrl: string,
    /** @description 是否上架 */
    onShelvesStatus: number,
    /** @description ipa包下载链接 */
    ipaUrl: string,
    /** @description 送审状态 1送审 0不送审 默认0  */
    checkStatus: number | boolean,
}

interface VersionListInterface extends PageListTemplateInterface<VersionInfoInterface>{

}

/** @description 通用推荐类型 */
export enum RecommendType {
    /** @description 首页黄金位 */
    Gold= 0,
    /** @description 新品 */
    New = 1,
    /** @description 转卖 */
    Market= 2
}

export {
    HomepageBannerInfoListInterface,
    HomepageBannerInfoInterface,
    SearchAlbumListInterface,
    AlbumListInfoInterface,
    VersionInfoInterface,
    VersionListInterface,
    AndroidVersionInfoInterface,
    iosVersionInfoInterface,
    iosFirmVersionInfoInterface
};
