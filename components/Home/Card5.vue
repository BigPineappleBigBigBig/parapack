<template>
  <div class="w-full content_wrapper h-[452px] flex flex-col items-center">    
    <p  class="text-center pt-105px text-[51px] text-[#333333] font-semibold">
      {{$t('开发者工具')}}
    </p>  
    <p class="text-[#676968] text-[17px] mt-31px text-center">
      {{$t('可以帮助开发者更高效地开发、测试、诊断并部署应用')}}
    </p>
    <div class="flex items-center justify-between mt-72px">
      <div class="btn bg-[#000000] text-white text-[21px] w-211px h-[60px] text-center mr-[26px] flex items-center justify-center">
        <img src="~/assets/images/home/card5-1.png" class="w-32px mr-9px">
        {{$t('开发者申请')}}
      </div>
      <div class="btn bg-[#000000] text-white text-[21px] w-211px h-[60px] text-center flex items-center justify-center">
        <img src="~/assets/images/home/card5-2.png" class="w-24px mr-9px">
        {{$t('提供申请材料')}}
      </div>
    </div>

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
  background: #F4F4F4;
}
.btn{
  width: 211px;
  border-radius: 9px;
  line-height: 60px;
}


</style>
