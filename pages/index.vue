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
    </div>
</template>

<script>
import AnnouncementVue from '~/components/Ecology/Announcement.vue';
import Search from '~/components/Ecology/Search.vue';
import Tags from '~/components/Ecology/Tags.vue';
export default {
    layout: 'mains',
    components: {
        AnnouncementVue,
        Search,
        Tags
    },
    async created() {
        // this.$router.push('/market');
    },
    methods: {
        onClearEvent: () => {

        },
        onChangeEvent: (v) => {
            
        }
    }
};
</script>
