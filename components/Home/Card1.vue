<template>
  <div class="w-full pp-box mt-43px content_wrapper relative">      
    <img
        :src="require(`@/assets/images/home/bg.png`)"
        class="w-full back_bg"
    />

    <div class="btns h-[68px] flex">
      <div class="bg-[#000000] h-[68px] flex items-center justify-center w-192px btn">
        <img 
            :src="require(`@/assets/images/home/apple.png`)"
            class="w-34px mr-10px"
        >
        <div class="pr-10px">
            <p class="text-14px text-[#ffffff]">Available on the</p>
            <p class="text-21px font-medium mt-5px text-[#ffffff]">App Store</p>
        </div>
      </div>

      <div class="bg-[#000000] h-[68px] flex items-center justify-center w-192px btn">
        <img 
            :src="require(`@/assets/images/home/color.png`)"
            class="w-34px mr-10px"
        >
        <div>
            <p class="text-14px text-[#ffffff]">GET IT ON</p>
            <p class="text-21px font-medium mt-5px text-[#ffffff]">Google Play</p>
        </div>
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
  // position: relative;
}
.btns{
  position: absolute;
  bottom: 266px;
  left: 139px;
}
.btn{
  border-radius: 17px;
  margin-right: 22px;
}
</style>
