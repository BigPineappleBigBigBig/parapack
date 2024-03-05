<template>
    <div>
        <div
            :class="`pt-34px pb-86px ${loading ? 'min-h-500px' : ''}`"
            v-loading="loading"
        >
            <div
                class="pp-box"
                v-if="data && !loading"
            >
                <Info :data="data"></Info>
                <Chart :data="data"/>
                <div class="mt-100px mb-60px">
                    <img
                        class="w-full h-auto"
                        src="~/assets/images/ecologyTip.jpg"
                    />
                </div>
                <News></News>
            </div>
        </div>
        <MoreList />
    </div>
</template>
<script>
import { getBrandList } from "~/api";
import MoreList from "~/components/Ecology/MoreList";
import Info from "@/components/Ecology/Detail/Info";
import Chart from "@/components/Ecology/Detail/Chart";
import News from "@/components/Ecology/Detail/News";
export default {
    layout: "mains",
    name: "EcologyDetail",
    components: {
        MoreList,
        Info,
        Chart,
        News
    },

    data: () => {
        return {
            data: undefined,
            loading: true,
        };
    },
    watch: {
        "$i18n.locale": {
            handler(v) {
                v && this.$route.query.id && this.fetchData();
            },
            immediate: true,
        },
    },
    methods: {
        async fetchData() {
            this.loading=true;
            const { code, msg, data } = await getBrandList({
                id: this.$route.query.id,
            });
            this.loading=false;
            if (code === 200) {
                this.data = data.lists[0];
            } else {
                Message.error(msg);
            }
        },
    },
};
</script>