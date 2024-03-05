<template>
    <div class="bg-white w-full h-auto text-[#333333]">
        <div>
            <img
                class="w-full h-auto"
                src="~/assets/images/newsListBanner.jpg"
            >
        </div>
        <div class="w-full pl-86px pr-86px min-h-200px">
            <p class="big_title border_bottom text-19px text-[#333333]">产品公告</p>
            <!-- 头条带图新闻 -->
            <div 
                class="w-full flex justify-between mt-34px pb-60px" 
                v-if="headNewsList && headNewsList.length"
            >
                <div
                    v-for="(item, index) in headNewsList"
                    :key="index"
                    class="w-719px h-209px head_new_item p-34px flex justify-between hover_opacity"
                    @click="jumpNewDetail(item)"
                >
                    <div class="w-424px">
                        <p class="text-15px text-[#333333]">最新通知</p>
                        <p class="text-19px font-medium text-[#333333] mt-15px truncate wrap_one">{{ item.title }}</p>
                        <p class="text-15px text-[#999999] mt-14px truncate ">{{ item.summary }}</p>
                        <p class="text-15px text-[#999999] mt-[46px]">{{ formatData(new Date(item.ctime)) }}</p>
                    </div>
                    <div class="w-161px h-161px">
                        <img 
                            :src="item.coverPicture" 
                            v-if="item.coverPicture"
                            class="w-161px h-161px border_radius_half"
                        />
                    </div>
                    
                </div>
            </div>
            <!-- 新闻列表 -->
            <div
                v-for="(item, index) in newsList"
                :key="index"
                class="flex items-center justify-between mb-50px hover_opacity"
                @click="jumpNewDetail(item)"
                v-loading="loading"
            >
                <p class="text-[24px] pb-26px w-[76px]">{{ formatNumber(index) }}</p>
                <div class="border_bottom flex flex-1 items-center justify-between pb-26px">
                    <div>
                        <p class="text-19px font-medium text-[#333333] truncate">{{ item.title }}</p>
                        <p class="text-15px text-[#999999] mt-17px truncate ">{{ item.summary }}</p>
                    </div>
                    <p class="text-15px text-[#999999]">{{ formatData(new Date(item.ctime)) }}</p>
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
import { getNews } from '~/api';
import { formatData } from '~/utils/public';

export default {
    layout: 'mains',
    async created() {
        this.fetchData(true);
    },
    data() {
        return {
            headNewsList: [],
            newsList: [],
            total: 0,
            pageNum: 1,
            loading: false,
            formatData
        };
    },
    methods: {
        formatNumber(index) {
            let number = (this.pageNum - 1) * 4 + index + 1;
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
            this.fetchData();
        },
        async fetchData(init) {
            this.loading = true;
            const { code, msg, data } = await getNews({
                pageNum: this.pageNum,
                pageSize: init ? 6 : 4
            });
            this.loading = false;
            if (code === 200) {
                this.total = data.count;
                if(init) {
                    this.headNewsList = data.lists.slice(0, 2);
                    this.newsList = data.lists.slice(2);
                    return;
                }
                this.newsList = data.lists;
            } else {
                Message.error(msg);
            }
        },
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
.border_radius_half{
  border-radius: 50%;
}
</style>
