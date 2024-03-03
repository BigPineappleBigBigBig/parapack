<template>
  <div class="w-full content_wrapper pl-176px pr-142px flex h-420px items-center justify-between">
      <div class="left_box">
        <img src="~/assets/images/logo.png" class="w-136px"/>
        <p class="text-[#333333] text-51px font-semibold mt-21px">在社交网络上关注我们</p>
        <p class="text-[#676968] text-17px mt-31px">加入以接收最新新闻动态</p>
      </div>
      <div class="right_box flex items-center justify-between w-649px h-103px bg-[#F9F9F9] ml-163px pl-59px pr-59px border-ra">
          <div 
              class="w-51px h-51px hover_opacity"
              v-for="(item, index) in list"
              :key="index"
          >
              <img
                  :src="item.image"
                  class="w-51px h-51px"
              />
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name: "Announcement",
    data: () => {
        return {
            list: [
                { image: require('~/assets/images/home/1.png'), path: ''},
                { image: require('~/assets/images/home/2.png'), path: ''},
                { image: require('~/assets/images/home/3.png'), path: ''},
                { image: require('~/assets/images/home/4.png'), path: ''},
                { image: require('~/assets/images/home/5.png'), path: ''}
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
.border-ra{
  border-radius: 9px;
}
</style>
