<template>
  <nuxt-link :to="localePath('/')">
    <img class="h-26px w-auto" @click='link' src="~/assets/images/logo.png">
  </nuxt-link>
</template>

<script>

export default {
  name: "LogoIcon",
  methods: {
    link() {
      
    }
  }
}
</script>