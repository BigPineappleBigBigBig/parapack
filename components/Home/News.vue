<template>
  <div class="px-86px w-full flex items-center justify-center bg-[#F2F1FF] h-50px">

      <div class="flex flex-1">
          
          <img
              :src="require(`@/assets/images/home/news_icon.svg`)"
              class="w-21px h-[auto] mr-9px ml-56px"
          />

          <div class="flex-1 flex items-center">
              <p class="text-15px text-[#3B28CC] mr-10px">公告列表:</p>
              <el-carousel
                  class="flex-1"
                  height="15px"
                  direction="vertical"
                  autoplay
                  interval="5000"
                  loop
              >
                  <el-carousel-item v-for="item in list" :key="item.id">
                      <nuxt-link :to="`/${item.id}`" class="block text-15px text-[#3B28CC] h-15px hover:(pp-text-primary)">
                          {{ item.title }}
                      </nuxt-link>
                  </el-carousel-item>
              </el-carousel>
          </div>
      </div>
      <!-- 更多 -->
      <div class="cursor-pointer flex items-center">
          <p class="text-[#3B28CC] text-[15px]">更多</p>
          <i
              class="el-icon-arrow-right text-[15px] text-[#3B28CC] text-bold"
          ></i>
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
                {
                    id: "1",
                    title: "标题",
                    summary: "内容",
                    coverPicture: "封面图地址",
                    miniCoverPicture: "迷你封面图地址",
                    content: "文章内容",
                    ctime: "发布日期",
                },
                {
                    id: "2",
                    title: "标题2",
                    summary: "内容2",
                    coverPicture: "封面图地址2",
                    miniCoverPicture: "迷你封面图地址2",
                    content: "文章内容2",
                    ctime: "发布日期2",
                },
            ],
        };
    },
};
</script>
