<template>
  <ul class="list">
    <li class="list-item" v-for="item in data" :key="item.id" :class="getParamsId === item.id ? 'list-item--active' : ''">{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    data: {
      default: []
    }
  },
  computed:{
    getParamsId () {
      return this.$router.currentRoute.params.id
    },
  }
};
</script>


<style lang="scss" src="./Index.scss"></style>
