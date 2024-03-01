<template>
    <div class="bg-white w-full h-auto text-[#333333]">
        <div>
            <img
                class="w-full h-auto"
                src="~/assets/images/video/banner.jpg"
            >
        </div>
        <div class="w-full pt-86px pl-86px pr-86px pb-86px">
            <!-- 主内容1 -->
            <div class="flex justify-between">
                <div 
                    class="left_content flex-row items-center pl-24px"
                >
                    <div 
                        v-for="(item, index) in iconList"
                        :key="index"
                        :class="{'flex items-center': true, 'mb-68px': index+1 !== iconList.length}"
                    >
                        <img 
                            :src="item.image" 
                            class="w-[36px] mr-[16px]"
                        />
                        <div>
                            <p class="font-medium text-19px text-[#333333]">{{ item.title }}</p>
                            <p class="text-15px text-[#999999] mt-17px">{{ item.subTitle }}</p>
                        </div>
                    </div>
                </div>
                <div 
                    class="right_content w-863px pr-34px"
                >
                    <img 
                        src="~/assets/images/video/art.jpg"
                        class="w-full"
                    />
                </div>
            </div>
            <!-- 内容2 -->
            <p class="text-center text-[#333333] text-[51px] mt-106px font-semibold">输入文案，一键生成“真人”营销视频</p>
            <p class="text-center text-[#676968] text-[17px] mt-31px">通过输入文字生成真人标记视频</p>
            <div class="flex justify-between">
                <div 
                    v-for="(item, index) in contentList"
                    :key="index"
                    class="bg-[#FAFAFA] w-467px h-409px mt-34px flex flex-col justify-center items-center"
                >
                    <div class="w-306px h-171px flex justify-center items-center">
                        <img 
                            :src="item.image" 
                            :style="{'width': item.width+'px' }"
                        />
                    </div>
                    
                    <p class="guoji text-[31px] font-semibold">{{ item.title }}</p>
                    <p class="text-19px mt-17px text-[#999999]">{{ item.subTitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const iconList = [
    {
        image: require('~/assets/images/video/icon1.svg'),
        title: 'AI智能人声分离',
        subTitle: '智能算法分离音轨，一键提取纯净干音'
    },
    {
        image: require('~/assets/images/video/icon2.svg'),
        title: 'AI智能文字快剪',
        subTitle: '视频粗剪太低效？基于文本剪辑，事半功倍'
    },
    {
        image: require('~/assets/images/video/icon3.svg'),
        title: 'AI智能补帧',
        subTitle: '光流法智能补帧，慢放也能纵享丝滑'
    },
    {
        image: require('~/assets/images/video/icon1.svg'),
        title: 'AI智能遮罩',
        subTitle: '手绘遮罩太繁琐？智能笔刷一划速抠'
    },
    {
        image: require('~/assets/images/video/icon5.svg'),
        title: 'AI稳定影片',
        subTitle: '稳像算法全面升级，手持运镜也能稳如泰山'
    }
];

const contentList = [
    {
        image: require('~/assets/images/video/1.png'),
        title: '上百套',
        subTitle: '场景化模版',
        width: '222',
        height: '158'
    },
    {
        image: require('~/assets/images/video/2.png'),
        title: '多国籍',
        subTitle: '超逼真数字人',
        width: '194',
        height: '171'
    },
    {
        image: require('~/assets/images/video/3.png'),
        title: '0门槛',
        subTitle: 'AI生成脚本',
        width: '306',
        height: '106'
    }
];
export default {
    layout: 'mains',
    async created() {
        // this.$router.push('/market');
    },
    data() {
        return {
            iconList,
            contentList
        };
    },
    methods: {
        formatNumber(index) {
            let number = (this.pageNum - 1) * this.pageSize + index + 1;
            if((number + '').length < 2) {
                return '0' + number;
            }
            return number;
        },
        jumpNewDetail(item) {
            if(!item.id) return;
            this.$router.push('/news-detail?id='+item.id);
        },
        pageChange(e) {
            this.pageNum = e;
            this.skip = (this.pageNum - 1) * this.pageSize;
            console.log(e);
        }
    }

};
</script>

<style lang="scss" scoped>
.big_title{
padding: 58px 0 17px 17px;
}

.border_bottom{
border-bottom: 1px solid #DDDDDD;
}
.guoji{
  margin-top: 51px;
  background-clip: text;
  -webkit-background-clip: text;
  background: linear-gradient(180deg, #0079FF 0%, #3B28CC 100%);/*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
  -webkit-background-clip: text;/*将设置的背景颜色限制在文字中*/
  -webkit-text-fill-color: transparent;/*给文字设置成透明*/
  // text-fill-color: transparent;
}
</style>
