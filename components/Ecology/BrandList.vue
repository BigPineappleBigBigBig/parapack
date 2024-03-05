<template>
    <div>
        <div class="mb-34px flex justify-between items-center">
            <h4 class="text-31px pp-text-t1 font-600" v-if="!isTime">
                {{ title }}
            </h4>
            <div v-else>
                <el-radio-group v-model="timeType">
                    <el-radio-button label="6h" class="text-31px"
                        >{{$t('6时')}}</el-radio-button
                    >
                    <el-radio-button label="24h" class="text-31px"
                        >{{$t('24时')}}</el-radio-button
                    >
                </el-radio-group>
            </div>
            <nuxt-link
                :to="localePath(`/ecology/detail?t=${tag}`)"
                v-if="isMore && !isTime"
                class="pp-text-primary text-15px hover_opacity hover:(underline)"
            >
                {{$t('查看更多')}}
            </nuxt-link>
        </div>
        <div v-loading="loading" :class="loading ? 'h-200px' : ''">
            <ul
                class="grid grid-cols-3 flex gap-x-118px gap-y-43px"
                v-if="dataList.length && !loading"
            >
                <li v-for="brandItem in dataList" :key="brandItem.title">
                    <BrandCard :data="brandItem"></BrandCard>
                </li>
            </ul>
            <el-empty
                v-else-if="!dataList.length && !loading"
                :image-size="200"
            ></el-empty>
        </div>
    </div>
</template>

<script>
import { Message } from "element-ui";
import BrandCard from "./BrandCard.vue";
import { getBrandList } from "~/api";
export default {
    name: "BrandList",
    components: {
        BrandCard,
    },
    props: {
        tag: {
            typeof: String,
            default: "",
        },
        title: {
            typeof: String,
            default: "",
        },
        type: {
            typeof: String,
            default: "",
        },
        isMore: {
            typeof: Boolean,
            default: true,
        },
    },
    data: () => {
        return {
            dataList: [],
            timeType: "6h",
            loading: true,
        };
    },
    watch: {
        tag(v) {
            v && this.fetchData();
        },
        "$i18n.locale": {
            handler(v) {
                v && this.fetchData();
            },
            immediate: true,
        },
        timeType(v) {
            v && this.fetchData();
        },
    },
    computed: {
        isTime() {
            return this.type && this.type === "timeType";
        },
    },
    methods: {
        async fetchData() {
            this.loading = true;
            const { code, msg, data } = await getBrandList({
                tag: this.isTime ? undefined : this.tag,
                timeType: this.timeType,
            });
            this.loading = false;
            if (code === 200) {
                this.dataList = [...data.lists.slice(0, 6)];
            } else {
                Message.error(msg);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/.el-radio-button__inner {
    font-size: 27px;
    border-width: 2px;
    padding: 12px 40px;
    color: #3b28cc;
    border-color: #3b28cc;
}
/deep/.el-radio-button:first-child .el-radio-button__inner,
.el-radio-button:last-child .el-radio-button__inner {
    border-radius: 9px 0 0 9px;
    border-width: 2px;
    border-left: 2px solid #3b28cc;
}
</style>
