<template>
  <div class="w-full pp-box flex h-420px items-center justify-between">
      <div class="left_box">
        <img src="~/assets/images/logo.png" class="w-136px"/>
        <p class="text-[#333333] text-51px font-semibold mt-21px">{{$t('在社交网络上关注我们')}}</p>
        <p class="text-[#676968] text-17px mt-31px">{{$t('加入以接收最新新闻动态')}}</p>
      </div>
      <div class="right_box flex items-center justify-between w-649px h-103px bg-[#F9F9F9] ml-163px pl-59px pr-59px border-ra">
          <a 
              class="w-51px h-51px hover_opacity"
              v-for="(item, index) in list"
              :key="index"
              :href="item.path"
              target="_blank"
          >
              <img
                  :src="item.image"
                  class="w-51px h-51px"
              />
          </a>
          
      </div>
  </div>
</template>

<script>
// 官网:parapack.net
// 官方邮箱:service@parapack.net
// Telegram:https://t.me/ParaPack_Community
// Twitter:https://twitter.com/parapack_pp
// discord:https://discord.gg/UCSU2nmtfK
export default {
    name: "Announcement",
    data: () => {
        return {
            list: [
                { image: require('~/assets/images/home/1.png'), path: 'https://www.parapack.net'},
                { image: require('~/assets/images/home/2.png'), path: 'mailto:service@parapack.net'},
                { image: require('~/assets/images/home/3.png'), path: 'https://twitter.com/parapack_pp'},
                { image: require('~/assets/images/home/4.png'), path: 'https://t.me/ParaPack_Community'},
                { image: require('~/assets/images/home/5.png'), path: 'https://discord.gg/UCSU2nmtfK'}
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
