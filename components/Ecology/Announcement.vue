<template>
  <div 
      class="py-15px w-full pp-bg-3 flex items-center justify-center "
      v-if="list && list.length"
  
  >
    <div class="flex pp-box w-full items-center justify-between">
    <div class="flex gap-x-24px flex-1">
        <div class="flex items-center justify-center">
            <img
                :src="require(`@/assets/images/cement.svg`)"
                class="w-14px h-[auto]"
            />
        </div>
        <div class="flex-1">
            <h6 class="text-14px pp-text-t2 mb-12px">{{$t('公告')}}</h6>
            <el-carousel
            class="w-full"
                height="15px"
                direction="vertical"
                autoplay
                :interval="5000"
                loop
            >
                <el-carousel-item v-for="item in list" :key="item.id">
                    <nuxt-link :to="localePath(`/news-detail?id=${item.id}`)" class="block text-15px pp-text-t1 h-15px hover:(pp-text-primary)">
                        {{ item.title }}
                    </nuxt-link>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="cursor-pointer w-20px h-20px">
        <nuxt-link :to="localePath(`/news-list`)">
            <img
                :src="require(`@/assets/images/arrowRight.svg`)"
                class="w-9px h-[auto]"
            />
        </nuxt-link>
      
    </div>
  </div>
  </div>
</template>

<script>
import { getNews } from "@/api";
export default {
    name: "Announcement",
    data: () => {
        return {
            list: [
            ],
        };
    },
    async created() {
      this.fetchData();
    },
    methods: {
        async fetchData() {
            const { code, msg, data } = await getNews({
                pageNum: this.pageNum,
                pageSize: 5
            });
            if (code === 200) {
                this.list = data.lists;
            } else {
                Message.error(msg);
            }
        },
    }
};
</script>
