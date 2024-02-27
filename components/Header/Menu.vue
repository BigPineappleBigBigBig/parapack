<template>
    <ul class="flex gap-x-99px">
        <li
            :class="`text-18px :hover(pp-text-primary font-600) ${activeRoute === menu.name ? 'pp-text-primary font-600' : ''}`"
            v-for="itemMenu in menu"
            :key="itemMenu.name"
        >
            <nuxt-link :to="itemMenu.name">
                {{ itemMenu.title }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Menu",
    data: function () {
        return {
            menu: [
                {
                    title: "生态",
                    name: "/",
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
    computed: {
        activeRoute() {
            const { name, meta } = this.$route;
            return name;
        },
    },
};
</script>
