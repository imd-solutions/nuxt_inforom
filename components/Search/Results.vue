<template>
  <div v-show="onSearchRoute" class="search_form_wrapper">
    <div id="search_full"></div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',

  computed: {
    onSearchRoute() {
      return this.$route.path === '/search'
    },
  },
}
</script>

<style lang="scss">
.search_form_wrapper {
  margin-top: 80px;
}
</style>
