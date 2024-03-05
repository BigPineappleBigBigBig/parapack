<template>
  <div 
      class="pp-box w-full flex items-center justify-center bg-[#F2F1FF] h-50px" 
      v-if="list && list.length"
  >

      <div class="flex flex-1">
          
          <img
              :src="require(`@/assets/images/home/news_icon.svg`)"
              class="w-21px h-[auto] mr-9px"
          />

          <div class="flex-1 flex items-center">
              <p class="text-15px text-[#3B28CC] mr-10px">{{$t('公告列表')}}:</p>
              <el-carousel
                  class="flex-1"
                  height="15px"
                  direction="vertical"
                  autoplay
                  :interval="5000"
                  loop
              >
                  <el-carousel-item v-for="item in list" :key="item.id">
                      <nuxt-link :to="localePath(`/news-detail?id=${item.id}`)" class="block text-15px text-[#3B28CC] h-15px hover:(pp-text-primary)">
                          {{ item.title }}
                      </nuxt-link>
                  </el-carousel-item>
              </el-carousel>
          </div>
      </div>
      <!-- 更多 -->
      
      <nuxt-link :to="localePath(`/news-list`)" >
          <div class="cursor-pointer flex items-center hover_opacity">
            <p class="text-[#3B28CC] text-[15px]">{{$t('更多')}}</p>
            <i
                class="el-icon-arrow-right text-[15px] text-[#3B28CC] text-bold"
            ></i>
          </div>
      </nuxt-link>
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
