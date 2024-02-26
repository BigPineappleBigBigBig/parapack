<template>
    <div>管理平台</div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import {Component} from "vue-property-decorator";

@Component
export default class IndexPage extends Vue implements ComponentOptions<Vue> {

    async created() {
        // this.$router.push('/market');
    }
}
</script>
