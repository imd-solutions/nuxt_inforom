<template>
 <span :class="['author', classes]">| BY {{text}}</span>
</template>

<script>
export default {
  name: "Author",
  props: {
    text:{
      default: 'Author'
    },
    classes: {
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./Index.scss"/>
