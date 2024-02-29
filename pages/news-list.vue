<template>
    <div class="bg-white w-full h-auto text-[#333333]">
        <div>
            <img
                class="w-full h-auto"
                src="~/assets/images/newsListBanner.jpg"
            >
        </div>
        <div class="w-full pl-86px pr-86px">
            <p class="big_title border_bottom text-19px text-[#333333]">产品公告</p>
            <!-- 头条带图新闻 -->
            <div class="w-full flex justify-between mt-34px pb-60px">
                <div
                    v-for="(item, index) in headNewsList"
                    :key="index"
                    class="w-719px h-209px head_new_item p-34px flex justify-between"
                >
                    <div class="w-424px">
                        <p class="text-15px text-[#333333]">最新通知</p>
                        <p class="text-19px font-medium text-[#333333] mt-15px truncate wrap_one">{{ item.title }}</p>
                        <p class="text-15px text-[#999999] mt-14px truncate ">{{ item.summary }}</p>
                        <p class="text-15px text-[#999999] mt-[46px]">{{ item.ctime }}</p>
                    </div>
                    <img 
                        :src="item.coverPicture" 
                        class="w-161px h-161px"
                    />
                </div>
            </div>
            <!-- 新闻列表 -->
            <div 
                v-for="(item, index) in newsList"
                :key="index"
                class="flex items-center justify-between mb-50px hover_opacity"
                @click="jumpNewDetail(item)"
            >
                <p class="text-[24px] pb-26px w-[76px]">{{ formatNumber(index) }}</p>
                <div class="border_bottom flex flex-1 items-center justify-between pb-26px">
                    <div>
                        <p class="text-19px font-medium text-[#333333] truncate">{{ item.title }}</p>
                        <p class="text-15px text-[#999999] mt-17px truncate ">{{ item.summary }}</p>
                    </div>
                    <p class="text-15px text-[#999999]">{{ item.ctime }}</p>
                </div>
            </div>

            <div 
                class="flex justify-center h-100px" 
                v-if="total > 4"
            > 
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    :page-size="pageSize"
                    @current-change="pageChange"
                >
                </el-pagination>
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
    "content": "",
    "ctime": "2022-09-12 12:09:32"
};
export default {
    layout: 'mains',
    async created() {
        // this.$router.push('/market');
    },
    data() {
        return {
            headNewsList: [mockNews, {...mockNews, coverPicture: require('~/assets/images/news/coverPicture2.png')}],
            newsList: new Array(4).fill(mockNews),
            total: 10,
            skip: 0,
            limit: 4,
            pageSize: 4,
            pageNum: 1
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
.head_new_item{
  background: #F6F6F6;
  border-radius: 9px;
}
</style>
