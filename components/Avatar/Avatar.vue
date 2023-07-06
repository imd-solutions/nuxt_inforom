<template>
  <div class="avatar rounded-lg rounded-bl-0 rounded-tr-0" :style="{ background: background }">
    <img class="rounded-lg rounded-bl-0 rounded-br-0 rounded-tr-0 " v-if="imageUrl" style="width: 36px; height: 36px" :src="imageUrl" />
    <span class="avatar__name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    imageUrl: {
      default: null,
    },
    name: {
      default: '',
    },
    background: {
      default: '',
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
