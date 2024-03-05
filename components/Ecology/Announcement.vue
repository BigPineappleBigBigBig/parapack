<template>
  <div class="py-15px w-full pp-bg-3 flex items-center justify-center ">
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
                    <nuxt-link :to="`/${item.id}`" class="block text-15px pp-text-t1 h-15px hover:(pp-text-primary)">
                        {{ item.title }}
                    </nuxt-link>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="cursor-pointer w-20px h-20px">
      <img
                :src="require(`@/assets/images/arrowRight.svg`)"
                class="w-9px h-[auto]"
            />
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
