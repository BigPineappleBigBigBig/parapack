<template>
    <div id="main bg-white">
        <v-head ref="head"></v-head>
        <Nuxt />
    </div>
</template>
<script>
import Header from "~/components/Header";

export default {
    name: "Mains",
    components: {
        "v-head": Header,
    },
    data: function () {
        return {
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
