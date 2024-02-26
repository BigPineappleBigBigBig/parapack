<template>
    <div id="main">
        <div
            v-loading="loading"
            element-loading-text="数据加载中..."
            element-loading-background="rgba(0, 0, 0, 0.8)"
            style="height: 100%"
        >
            <v-head ref="head"></v-head>
            <div style="padding-top: 20px"></div>
            <Nuxt />
        </div>
    </div>
</template>
<script>
import headers from "@/components/headers.vue";

export default {
    name: "Mains",
    components: {
        "v-head": headers,
    },
    data: function () {
        return {
            loading: false,
        };
    },
    mounted: function () {},
    methods: {},
};
</script>
<style>
#main {
    min-height: 100vh;
    width: 100%;
    min-width: 1200px;
    background-color: #2a2c3b;
}
.el-message__content {
    display: inline-block;
}
.el-message__closeBtn {
    display: inline-block !important;
    vertical-align: middle !important;
    line-height: 0 !important;
}
</style>
