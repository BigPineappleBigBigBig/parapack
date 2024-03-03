<template>
    <div class="w-full content_wrapper h-[803px] flex flex-col items-center">    
        <p class="text-center pt-172px text-[51px] text-white font-semibold">
            病毒式营销、增长、参与
        </p>
        <p class="text-center pt-20px text-[51px] text-white font-semibold">
            WEB3 的分析和自动化
        </p>
        <p class="text-white text-[19px] mt-26px text-center w-[897px] leading-normal font-medium">
            通过去中心化的社交分享，每一个参与你活动的用户都可以成为你活动的传播者。 参与意味着传播，每个人都是你活动的主人。 这使得您的每一个活动都能获得最大程度的推广和曝光，最终取得新用户获取、参与、转化等优于预期的结果。        </p>
        <div class="flex items-center justify-between mt-72px">
            <div class="btn text-white text-[21px] text-center mr-[68px] hover_opacity">开始使用</div>
            <div class="btn btn_right text-white text-[21px] text-center hover_opacity">发布赠品</div>
        </div>

        <p class="text-[#AAAAAA] text-[15px] mt-91px text-center">
            下载并安装产品：
        </p>

        <div class="flex items-center justify-center mt-[26px]">
            <div class="flex text-white text-[15px] mr-[111px] border_bottom pb-5px hover_opacity">
                <img src="~/assets/images/activity/download.svg" class="w-17px"/>
                下载APP
            </div>
            <div class="flex text-white text-[15px] border_bottom pb-5px hover_opacity">
                <img src="~/assets/images/activity/pintu.svg" class="w-17px"/>
                下载插件
            </div>
        </div>


    </div>
</template>

<script>
export default {
    layout: 'mains',
    data: () => {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
.content_wrapper{
  background-image: url('~/assets/images/activityBanner.jpg');
  width: 100%;
  background-size: 100% 100%;
}
.btn{
  width: 195px;
  height: 50px;
  background-image: url('~/assets/images/activity/btn_bg.png');
  background-size: 100% 100%;
  line-height: 50px;
}

.border_bottom{
  border-bottom: 1px solid #FFFFFF;
}

</style>
