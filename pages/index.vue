<template>
    <div>
        <div>
            <img
                class="w-full h-auto"
                src="~/assets/images/homeBanner.jpg"
            >
        </div>
        <AnnouncementVue/>
        <div class="mt-50px pp-box flex w-full flex-col gap-y-26px">
            <Search
                :on-change="onChangeEvent"
                :on-clear="onClearEvent"
            />
            <Tags/>
        </div>
        <div class="flex pp-box flex-col gap-y-60px py-60px">
            <BrandListVue
                :tag="'hot'"
                title="活动热力榜"
            />
            <BrandListVue
                type="timeType"
            />
            <BrandListVue
                :tag="'new'"
                title="首发上新生态"
            />
        </div>
        <div class="bg-[#F4F4F4]">
            <div class="pp-box pt-52px pb-70px">
                <h4
                    class="text-31px pp-text-t1 font-600 mb-34px"
                >
                    更多
                </h4>
                <ul class="flex gap-34px">
                    <li
                        v-for="hrefInfo in ppHrefs"
                        :key="hrefInfo.href"
                    >
                        <nuxt-link
                            :to="`/${hrefInfo.href}`"
                            class="block min-w-267px py-26px text-19px pp-text-primary bg-[#fff] text-center rounded-9px"
                        >
                            {{ hrefInfo.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import AnnouncementVue from '~/components/Ecology/Announcement.vue';
import BrandListVue from '~/components/Ecology/BrandList.vue';
import Search from '~/components/Ecology/Search.vue';
import Tags from '~/components/Ecology/Tags.vue';
export default {
    layout: 'mains',
    components: {
        AnnouncementVue,
        Search,
        Tags,
        BrandListVue
    },
    async created() {
        // this.$router.push('/market');
    },
    data() {
        return {
            ppHrefs:[
                {
                    text: '关于 ParaPack',
                    href: '/'
                },
                {
                    text: '报告问题',
                    href: '/'
                },
                {
                    text: '开发者入驻规则及协议',
                    href: '/'
                },
                {
                    text: '条款与条例',
                    href: '/'
                },
            ]
        };
    },
    methods: {
        onClearEvent () {

        },
        onChangeEvent (v) {
            console.log(v,'搜索内容');
        }
    }
};
</script>
