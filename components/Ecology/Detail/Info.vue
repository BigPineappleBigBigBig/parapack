<template>
  <div class="flex flex-col gap-y-34px">
                    <div class="flex justify-between items-center">
                        <dl class="flex gap-x-34px">
                            <dt class="w-170px h-170px rounded-40px overflow-hidden">
                                <img class="w-full h-full" :src="data.miniCoverPicture" />
                            </dt>
                            <dd class="flex flex-col gap-y-26px justify-center">
                                <p class="pp-text-t1 font-600 text-30px">
                                    {{ data.title }}
                                </p>
                                <p class="text-24px pp-text-t1">
                                    {{ data.summary }}
                                </p>
                            </dd>
                        </dl>
                        <div class="flex gap-x-50px items-center">
                            <el-button type="primary" class="!h-48px !px-39px !rounded-25px text-19px pp-base-btn">
                                <a :href="data.url" target="_blank" rel="noopener noreferrer">了解</a>
                            </el-button>
                            <div class="w-27px h-27px cursor-pointer hover_opacity" @click="() => { }">
                                <img class="w-full h-full" src="~/assets/images/share.png" />
                            </div>
                        </div>
                    </div>
                    <div class="pp-text-t1 text-15px leading-24px" v-html="data.content"></div>
                    <ul class="flex gap-x-17px flex-wrap">
                        <li v-for="mediumItem in medium" :key="mediumItem.tag"
                            class="h-50px flex items-center justify-center rounded-25px overflow-hidden">
                            <a class="w-full h-full flex items-center px-38px justify-center hover_opacity bg-[#F2F3F6]" :href="data.url" target="_blank" rel="noopener noreferrer">
                                <img class="w-21px h-21px" :src="mediumItem.logo" /></a>
                        </li>
                    </ul>
                </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    data: {
      default: {},
      typeof: Object
    }
  }
}
</script>