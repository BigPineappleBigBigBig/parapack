<template>
    <div class="pp-box py-60px">
        <BrandListVue
            :tag="tag"
            :title="info && info.tagShow"
            :is-more="false"
        />
    </div>
</template>
<script>
import { getTags } from "~/api";
import BrandListVue from '~/components/Ecology/BrandList';
export default {
    name: 'EcologyDetail',
    layout: 'mains',
    components: {
        BrandListVue
    },
    data: () => {
        return {
            info: undefined,
        };
    },
    watch: {
        "$i18n.locale": {
            handler(v) {
                v && this.fetchData();
            },
            immediate: true,
        },
    },
    computed: {
        tag() {
            return this.$route.query.t;
        },

    },
    methods: {
        async fetchData() {
            const { code, msg, data } = await getTags();
            if (code === 200) {
                this.info = data.find((item => item.tag === this.tag));
            } else {
                Message.error(msg);
            }
        }
    }
};
</script>