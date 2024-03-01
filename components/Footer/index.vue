<template>
  <div class="h-[532px]">
    <div id="footer" class="footer flex w-full h-[465px] pp-box">
      <div class="left_content mr-150px">
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


      <div class="right_content flex pt-90px">
        <div v-for="(activeLinkGroup , index) in activeLinkList" :key="index" class="w-104px mr-88px">
          <p class="active_link_title hover_opacity" @click="routerLink(activeLinkGroup.path)">{{ activeLinkGroup.title }}</p>
          <p class="active_link_text mt-[43px] hover_opacity" v-for="(activeLink, activeLinkIndex) in activeLinkGroup.subList" :key="activeLinkIndex" @click="routerLink(activeLink.path)">{{ activeLink.text }}</p>
        </div>
      </div>
      
    </div>

    <div class="area w-full h-[68px] pl-[139px]">
      <p class="area_text">©️2024 PP ParaPack | All Rights Reserved</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  components: {
  },
  data() {
    return {
      iconList: [
        {
          src: require('~/assets/images/footer/1.png'),
          path: ''
        },
        {
          src: require('~/assets/images/footer/2.png'),
          path: ''
        },
        {
          src: require('~/assets/images/footer/3.png'),
          path: ''
        },
        {
          src: require('~/assets/images/footer/4.png'),
          path: ''
        }
      ],
      activeLinkList: [
        {
          title:'首页',
          path: '',
          subList: [{text: '公告资讯', path: 'news-list'},{text: '生态商店', path: 'news-list'},{text: '提交生态', path: 'news-list'},{text: 'ParaPack钱包', path: 'news-list'}, ],
        },
        {
          title:'视频',
          path: 'video',
          subList: [{text: '视频教程', path: 'video'},{text: '视频合作', path: 'video'},{text: '创作中心', path: 'news-list'}],
        },
        {
          title:'活动',
          path: '',
          subList: [{text: '活动教程', path: 'news-list'},{text: '活动发布', path: 'news-list'},{text: '活动参与', path: 'news-list'},{text: '活动中心', path: 'news-list'},{text: '联合空投', path: 'news-list'}, ],
        },
        {
          title:'开发者',
          path: '',
          subList: [{text: '开发者申请', path: 'news-list'},{text: '开发者中心', path: 'news-list'},{text: '开发者协议', path: 'news-list'}],
        },
        {
          title:'支持',
          path: '',
          subList: [{text: '关于ParaPack', path: 'news-list'},{text: '隐私政策', path: 'news-list'},{text: '服务协议', path: 'news-list'}, {text: '合作伙伴', path: 'news-list'},{text: '联系ParaPack', path: 'news-list'}],
        },
      ]
    }
  },
  mounted: function () {
  },
  methods: {
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
    padding: 107px 0px 0 144px;
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
