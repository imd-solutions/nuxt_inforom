<template>
  <div :class="['default-image',classes]">
    <img v-show="src" :src="src" :style="{width: width || '100%', height: height || 'auto', maxHeight: maxHeight || 'auto'}"/>
    <BaseIcon v-if="badge.icon" :colour="badge.colour" :icon="badge.icon" />
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon/BaseIcon.vue"
export default {
  name: "DefaultImage",
  components: {
    BaseIcon
  },
  props: {
    badge: {
      default() {
        return {
          icon: "",
          colour: "",
        };
      },
    },
    src: {
      default: ''
    },
    height: {
      default: '100%'
    },
    width: {
      default: '100%'
    },
    maxHeight: {
      default: ''
    },
    classes: {
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./Index.scss"></style>
