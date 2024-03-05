<template>
  <div>
      <div class="bg-white w-full content_wrapper h-[466px] flex items-center mt-90px pp-box">    
          <img src="~/assets/images/home/left.png" class="w-[350px] mr-[292px] ml-[100px]"/>
          <div> 
            <p class="text-[51px] text-[#333333] font-semibold">{{$t('活动中心')}}</p>
            <p class="mt-22px text-[#676968] text-[17px]">{{$t('随时随地，让你更方便的交易')}}</p>
            <p class="mt-10px text-[#676968] text-[17px]">{{$t('参与活动分享得更多精彩好物')}}</p>
            <div class="mt-18px group px-5px py-15px flex">

              <div class="flex flex-col items-center justify-center pl-5px pr-5px w-[200px]">
                <p class="text-[#333333] font-semibold text-[19px]">{{$t('闪兑')}}</p>
                <p class="text-[#999999] text-[15px] mt-5px">
                  {{$t('简单快速')}}
                  <i class="el-icon-arrow-right text-[15px] text-[#999999] text-bold"></i>
                </p>
              </div>
              <div class="flex flex-col items-center justify-center pl-5px pr-5px w-[200px] border-left">
                <p class="text-[#333333] font-semibold text-[19px]">{{$t('跨链')}}</p>
                <p class="text-[#999999] text-[15px] mt-5px">
                  {{$t('多链转换')}}
                  <i class="el-icon-arrow-right text-[15px] text-[#999999] text-bold"></i>
                </p>
              </div>
              <div class="flex flex-col items-center justify-center pl-5px pr-5px w-[200px] border-left">
                <p class="text-[#333333] font-semibold text-[19px]">{{$t('购入数字资产')}}</p>
                <p class="text-[#999999] text-[15px] mt-5px">
                  {{$t('仅在5分钟内')}}
                  <i class="el-icon-arrow-right text-[15px] text-[#999999] text-bold"></i>
                </p>
              </div>
            </div>
            <div class="btn bg-[#3B28CC] text-white text-[21px] w-211px h-[60px] text-center mt-19px hover_opacity" @click="toActivity">{{$t('开始使用')}}</div>
          </div>
      </div>

      <div class="bg-white w-full content_wrapper h-[466px] flex items-center pp-box mt_100px">    
          <div> 
            <p class="text-[51px] text-[#333333] font-semibold">{{$t('视频工具')}}</p>
            <p class="mt-22px text-[#676968] text-[17px]">{{$t('随时随地观看各个国家奇闻趣事')}}</p>
            <div class="mt-18px group px-5px py-15px flex">

              <div class="flex flex-col items-center justify-center pl-5px pr-5px w-[200px]">
                <p class="text-[#333333] font-semibold text-[19px]">{{$t('闪兑')}}</p>
                <p class="text-[#999999] text-[15px] mt-5px">
                  {{$t('简单快速')}}
                  <i class="el-icon-arrow-right text-[15px] text-[#999999] text-bold"></i>
                </p>
              </div>
              <div class="flex flex-col items-center justify-center pl-5px pr-5px w-[200px] border-left">
                <p class="text-[#333333] font-semibold text-[19px]">{{$t('跨链')}}</p>
                <p class="text-[#999999] text-[15px] mt-5px">
                  {{$t('多链转换')}}
                  <i class="el-icon-arrow-right text-[15px] text-[#999999] text-bold"></i>
                </p>
              </div>
              <div class="flex flex-col items-center justify-center pl-5px pr-5px w-[200px] border-left">
                <p class="text-[#333333] font-semibold text-[19px]">{{$t('购入数字资产')}}</p>
                <p class="text-[#999999] text-[15px] mt-5px">
                  {{$t('仅在5分钟内')}}
                  <i class="el-icon-arrow-right text-[15px] text-[#999999] text-bold"></i>
                </p>
              </div>
            </div>
            <div class="btn bg-[#3B28CC] text-white text-[21px] w-211px h-[60px] text-center mt-19px hover_opacity" @click="toVideo">{{$t('开始使用')}}</div>
          </div>

          <img src="~/assets/images/home/right.png" class="w-450px ml-[200px]"/>

      </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
        };
    },
    methods: {
      toVideo() {
        this.$router.push('/video');
      },
      toActivity() {
        this.$router.push('/activity');
      }
    }
};
</script>

<style lang="scss" scoped>
.content_wrapper{
}
.btn{
  width: 211px;
  border-radius: 9px;
  line-height: 60px;
}

.group{
  border: 1px solid #999999;
  border-radius: 17px;
}

.border-left {
  border-left: 1px solid #999999;
}
</style>
