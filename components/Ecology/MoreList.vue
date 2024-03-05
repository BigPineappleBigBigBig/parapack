<template>
        <div class="bg-[#F4F4F4]">
            <div class="pp-box pt-52px pb-70px">
                <h4
                    class="text-31px pp-text-t1 font-600 mb-34px"
                >
                    {{$t('更多')}}
                </h4>
                <ul class="flex gap-34px">
                    <li
                        v-for="hrefInfo in ppHrefs"
                        :key="hrefInfo.href"
                    >
                        <nuxt-link
                            :to="`/${hrefInfo.href}`"
                            class="block min-w-267px py-26px text-19px pp-text-primary bg-[#fff] text-center rounded-9px hover:(0.7)"
                        >
                            {{ hrefInfo.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
  name: 'MoreList',
  computed: {
    ppHrefs() {
        return [
                {
                    text: this.$t('关于 ParaPack'),
                    href: '/'
                },
                // {
                //     text: this.$t('报告问题'),
                //     href: '/sa'
                // },
                {
                    text: this.$t('开发者入驻规则及协议'),
                    href: '/aaa'
                },
                {
                    text: this.$t('条款与条例'),
                    href: '/aaas'
                },
            ]
    }
  }
}
</script>