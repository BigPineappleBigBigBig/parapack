<template>
    <el-dropdown szie="medium" trigger="click" @command="onChange">
      <span class="cursor-pointer flex items-center text-[#AAAAAA]">
        <img src="~/assets/images/language.png" class="w-15px h-15px mr-7px"/>{{ langMap[$i18n.locale] }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :command="lang.code"
        >{{ langMap[lang.code] }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
  name: "LanguageInput",
  data: function () {
    return {
      langMap: {
        zh_CN: "简体中文",
        en_US: "English"
      }
    }
  },
  methods: {
    onChange(code) {
      this.$i18n.locale = code;
    }
  }
}
</script>