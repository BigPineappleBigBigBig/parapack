<template>
    <div class="bg-white w-full h-auto text-[#333333]">
        <div>
            <img
                class="w-full h-auto"
                src="~/assets/images/video/banner.jpg"
            >
        </div>
    </div>
</template>

<script>
export default {
    layout: 'mains',
    async created() {
        // this.$router.push('/market');
    },
    data() {
        return {
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
