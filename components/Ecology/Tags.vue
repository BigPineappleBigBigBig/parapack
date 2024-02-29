<template>
  <div class="flex gap-x-34px">
    <dl class="flex items-center gap-x-9px h-55px px-26px rounded-68px bg-[#F9F9F9] border-[#E9EBED] border-1px" v-for="item in tags" :key="item.id">
      <dt><img
                :src="require(`@/assets/images/cement.svg`)"
                class="w-26px h-26px"
            /></dt>
      <dd class="text-18px pp-text-t1">{{ item.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data: () => {
    return {
      tags: [{
        icon: '',
         name: '推荐',
        id:1
      },{
        icon: '',
        name: '推荐2',
        id:2
      }]
    }
  }
}
</script>