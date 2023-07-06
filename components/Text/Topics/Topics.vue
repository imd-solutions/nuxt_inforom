<template>
  <p :class="['topics', classes]">{{ text }}</p>
</template>

<script>
export default {
  name: 'Topics',
  props: {
    text: {
      default: '',
    },
    classes: {
      default: '',
    },
  },
}
</script>

<style lang="scss" src="./Index.scss" />
