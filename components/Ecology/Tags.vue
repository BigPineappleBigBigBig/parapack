<template>
    <div class="flex gap-34px flex-wrap">
        <dl
            class="flex items-center gap-x-9px h-55px px-26px rounded-68px pp-text-t1 bg-[#F9F9F9] border-[#E9EBED] border-1px cursor-pointer hover:(pp-text-primary pp-border-primary)"
            v-for="item in tags"
            :key="item.tag"
            @click="() => toDetail(item)"
        >
            <dt>
                <img
                    :src="item.logo"
                    class="w-26px h-26px"
                />
            </dt>
            <dd class="text-18px">{{ item.tagShow }}</dd>
        </dl>
    </div>
</template>

<script>
import { getTags } from "~/api";
export default {
    name: "Tags",
    data: () => {
        return {
            tags: [],
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
      toDetail(item) {
        this.$router.push(`/ecology/list?t=${item.tag}`)
      },
      async fetchData() {
            const { code, msg, data } = await getTags();
            if (code === 200) {
                this.tags = [...data];
            } else {
                this.$message.error(msg);
            }
      }
    }
};
</script>
