<template>
    <div 
        class="content_wrapper bg-white w-full text-[#333333] text-18px pl-[100px] pt-[100px] pb-[100px] pr-[100px]" 
        style="min-height:260px;"
    >
        <!-- 详情展示 -->
        <div class="w-full">
            <div class="border_bottom pb-40px">
                <p class="text-[36px] font-medium text-[#333333] truncate">{{ detail?.title }}</p>
                <p class="text-[22px] mt-[30px]">产业资讯</p>
                <p class="text-[16px] text-[#999999] mt-[40px]">{{ detail?.ctime }}</p>
            </div>
            <div 
                class="mt-[40px]" 
                v-html="richText"
            ></div>
        </div>

        <!-- 其他新闻 -->
        <div 
            class="w-full mt-100px" 
            v-if="othersDetail?.length"
        >
            <div class="bg-[#FAFAFA] h-100px text-[36px] text-bold">其他新闻</div>
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
            othersDetail: []
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
            this.othersDetail = new Array(3).fill({});
        },
        jumpNewDetail(item) {
            if(!item.id) return;
            this.$router.push('/news-detail?id='+item.id);
        }
    }

};
</script>

<style lang="scss" scoped>
.big_title{
padding: 68px 0 20px 20px;
}

.border_bottom{
border-bottom: 1px solid #E0E0E0;
}

.content_wrapper{
  overflow: scroll;
}
.head_new_item{
  background: #F6F6F6;
  border-radius: 10px;
}
</style>
