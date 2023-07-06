<template>
  <div class="advert" :classes="classes" :style="{ background: background }">
    <a :href="advert.url" target="_blank"
      ><img :style="formatStyleDims" :src="advert.imageUrl"
    /></a>
  </div>
</template>

<script>
export default {
  name: 'Advert',
  props: {
    advert: {
      type: Object,
    },
    background: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    formatStyleDims() {
      switch (this.advert.format) {
        case 'rectangle':
          return 'width: 300px; height: 250px;'
        default:
          // handles billboard
          return 'width: 970px; height: 250px;'
      }
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
