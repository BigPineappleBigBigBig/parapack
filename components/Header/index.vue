<template>
  <div id='header'  class="sticky bg-white top-0 z-999 h-[140px] w-full" style="border: 1px solid #F0F0F0">
    <div class='max-w-2560px w-full h-full m-auto flex items-center justify-between px-40px gap-x-40px pp-text-t2'>
      <LogoIcon></LogoIcon>
          <div class="flex justify-between items-center gap-x-100px">
            <Menu></Menu>
            <div class="flex gap-x-40px items-center">
              <el-button type="primary" class="pp-btn-20-l">登录/注册</el-button>
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
