<template>
  <div :class="['layout', propsClasses]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    propsClasses: {
      default:''
    }
  }
}
</script>

<style lang="scss" src="./Index.scss">

</style>
