import Cookies from "js-cookie";
import { TOKEN_NAME } from "@/config/app";
import { UserInfoApi } from "@/config/rest.api";

export const state = () => ({
    locale: 'zh-cn',
    isLogin: false,
    layoutActive: '',
    userInfo: {},
});

export const mutations = {
    SET_LOCALE(state, data) {
        // 设置语言
        state.locale = data;
    },
    SET_LAYOUT_ACTIVE(state, data) {
        state.layoutActive = data;
    },
    SET_IS_LOGIN(state, data) {
        state.isLogin = data;
    },
    SET_USER_INFO(state, data) {
        state.userInfo = data;
    },
};

export const actions = {
    async checkToken({commit, dispatch}) {
        const {success, data} = await UserInfoApi.check();
        let uid = (success && data.uid) || null;
        commit('SET_IS_LOGIN', !!uid);
        if (!uid) {
            commit("SET_USER_INFO", {});
            this.$router.push('/{#LANG#}/login/');
        }
    },
    async logout({commit}) {
        Cookies.remove(TOKEN_NAME);
        commit('SET_IS_LOGIN', false);
        commit("SET_USER_INFO", {});
        localStorage.clear();
    }
};
