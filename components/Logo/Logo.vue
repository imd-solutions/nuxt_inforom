<template>
    <img :src="src" class="logo"/>
</template>

<script>
export default {
  name: "Logo",
  props: {
    src: {
      default: '/logo_header.png'
    }
  }
};
</script>


<style lang="scss" src="./Index.scss"></style>
