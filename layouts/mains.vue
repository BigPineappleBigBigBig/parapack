<template>
    <div
        id="main"
        class="bg-white min-w-[1200px] max-w-2560px"
    >
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
    // head: {
    //     script: [{
    //         innerHTML: `(function(w,d) {function setSize() {
    //     var clientWidth = d.documentElement.clientWidth < 1200 ? 1200 : d.documentElement.clientWidth;
    //     var currentFontSize = clientWidth / 10;
    //     d.documentElement.style.fontSize = currentFontSize + 'px';
    //   }
    //   w.addEventListener('resize',setSize);
    //   w.addEventListener('pageShow',setSize)
    //   w.addEventListener('DOMContentLoaded',setSize)
    // })(window,document)`,
    //         type: 'text/javascript'
    //     }],
    //     __dangerouslyDisableSanitizers: ['script', 'noscript']
    // },
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
