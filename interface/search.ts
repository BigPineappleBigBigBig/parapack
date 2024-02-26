import {ListTemplateInterface} from "~/interface/public";

interface SearchHideListItemInterface{
    /** @description 数据id */
    id: string,
    /** @description 0:专辑合集、1:盲盒合集、2:单个藏品、3:单个盲盒 */
    hideType: string,
    /** @description 隐藏商品id */
    hideId: string,
}

interface SearchHideListInterface extends ListTemplateInterface<SearchHideListItemInterface>{

}

export {
    SearchHideListInterface,
    SearchHideListItemInterface
};
