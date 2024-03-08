<template>
  <div v-html="innerHtml">

  </div>
  <!-- <div class="h-[532px]">
    <div id="footer" class="footer flex w-full h-[465px] pp-box justify-between">
      <div class="left_content">
        <img 
          class="w-[160px] h-auto "
          src="~/assets/images/footer/parapack.png"
        />
        <p class="desc mt-20px w-433px">全球生态活动聚合平台. </p>
        <p class="desc">Global Ecosystem Activity Aggregation Platform</p>
        <div class="flex">
          <div v-for="(iconItem, index) in iconList" :key="index" @click="link">
            <img :src="iconItem.src" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity"/>
          </div>
        </div>
      </div>


      <div class="right_content flex-1 flex pt-90px inline-grid grid-cols-5 auto-cols-fr">
        <div v-for="(activeLinkGroup , index) in activeLinkList" :key="index" class="auto-cols-fr">
          <p class="active_link_title hover_opacity" @click="routerLink(activeLinkGroup.path)">{{ activeLinkGroup.title }}</p>
          <p class="active_link_text mt-[43px] hover_opacity" v-for="(activeLink, activeLinkIndex) in activeLinkGroup.subList" :key="activeLinkIndex" @click="routerLink(activeLink.path)">{{ activeLink.text }}</p>
        </div>
      </div>
      
    </div>

    <div class="area w-full h-[68px] pl-[58px]">
      <p class="area_text">©️2024 PP ParaPack | All Rights Reserved</p>
    </div>
  </div> -->

  <!-- <div class="h-[532px]" data-v-02d89339><div id="footer" class="footer flex w-full h-[465px] pp-box justify-between" data-v-02d89339><div class="left_content" data-v-02d89339><img src="/_nuxt/assets/images/footer/parapack.png" class="w-[160px] h-auto" data-v-02d89339><p class="desc mt-20px w-433px" data-v-02d89339>全球生态活动聚合平台.</p><p class="desc" data-v-02d89339>Global Ecosystem Activity Aggregation Platform</p><div class="flex" data-v-02d89339><div data-v-02d89339><img src="/_nuxt/assets/images/footer/1.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div><div data-v-02d89339><img src="/_nuxt/assets/images/footer/2.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div><div data-v-02d89339><img src="/_nuxt/assets/images/footer/3.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div><div data-v-02d89339><img src="/_nuxt/assets/images/footer/4.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div></div></div><div class="right_content flex-1 flex pt-90px inline-grid grid-cols-5 auto-cols-fr" data-v-02d89339><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>首页</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>公告资讯</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>生态商店</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>提交生态</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>ParaPack钱包</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>视频</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>视频教程</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>视频合作</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>创作中心</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>活动</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动教程</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动发布</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动参与</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动中心</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>联合空投</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>开发者</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>开发者申请</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>开发者中心</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>开发者协议</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>支持</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>关于ParaPack</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>隐私政策</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>服务协议</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>合作伙伴</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>联系ParaPack</p></div></div></div><div class="area w-full h-[68px] pl-[58px]" data-v-02d89339><p class="area_text" data-v-02d89339>©️2024 PP ParaPack | All Rights Reserved</p></div></div> -->

</template>

