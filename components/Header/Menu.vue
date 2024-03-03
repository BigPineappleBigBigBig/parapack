<template>
    <div class="flex h-[53px] gap-x-86px">
        <template v-for="itemMenu in menu">
        <li
            :class="`text-15px h-full flex items-center justify-center hover:(pp-text-primary font-600) ${activeRoute === itemMenu.name ? 'pp-text-primary font-600' : ''}`"
            :key="itemMenu.name"
        >
            <nuxt-link :to="itemMenu.name">
                {{ itemMenu.title }}
            </nuxt-link>
        </li>
    </template>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data: function () {
        return {
            activeRoute: '/',
            menu: [
                {
                    title: "生态",
                    name: "/ecology",
                },
                {
                    title: "视频",
                    name: "/vodio",
                },
                {
                    title: "活动",
                    name: "/activity",
                },
                {
                    title: "联系我们",
                    name: "/contact",
                },
            ],
        };
    },
    watch: {
        // activeRoute() {
        //     const { path } = this.$route;
        //     console.log(path==='/','sdads',path)
        //     return path;
        // },
        '$route.path':{
            handler(v) {
                this.activeRoute = this.$route.path
            },
            immediate:true
        },
    },
};
</script>
