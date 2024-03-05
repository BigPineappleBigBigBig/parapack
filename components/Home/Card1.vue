<template>
  <div class="w-full mt-43px content_wrapper flex justify-between pl-143px items-center">      

    <div class="pb-[50px]">
        <p class="text-[#3B28CC] text-[49px] font-medium">ParaPack</p>
        <p class="text-[#333333] text-[49px] mt-[21px] font-medium">{{$t('全球生态活动聚合平台')}}</p>
        <p class="text-[#AAAAAA] text-[21px] mt-[27px]">{{ $t('ParaPack Global Ecosystem Activity Aggregation Platform') }}</p>
        <div class="btns h-[68px] flex mt-[86px]">
            <div class="bg-[#000000] h-[68px] flex items-center justify-center w-192px btn">
              <img 
                  :src="require(`@/assets/images/home/apple.png`)"
                  class="w-34px mr-10px"
              >
              <div class="pr-10px">
                  <p class="text-14px text-[#ffffff]">{{$t('Available on the')}}</p>
                  <p class="text-21px font-medium mt-5px text-[#ffffff]">App Store</p>
              </div>
            </div>

            <div class="bg-[#000000] h-[68px] flex items-center justify-center w-192px btn">
              <img 
                  :src="require(`@/assets/images/home/color.png`)"
                  class="w-34px mr-10px"
              >
              <div>
                  <p class="text-14px text-[#ffffff]">{{$t('GET IT ON')}}</p>
                  <p class="text-21px font-medium mt-5px text-[#ffffff]">Google Play</p>
              </div>
            </div>
        </div>
    </div>
   

    <img
        :src="require(`@/assets/images/home/bg.png`)"
        class="w-700px back_bg"
    />

  </div>
</template>

<script>
export default {
    name: "Announcement",
    data: () => {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
.content_wrapper{
  // position: relative;
}
.btns{
  // position: absolute;
  // bottom: 266px;
  // left: 139px;
}
.btn{
  border-radius: 17px;
  margin-right: 22px;
}
</style>
