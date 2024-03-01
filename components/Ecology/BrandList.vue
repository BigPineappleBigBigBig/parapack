<template>
<div>
  <div class="mb-34px">
    <h4 class="text-31px pp-text-t1 font-600 " v-if="!isTime">
    {{ title }}
  </h4>
  <div v-else>
    <el-radio-group v-model="timeType">
    <el-radio-button label="6h" class="text-31px">6时</el-radio-button>
    <el-radio-button label="24h" class="text-31px">24时</el-radio-button>
  </el-radio-group>
  </div>
  </div>
  <ul class="grid grid-cols-3 flex gap-x-118px gap-y-43px">
    <li v-for="brandItem in dataList" :key="brandItem.title">
      <BrandCard :data="brandItem"></BrandCard>
    </li>
  </ul>
</div>
</template>

<script>
import { Message } from 'element-ui';
import BrandCard from './BrandCard.vue';
import {getBrandList} from '~/api'
export default {
  name: 'BrandList',
  components: {
    BrandCard
  },
  props: {
    tag: {
      typeof: String,
      default: ''
    },
    title: {
      typeof: String,
      default: ''
    },
    type: {
      typeof: String,
      default: ''
    }
  },
  data: () => {
    return {
      dataList: [],
      timeType: '6h'
    }
  },
  watch: {
    tag(v) {
      v && this.fetchData();
    },
    '$i18n.locale':{
            handler(v) {
              v && this.fetchData();
            },
            immediate:true
        },
        timeType(v) {
          v && this.fetchData();
        }
  },
  computed: {
    isTime() {
      return this.type && this.type === 'timeType'
    }
  },
  methods: {
    async fetchData() {
      const {code, msg, data} = await getBrandList({
        tag: this.isTime ? undefined : this.tag,
        timeType: this.timeType
      });
      if (code === 200) {
        this.dataList = [...data.lists.slice(0,6)]
      } else {
        Message.error(msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/.el-radio-button__inner{
    font-size: 27px;
    border-width: 2px;
    padding:15px 43px;
    color: #3B28CC;
    border-color: #3B28CC;
  }
  /deep/.el-radio-button:first-child .el-radio-button__inner,.el-radio-button:last-child .el-radio-button__inner {
    border-radius: 9px 0 0 9px;
    border-width: 2px;
    border-left: 2px solid #3B28CC;
  }
</style>