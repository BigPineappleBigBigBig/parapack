<template>
  <div class="w-full content_wrapper h-[648px] flex flex-col items-center">    
    <p  class="text-center pt-103px text-[51px] text-[#333333]">
        {{$t('Web3 的病毒式营销、增长、参与、分析和自动化')}}
    </p>  
    <p class="text-[#676968] text-[17px] mt-34px text-center w-743px leading-normal">
      {{$t('通过去中心化的社交分享，每一个参与你活动的用户都可以成为你活动的传播者。 参与意味着传播，每个人都是你活动的主人。 这使得您的每一个活动都能获得最大程度的推广和曝光，最终取得新用户获取、参与、转化等优于预期的结果。')}}
    </p>
    <div class="flex items-center justify-between mt-72px">
      <div class="btn bg-[#3B28CC] text-white text-[21px] w-211px h-[60px] text-center mr-[26px]">{{$t('开始使用')}}</div>
      <div class="btn btn_right text-[#3B28CC] text-[21px] w-211px h-[60px] text-center">{{$t('发布赠品')}}</div>
    </div>

    <p class="text-[#AAAAAA] text-[15px] mt-86px text-center">
      {{$t('下载并安装产品：')}}
    </p>

    <div class="flex items-center justify-center mt-[26px]">
        <div 
            class="flex text-[#333333] text-[15px] mr-[111px] border_bottom pb-5px hover_opacity"
            @click="downloadApp"
        >
            <img src="~/assets/images/home/64.svg" class="w-17px"/>
            {{$t('下载APP')}}
        </div>
        <div 
            class="flex text-[#333333] text-[15px] border_bottom pb-5px hover_opacity"
            @click="downloadPlugin"
        >
            <img src="~/assets/images/home/65.svg" class="w-17px"/>
            {{$t('下载插件')}}
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
    methods: {
      downloadApp() {
        this.$message(this.$t('敬请期待！'));
      },
      downloadPlugin() {
        this.$message(this.$t('敬请期待！'));
      }
    }
};
</script>

<style lang="scss" scoped>
.content_wrapper{
  background: rgba(59,40,204,0.14);
}
.btn{
  width: 211px;
  border-radius: 9px;
  line-height: 60px;
}

.btn_right{
  border:1px solid #3B28CC;
}

.border_bottom{
  border-bottom: 1px solid #333333;
}

</style>
