<template>
  <div id='header'  class="sticky bg-white top-0 z-60 h-[120px] w-full">
    <div class='pp-box w-full h-full flex items-center justify-between pp-text-t2'>
      <LogoIcon></LogoIcon>
          <div class="flex justify-between items-center gap-x-86px">
            <Menu></Menu>
            <div class="flex gap-x-34px items-center">
              <!-- <el-button type="primary" class="pp-btn-17-l">登录/注册</el-button> -->
              <LanguageInput></LanguageInput>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import LanguageInput from './LanguageInput.vue';
import LogoIcon from './LogoIcon.vue';
import Menu from './Menu.vue';
export default {
  name: "Header",
  components: {
      LanguageInput,
      LogoIcon,
      Menu
  },
  mounted: function () {
  },
  methods: {
      routerLink: function (name) {
          this.$router.push({
              name: name
          });
      },
      link: function () {
          this.$router.push({
              name: 'home'
          });
      },
  }
};
</script>
<style>
</style>
