<template>
  <component :is="headingTitle" :class="['title', classes]">{{
    text
  }}</component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      default: '',
    },
    classes: {
      default: '',
    },
    headingTitle: {
      type: String,
      default: 'h1',
    },
    styleCss: {
      default: '',
    },
  },
}
</script>

<style lang="scss" src="./Index.scss" scoped />
