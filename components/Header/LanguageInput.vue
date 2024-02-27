<template>
  <div class="lang-dropdown">
    <el-dropdown trigger="click">
      <span class="cursor-pointer">
        {{ langMap[$i18n.locale] }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="lang in $i18n.locales"
          :key="lang.code"
        >{{ langMap[lang.code] }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- $i18n.locale -->
    <!-- <el-select v-model="$i18n.locale" class="language-select" popper-class="border-0">
      <el-option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :label="langMap[lang.code]"
        :value="lang.code"
        />
    </el-select> -->
  </div>
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