<script>
import { getFooterCss } from '~/api';
export default {
  name: "Footer",
  components: {
  },
  data() {
    return {
      innerHtml: ''
      // iconList: [
      //   {
      //     src: require('~/assets/images/footer/1.png'),
      //     path: ''
      //   },
      //   {
      //     src: require('~/assets/images/footer/2.png'),
      //     path: ''
      //   },
      //   {
      //     src: require('~/assets/images/footer/3.png'),
      //     path: ''
      //   },
      //   {
      //     src: require('~/assets/images/footer/4.png'),
      //     path: ''
      //   }
      // ],
      // activeLinkList: [
      //   {
      //     title:'首页',
      //     path: '',
      //     subList: [{text: '公告资讯', path: 'news-list'},{text: '生态商店', path: 'news-list'},{text: '提交生态', path: 'news-list'},{text: 'ParaPack钱包', path: 'news-list'}, ],
      //   },
      //   {
      //     title:'视频',
      //     path: 'video',
      //     subList: [{text: '视频教程', path: 'video'},{text: '视频合作', path: 'video'},{text: '创作中心', path: 'news-list'}],
      //   },
      //   {
      //     title:'活动',
      //     path: '',
      //     subList: [{text: '活动教程', path: 'news-list'},{text: '活动发布', path: 'news-list'},{text: '活动参与', path: 'news-list'},{text: '活动中心', path: 'news-list'},{text: '联合空投', path: 'news-list'}, ],
      //   },
      //   {
      //     title:'开发者',
      //     path: '',
      //     subList: [{text: '开发者申请', path: 'news-list'},{text: '开发者中心', path: 'news-list'},{text: '开发者协议', path: 'news-list'}],
      //   },
      //   {
      //     title:'支持',
      //     path: '',
      //     subList: [{text: '关于ParaPack', path: 'news-list'},{text: '隐私政策', path: 'news-list'},{text: '服务协议', path: 'news-list'}, {text: '合作伙伴', path: 'news-list'},{text: '联系ParaPack', path: 'news-list'}],
      //   },
      // ]
    }
  },
  // computed: {
  //   innerHtml() {
  //     return '<div class="h-[532px]" data-v-02d89339><div id="footer" class="footer flex w-full h-[465px] pp-box justify-between" data-v-02d89339><div class="left_content" data-v-02d89339><img src="/_nuxt/assets/images/footer/parapack.png" class="w-[160px] h-auto" data-v-02d89339><p class="desc mt-20px w-433px" data-v-02d89339>全球生态活动聚合平台.</p><p class="desc" data-v-02d89339>Global Ecosystem Activity Aggregation Platform</p><div class="flex" data-v-02d89339><div data-v-02d89339><img src="/_nuxt/assets/images/footer/1.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div><div data-v-02d89339><img src="/_nuxt/assets/images/footer/2.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div><div data-v-02d89339><img src="/_nuxt/assets/images/footer/3.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div><div data-v-02d89339><img src="/_nuxt/assets/images/footer/4.png" class="w-[60px] h-[60px] mr-[30px] mt-[40px] hover_opacity" data-v-02d89339></div></div></div><div class="right_content flex-1 flex pt-90px inline-grid grid-cols-5 auto-cols-fr" data-v-02d89339><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>首页</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>公告资讯</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>生态商店</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>提交生态</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>ParaPack钱包</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>视频</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>视频教程</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>视频合作</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>创作中心</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>活动</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动教程</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动发布</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动参与</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>活动中心</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>联合空投</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>开发者</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>开发者申请</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>开发者中心</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>开发者协议</p></div><div class="auto-cols-fr" data-v-02d89339><p class="active_link_title hover_opacity" data-v-02d89339>支持</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>关于ParaPack</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>隐私政策</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>服务协议</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>合作伙伴</p><p class="active_link_text mt-[43px] hover_opacity" data-v-02d89339>联系ParaPack</p></div></div></div><div class="area w-full h-[68px] pl-[58px]" data-v-02d89339><p class="area_text" data-v-02d89339>©️2024 PP ParaPack | All Rights Reserved</p></div></div>'
  //   }
  // },
  watch: {
      "$i18n.locale": {
            handler(v) {
                v && this.fetchData();
            },
            immediate: true,
        },
    },
  methods: {
    async fetchData() {
      const {data,msg, code} = await getFooterCss()
      if (code === 200) {
        this.innerHtml = data.footer;
      } else {
        this.$message.error(msg)
      }
    },
      routerLink: function (name) {
        if(!name)return;
          this.$router.push({
              path: name
          });
      },
      link: function () {
          this.$router.push({
              path: 'index'
          });
      },
  }
};
</script>
<style lang="scss" scoped>
.footer{
  background: #00040F;
  color: #AAAAAA;
  font-size: 15px;

  .left_content{
    padding: 107px 0 0 58px;
    .desc{
      font-size: 15px;
      color: #FFFFFF;
      line-height: 31px;
    }
  }
  .right_content{
    .active_link_title{
      font-size: 19px;
      color: #FFFFFF;
      font-weight: 600;
    }
    .active_link_text{
      font-size: 15px;
      line-height: 15px;
    }
  }
 
}
.area{
    background: #D8D8D8;
    .area_text{
      font-size: 15px;
      color: #000;
      line-height: 68px;
    }
  }
</style>
