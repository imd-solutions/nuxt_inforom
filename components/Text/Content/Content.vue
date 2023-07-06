<template>
  <p :class="['contentText', classes]">
    {{ text.replace(/<\/?[^>]+(>|$)/g, '') }}
  </p>
</template>

<script>
export default {
  name: 'Content',
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
