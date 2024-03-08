import Vue from 'vue';
import {BannerType, ContentType, OsType, VersionUpdateEnum } from "~/interface/app";
enum ColorTagEnum {
    Album = '#6067FF',
    Mbox = '#FF9261',
    Brand = '#41C4D0',
    Creator = '#6841EC',
    Link = '#16BBF3',
    Classify = '#2d8cf0'
}

declare module 'vue/types/vue' {
    interface Vue {
        /**
         * @description 扩展变量
         * */
        BannerType;
        ContentType;
        ColorTagEnum;
        VersionUpdateEnum;
        SyntheticStatusEnum;
        OsType;
        RecommendType;

        /**
         * @description Vue全局提示方法
         * @param message
         * @param type success info warning error ...
         * @param duration 毫秒
         * */
        $toast(message: string, type?: string, duration?: number): void;

    }
}

Vue.prototype.$toast = function (message: string, type?: string, duration?: number){
    duration = duration || 1.5;
    type = type || 'info';
    let config = {
        content: message,
        duration
    }
    switch (type){
        case 'info':
            this.$message.info(config);
            break;
        case 'success':
            this.$message.success(config);
            break;
        case 'warning':
            this.$message.warning(config);
            break;
        case 'error':
            this.$message.error(config);
            break;
        case 'loading':
            this.$message.loading(config);
            break;
    }
}

Vue.prototype.BannerType = BannerType;
Vue.prototype.ContentType = ContentType;
Vue.prototype.ColorTagEnum = ColorTagEnum;
Vue.prototype.VersionUpdateEnum = VersionUpdateEnum;
Vue.prototype.OsType = OsType;