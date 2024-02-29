<template>
    <div 
        class="content_wrapper bg-white w-full text-[#333333] text-[15px] pl-[86px] pt-[86px] pb-[86px] pr-[86px]" 
        style="min-height:240px;"
    >
        <!-- 详情展示 -->
        <div class="w-full">
            <div class="border_bottom pb-34px">
                <p class="text-[31px] font-medium text-[#333333] truncate">{{ detail?.title }}</p>
                <p class="text-[19px] mt-[26px]">产业资讯</p>
                <p class="text-[14px] text-[#999999] mt-[34px]">{{ detail?.ctime }}</p>
            </div>
            <div 
                class="mt-[40px] rich_text_content" 
                v-html="richText"
            ></div>
        </div>

        <!-- 其他新闻 -->
        <div 
            class="w-full mt-86px" 
            v-if="othersDetail?.length"
        >
            <div class="other_new bg-[#FAFAFA] h-86px text-[31px] text-bold mb-51px">其他新闻</div>
            <div
                class="other_new_item bg-[#FAFAFA] h-128px text-[15px] mb-34px flex pt-17px pb-26px pl-43px pr-34px justify-between items-center"
                v-for="(item, index) in othersDetail"
                :key="index"
            > 
                <div class="flex-1 flex items-center">
                    <div class="date_box">
                        <p class="text-center text-[31px] text-white font-bold">{{ item.date }}</p>
                        <p class="text-center text-[15px] text-white mt-12px">{{ item.year }}</p>
                    </div>
                    <div class="flex-1 ml-[15px]">
                        <p class="flex items-center text-[#333333] text-[19px] truncate hover_opacity"> <span class="dot"></span>{{ item.title }}</p>
                        <p class="w-[619px] truncate text-[#999999] text-[15px] mt-17px hover_opacity ml-[26px]">{{ item.summary }}</p>
                    </div>
                </div>
                <p class="flex items-center w-85px text-[#3B28CC] text-[17px] hover_opacity">查看详情<i class="el-icon-arrow-right text-[16px] text-bold"></i></p>
            </div>

        </div>
    </div>
</template>

<script>
const mockNews = {
    "id": "32423423423",
    "title": "我是标题",
    "summary": "摘要大数据哦多久啊酒叟叫哦大是大非叫哦第三金佛山佛山店放假哦胜多负少附件电视剧发多少",
    "coverPicture": require('~/assets/images/news/coverPicture1.png'),
    "miniCoverPicture": "string",
    "content": "普通文字、<b>粗体文字</b> 、<s>删除线文字</s> 、<span style='color: red;'>变色文字1</span><img style='width: 100px;height: 100px;' src='https://copyright.bdstatic.com/vcg/creative/cc9c744cf9f7c864889c563cbdeddce6.jpg@h_1280' />",
    "ctime": "2022-09-12 12:09:32"
};
export default {
    layout: 'mains',
    async created() {
        // this.$router.push('/market');
        this.getDetail();
        this.getOtherNews();
    },
    data() {
        return {
            detail: null,
            othersDetail: [
                
            ]
        };
    },
    computed: {
        richText(data) {
            const content = data.detail?.content;
            // TODO img最宽宽度限制 style="max-width:100%;height:auto"
            return content.replace(/\<img/gi, '<img');
        }
    },
    methods: {
        getDetail() {
            console.log(this.$route.query.id);
            // TODO 接口请求新闻详情
            this.detail = mockNews;
        },
        getOtherNews() {
            // TODO 接口请求其他新闻
            this.othersDetail = [
                {year: '2021-01', date: '23', title: '我是标题', summary: '我是摘要'}, 
                {year: '2021-01', date: '23', title: '我是标题', summary: '我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要我是摘要'}
            ];
        },
        jumpNewDetail(item) {
            if(!item.id) return;
            this.$router.push('/news-detail?id='+item.id);
        }
    }

};
</script>

<style lang="scss" scoped>
.other_new{
  border-radius: 9px;
  font-weight: bold;
  padding: 27px;
}
.border_bottom{
border-bottom: 1px solid #E0E0E0;
}

.content_wrapper{
  overflow: scroll;
}

.rich_text_content{
  img{
    max-width: 100%!important;
  }
}

.other_new_item{

}

.date_box{
  width: 86px;
  height: 86px;
  background: #3B28CC;
  padding: 14px;
}

.dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #3B28CC;
  border-radius: 50%;
  margin-right: 18px;
}
</style>
