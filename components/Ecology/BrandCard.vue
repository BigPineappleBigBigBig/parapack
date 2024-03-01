<template>
  <dl class="w-full flex gap-x-14px border-b-1px border-[#F5F5F5] pb-10px">
    <dt>
      <img
                :src="require(`@/assets/images/cement.svg`)"
                class="w-74px h-74px rounded-full"
            />
    </dt>
    <dd class="flex flex-col gap-y-14px w-full justify-center">
      <p class="text-19px pp-text-t1">{{ data.title }}</p>
      <p class="truncate w-full text-15px text-[#999999]">
        {{ data.summary }}
      </p>
    </dd>
  </dl>
</template>

<script>

export default {
  name: 'BrandCard',
  props: {
    data: {
      typeof: Object,
      default: {
          title:'',
          summary:'',
          miniCoverPicture: '',
        }
    }
  }
}
</script>