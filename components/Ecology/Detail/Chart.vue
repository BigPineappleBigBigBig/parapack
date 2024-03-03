<template>
  <div class="flex flex-col gap-y-34px">
                    <div class="flex justify-between items-center">
                      <div class="flex flex-col gap-y-9px">
                        <p class="text-19px pp-text-t1 border-l-2px pl-9px border-[#25AC4E]">
                          $1231
                        </p>
                        <span class="text-15px">{{rose*100}}%</span>
                      </div>
                      <div>{{ data.symbol }} / USDT</div>
                      <a class="hover_opacity pp-text-primary" :href="data.url" target="_blank" rel="noopener noreferrer">去兑换</a>
                    </div>
                </div>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    data: {
      default: {},
      typeof: Object
    }
  }
}
</script>