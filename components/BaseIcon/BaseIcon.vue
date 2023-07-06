<template>
  <div
    id="bi"
    :style="`background-color: ${colour}`"
    class="rounded-lg rounded-bl-0 rounded-tr-0"
  >
    <img :src="require(`./../../assets/icons/${icon}.svg`)" />
  </div>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./Index.scss" />
