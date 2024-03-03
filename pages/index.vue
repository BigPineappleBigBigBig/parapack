<template>
    <div>
        <NewsVue />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
    </div>
</template>

<script>
import NewsVue from '~/components/Home/News.vue';
import Card1 from '~/components/Home/Card1.vue';
import Card2 from '~/components/Home/Card2.vue';
import Card3 from '~/components/Home/Card3.vue';
import Card4 from '~/components/Home/Card4.vue';
import Card5 from '~/components/Home/Card5.vue';
import Card6 from '~/components/Home/Card6.vue';
export default {
    layout: 'mains',
    components: {
        NewsVue,
        Card1,
        Card2,
        Card3,
        Card4,
        Card5,
        Card6
    },
    async created() {
        // this.$router.push('/market');
    },
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>
