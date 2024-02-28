<template>
    <el-dropdown trigger="click" @command="onChange">
      <span class="cursor-pointer">
        {{ langMap[$i18n.locale] }}<i class="el-icon-arrow-down el-icon--right"></i>
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
        zhCN: "简体中文",
        enUS: "English"
      }
    }
  },
  methods: {
    onChange(code) {
      this.$i18n.locale = code
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.language-select {
  &.el-select .el-input .el-input__inner {
    border:none;
    width: max-content;
  }
}
</style>