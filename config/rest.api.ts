import { Rest } from "nft-common/utils/rest";
import cookies from 'js-cookie';
import { TOKEN_NAME } from "~/config/app";
import {
    User_Login_Info,
    Market_Api
} from "~/config/rest.conf";
import {REQUEST_ERROR_CODE} from "~/config/app";
import { formatHeader } from '~/plugins/utils';
import { resolveURL } from "~/utils/public";

// Rest 配置
Rest.config({
    useTransId: true,
    onResponse: (res, rep) => {
        if(res.encryptKey){
            const win: any = window;
            const deData = win.de(res.data, res.encryptKey) || {};
            res = rep.data = deData;
        }
        const {code} = res;
        const { status, success } = rep.data;
        if (!success && REQUEST_ERROR_CODE.includes(+status)) {
            const { origin, pathname } = location;
            if (!pathname.includes('login')) {
                location.href = `${origin}/login/`;
                return;
            }
        }
    },
    onRequest: (config) => {
        const {method, data, url, params} = config;
        console.log(method, url, params || data);
        if(method.toUpperCase() === 'POST' && url.indexOf('nft/user/checkToken') < 0 && url.indexOf('/nft-market/')){
            const win: any = window;
            const cryptData = win.en(data);
            config.data = {
                encryptKey: cryptData.encryptkey,
                data: cryptData.data
            };
        }
    }
});

// 别名配置
Rest.alias({
    '@market': {
        url: '/nft-market',
        headers: () => formatHeader()
    },
    '@cms': {
        url: '/nft-mall-cms',
        headers: () => formatHeader()
    },
    '@v1.1': {
        url: '/nft-mall-web/v1.1/nft',
        headers: () => formatHeader()
    },
    '@nft': {
        url: '/nft-mall-web/nft',
        headers: () => formatHeader()
    },
    '@file': {
        url: '/file'
    }
});

export const UserInfoApi = {
    async logIn(data) {
        const result = await Rest.post(User_Login_Info.LogIn, data);
        return Rest.result(result);
    },
    // 检查用户是否登录
    async check() {
        return Rest.post(User_Login_Info.CheckToken, {
            token: cookies.get(TOKEN_NAME) || '0'
        });
    },
    // 获取验证码
    async sendSMSCode(data,params) {
        return Rest.post(resolveURL(User_Login_Info.SendSMSCode,{...params}), data);
    },
};

export const MarketApi = {
    // 获取子账号
    async subUserList() {
        const result = await Rest.get(Market_Api.SubUserList);
        return Rest.result(result);
    },
    // 获取子账号
    async getWalletBalanceByType(data) {
        const result = await Rest.get(Market_Api.GetWalletBalanceByType, data);
        return Rest.result(result);
    },
    // 根据专辑id 查询 在售商品列表
    async getGoodsByAlbumList(data) {
        const result = await Rest.get(Market_Api.ListOnSaleGoods, data);
        return Rest.result(result);
//         return {
//             code: 1,
//             success: true,
//             data: {
//                 currPage: 1,
//                 hashNext: 0,
//                 pageSize: 100,
//                 totalCount: 3,
//                 list: [
//                 {
//                     "albumId": 300010607,
// "albumType": 0,
// "gId": 304211028,
// "gName": "测试新人9.9",
// "gNum": "1",
// "gStatus": 6,
// "isBuy": 1,
// "ownerId": 50006354,
// "ownerName": "李建的测试账号",
// "payChannel": "",
// "priceCny": 0.01,
// "tokenId": ""
//                 },
//                 {
//                     "albumId": 300010607,
// "albumType": 0,
// "gId": 304211028,
// "gName": "测试新人9.9",
// "gNum": "1",
// "gStatus": 2,
// "isBuy": 1,
// "ownerId": 50006354,
// "ownerName": "李建的测试账号",
// "payChannel": "",
// "priceCny": 0.01,
// "tokenId": ""
//                 },
//                 {
//                     "albumId": 300010607,
// "albumType": 0,
// "gId": 304211028,
// "gName": "测试新人9.9",
// "gNum": "1",
// "gStatus": 2,
// "isBuy": 1,
// "ownerId": 50006354,
// "ownerName": "李建的测试账号",
// "payChannel": "",
// "priceCny": 0.01,
// "tokenId": ""
//                 }
//             ]}
//         }
    },
    
    // 藏品列表
    async searchAlbumList(data) {
        const result = await Rest.get(Market_Api.listLikeName, data);
        return Rest.result(result);
    },
    // 查询所有拥有的藏品
    async getGoodsByOwnerList(data) {
        const result = await Rest.get(Market_Api.ListGoodsByOwner, data);
        return Rest.result(result);
    },
    // 寄售商品
    async resale(data) {
        const result = await Rest.get(Market_Api.Resale, data);
        return Rest.result(result);
    },
    // 取消寄售
    async cancelResale(data) {
        const result = await Rest.get(Market_Api.CancelResale, data);
        return Rest.result(result);
    },
    // 下单购买
    async createOrderAndPay(data) {
        const result = await Rest.post(Market_Api.CreateOrderAndPay, data);
        return Rest.result(result);
    },
    // 批量锁定
    async batchLockGoods(data) {
        const result = await Rest.get(Market_Api.BatchLockGoods, data);
        return Rest.result(result);
    },
    // 批量购买
    async batchCreateOrderAndPay(data) {
        const result = await Rest.post(Market_Api.BatchCreateOrderAndPay, data);
        return Rest.result(result);
    },
    // 我的藏品
    async getListGoodsByOwnerMainUserId(data) {
        const result = await Rest.get(Market_Api.ListGoodsByOwnerMainUserId, data);
        return Rest.result(result);
    },
    
}