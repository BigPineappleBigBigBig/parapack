<template>
    <div>
        <div>
            <img
                class="w-full h-auto"
                src="~/assets/images/newsListBanner.jpg"
            >
            {{ $t('welcome') }}
        </div>
    </div>
</template>

<script>
export default {
    layout: 'mains',
    async created() {
        // this.$router.push('/market');
    }
};
</script>
