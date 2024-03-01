<template>
  <dl class="w-full flex border-b-1px border-[#F5F5F5] pb-10px cursor-pointer" @click="toDetail">
    <dt class="w-74px h-74px mr-14px">
      <img
                :src="data.miniCoverPicture"
                class="w-full h-full rounded-full"
            />
    </dt>
    <dd class="flex flex-col flex-1 w-0 pt-10px pb-15px">
      <p class="text-19px pp-text-t1">{{ data.title }}</p>
      <div class="truncate flex-1 text-15px text-[#999999] mt-14px">
        {{ data.summary }}
      </div>
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
  },
  methods: {
    toDetail() {
            this.$router.push(`/ecology/detail?id=${this.data.id}`);
        },
  }
}
</script>