<template>
  <div class="global-loading" v-model="loading && !!$store.state.commonModule.isLoading" v-if="!!$store.state.commonModule.isLoading">
      <div class="text-center">
        <v-progress-circular :size="50" color="primary" indeterminate/>
      </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style lang="scss">

.global-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  width: 100%;
  background: #000000c4;
  z-index: 999999;
}
</style>
