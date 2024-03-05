<template>
    <div 
        class="content_wrapper bg-white w-full text-[#333333] text-[15px] pl-[86px] pt-[86px] pb-[86px] pr-[86px]" 
        style="min-height:240px;"
        v-loading="loading"
    >
        <!-- 详情展示 -->
        <div class="w-full">
            <div class="border_bottom pb-34px">
                <p class="text-[31px] font-medium text-[#333333] truncate">{{ detail?.title }}</p>
                <p class="text-[19px] mt-[26px]">{{ $t('产业资讯') }}</p>
                <p class="text-[14px] text-[#999999] mt-[34px]">{{ detail?.ctime && formatData(new Date(detail?.ctime)) }}</p>
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
            <div class="other_new bg-[#FAFAFA] h-86px text-[31px] text-bold mb-51px">{{ $t('其他新闻') }}</div>
            <div
                class="other_new_item bg-[#FAFAFA] h-128px text-[15px] mb-34px flex pt-17px pb-26px pl-43px pr-34px justify-between items-center"
                v-for="(item, index) in othersDetail"
                :key="index"
            > 
                <div class="flex-1 flex items-center">
                    <div class="date_box">
                        <p class="text-center text-[31px] text-white font-bold">{{ new Date(item.ctime).getDate() }}</p>
                        <p class="text-center text-[15px] text-white mt-12px">{{ new Date(item.ctime).getFullYear() + '-' + new Date(item.ctime).getMonth() + 1 }}</p>
                    </div>
                    <div class="flex-1 ml-[15px]">
                        <p class="flex items-center text-[#333333] text-[19px] truncate hover_opacity"> <span class="dot"></span>{{ item.title }}</p>
                        <p class="w-[619px] truncate text-[#999999] text-[15px] mt-17px hover_opacity ml-[26px]">{{ item.summary }}</p>
                    </div>
                </div>
                <p 
                    class="flex items-center w-85px text-[#3B28CC] text-[17px] hover_opacity"
                    @click="jumpNewDetail(item)"
                >
                    {{ $t('查看详情') }}
                    <i class="el-icon-arrow-right text-[16px] text-bold"></i>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
import { formatData } from '~/utils/public';
import { getNews } from '~/api';

export default {
    layout: 'mains',
    async created() {
        // this.$router.push('/market');
        this.getDetail();
        this.fetchOtherData();
    },
    data() {
        return {
            detail: null,
            othersDetail: [],
            formatData,
            loading: false
        };
    },
    computed: {
        richText(data) {
            const content = data.detail?.content;
            // TODO img最宽宽度限制 style="max-width:100%;height:auto"
            return content?.replace(/\<img/gi, '<img');
        }
    },
    watch: {
        $route(to, from) {
            this.getDetail();
            this.fetchOtherData();
        }
    },
    methods: {
        async getDetail() {
            this.loading = true;
            const { code, msg, data } = await getNews({
                id: this.$route.query.id * 1
            });
            this.loading = false;
            if (code === 200) {
                this.detail = data.lists[0];
            } else {
                Message.error(msg);
            }
        },
        async fetchOtherData() {
            const { code, msg, data } = await getNews({
                pageNum: 1,
                pageSize: 4
            });
            if (code === 200 && data.lists) {
                // 过滤当前detail-id
                this.othersDetail = data.lists.filter((item) => {
                    return item.id != this.$route.query.id;
                }).slice(0, 3);
            } else {
                Message.error(msg);
            }
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
    width: 100%!important;
  }
}

.other_new_item{

}

.date_box{
  width: 90px;
  height: 90px;
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
