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
                @onChange="onChangeEvent"
                @onClear="onClearEvent"
            />
            <Tags/>
        </div>
        <div class="flex pp-box flex-col gap-y-60px py-60px">
            <template v-if="!searchVal">
                <BrandListVue
                    :tag="'hot'"
                    :title="$t('活动热力榜')"
                />
                <BrandListVue
                    type="timeType"
                />
                <BrandListVue
                    :tag="'new'"
                    :title="$t('首发上新生态')"
                />
            </template>
            <template v-else>
                <BrandListVue
                    :tag="searchVal"
                    :title="$t('搜索到以下结果')"
                />
            </template>
        </div>
        <MoreListVue></MoreListVue>
    </div>
</template>

<script>
import AnnouncementVue from '~/components/Ecology/Announcement';
import BrandListVue from '~/components/Ecology/BrandList';
import Search from '~/components/Ecology/Search';
import Tags from '~/components/Ecology/Tags';
import MoreListVue from '~/components/Ecology/MoreList';
export default {
    layout: 'mains',
    components: {
        AnnouncementVue,
        Search,
        Tags,
        BrandListVue,
        MoreListVue
    },
    async created() {
        // this.$router.push('/market');
    },
    data() {
        return {
            searchVal: '',
        };
    },
    methods: {
        onClearEvent () {
            this.searchVal = '';
        },
        onChangeEvent (v) {
            this.searchVal = v;
        }
    }
};
</script>
