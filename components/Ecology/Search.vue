<template>
    <div class="h-53px flex ecology-search">
        <el-input
            class="h-full text-19px"
            :placeholder="$t('输入Ddap名称或网址')"
            type="text"
            clearable
            @input="onInputChange"
            @change="(v) => this.$emit('onChange',v)"
            @clear="() => this.$emit('onClear')"
            v-model="value"
        >
        <i slot="prefix" class="el-input__icon el-icon-search text-19px font-bold"></i>
        </el-input>
    </div>
</template>

<script>
import { debounce } from "~/plugins/utils";
export default {
    name: "Search",
    data: () => {
        return {
            value: "",
        };
    },
    created() {
      this.onInputChange = debounce((v) => {
        this.$emit('onChange',v)
            }, 300);
    },
};
</script>

<style lang="scss" scoped>
.ecology-search {
    /deep/.el-input__inner {
        border-radius: 41px;
        padding-left: 75px;
        border-width: 2px;
        height: 100%
        // background-color:#F9F9F9;
    }
    /deep/.el-input__prefix {
      left: 43px
    }
    /deep/.el-input__suffix {
      right: 26px;
      i {
        font-size: 21px;
      font-weight: bold;
      }
      
    }
}
</style>
