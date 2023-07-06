<template>
  <NuxtLink class="nuxt-link nuxt-link-asd" :to="to"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: "Link",
  props: {
    to: {
      default (){
        return {}
      }
    }
  }
}
</script>

<style lang="scss" src="./Index.scss">

</style>
