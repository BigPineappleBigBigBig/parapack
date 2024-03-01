<template>
    <div>
    
    </div>
</template>
<script>
import { getBrandList } from "~/api";
export default {
    name: 'EcologyDetail',
    computed: {
        id() {
            return this.$route.query.id;
        }
    },
    data: () => {
        return {
            data: undefined,
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
    methods: {
        async fetchData() {
            const { code, msg, data } = await getBrandList({
                id: this.id
            });
            if (code === 200) {
                this.data = data;
            } else {
                Message.error(msg);
            }
        }
    }
};
</script>