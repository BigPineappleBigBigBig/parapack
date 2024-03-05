<template>
    <div class="flex h-[53px] gap-x-86px">
        <li
        v-for="itemMenu in menu"
        :key="itemMenu.name"
            :class="`text-15px h-full flex items-center justify-center hover:(pp-text-primary font-600) ${activeRoute.includes(itemMenu.name) && activeRoute !== '/' ? 'pp-text-primary font-600' : ''}`"
           
        >
            <nuxt-link :to="itemMenu.name">
                {{ itemMenu.title }}
            </nuxt-link>
        </li>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data: function () {
        return {
            activeRoute: '/',
        };
    },
    computed: {
        menu() {
            return [
                {
                    title: this.$t("生态"),
                    name: "/ecology",
                },
                {
                    title: this.$t("视频"),
                    name: "/video",
                },
                {
                    title: this.$t("活动"),
                    name: "/activity",
                },
                // {
                //     title: "联系我们",
                //     name: "/contact",
                // },
            ]
        }
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
