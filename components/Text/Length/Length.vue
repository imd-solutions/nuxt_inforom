<template>
  <span :class="['length d-flex align-center', classes]"><v-icon v-if="!!icon" color="#838E93" size="medium" style="margin-right: 11px;">{{icon}} </v-icon>{{text}}</span>
</template>

<script>
export default {
  name: "Length",
  props: {
    text:{
      default: 'Length'
    },
    classes: {
      default: ''
    },
    icon: {
      default: null
    }
  }
}
</script>

<style lang="scss" src="./Index.scss"/>
