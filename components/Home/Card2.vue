<template>
  <div class="w-full bg-[#3B28CC] content_wrapper h-[377px] pl-[210px] pr-[210px]">    
    <p  class="text-center pt-88px">
        <span class="text-26px text-white mr-[5px] font-medium">ParaPack</span>
        <span class="text-31px text-white font-medium">{{$t('深受全球用户信赖')}}</span>
    </p>  
    <p class="text-[#AAAAAA] text-[15px] mt-15px text-center">{{$t('我们为全球200多个国家及地区的用户提供安全易用的服务')}}</p>
    <div class="flex items-center justify-between mt-51px">

      <div 
          class="flex"
          v-for="(item,index) in iconList"
          :key="index"
      >
        <div class="icon_wrapper w-[41px] h-[61px] mr-17px">
          <img
            :src="item.img"
            class="w-[41px] h-auto"
          >
        </div>
        <div>
          <p class="text-white text-[21px] pt-10px">{{ item.title }}</p>
          <img
            :src="item.descImage"
            class="h-41px mt-19px"
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: "Announcement",
    computed: {
      iconList() { 
        return [
            {
              img: require(`@/assets/images/home/card2-1.png`),
              title: this.$t('服务用户'),
              descImage: require(`@/assets/images/home/20M.png`)
            },
            {
              img: require(`@/assets/images/home/card2-2.png`),
              title: this.$t('日均交易数'),
              descImage: require(`@/assets/images/home/30M.png`)
            },
            {
              img: require(`@/assets/images/home/card2-3.png`),
              title: this.$t('国家及地区'),
              descImage: require(`@/assets/images/home/200+.png`)
            }
          ]
      }
    }
};
</script>

<style lang="scss" scoped>
.content_wrapper{
  background-image: url('~/assets/images/home/card2_bg.png');
  width: 100%;
  background-size: 100% 100%;
}

.icon_wrapper{
  // width: 41px;
  // height: 41px;
  // background: rgba($color: #FFFFFF, $alpha: 0.2);
  // border-radius: 50%;
}

</style>
