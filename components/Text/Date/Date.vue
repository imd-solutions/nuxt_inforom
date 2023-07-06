<template>
  <span :class="['date', classes]"><v-icon v-if="!!icon" color="#838E93" size="medium" style="margin-right: 11px;" >{{icon}} </v-icon>{{text}}</span>
</template>

<script>
export default {
  name: "Date",
  props: {
    text:{
      default: ''
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
