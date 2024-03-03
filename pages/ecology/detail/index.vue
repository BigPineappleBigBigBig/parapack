<template>
    <div>
        <div :class="`pt-34px pb-86px ${loading ? 'min-h-500px' : ''}`" v-loading="loading">
            <div class="pp-box" v-if="data && !loading">
                <Info :data="data"></Info>
                <Chart />
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
export default {
    layout: "mains",
    name: "EcologyDetail",
    components: {
        MoreList,
        Info,
        Chart
    },
    computed: {
        id() {
            return this.$route.query.id;
        },
    },
    data: () => {
        return {
            data: undefined,
            loading: true,
        };
    },
    computed: {
        medium() {
            return this.data.medium ? JSON.parse(this.data.medium) : {};
        },
    },
    watch: {
        "$i18n.locale": {
            handler(v) {
                v && this.fetchData();
            },
            immediate: true,
        },
    },
    methods: {
        async fetchData() {
            this.loading=true;
            const { code, msg, data } = await getBrandList({
                id: this.id,
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