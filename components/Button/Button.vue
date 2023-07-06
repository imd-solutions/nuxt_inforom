<template>
  <v-btn @click="$emit('buttonEvent')" :class="[classes, type]"
         :style="{ color: color, fontSize: fontSize + 'px',background: background, backgroundColor: backgroundColor + '!important', borderColor: borderColor+ '!important', fontWeight, width }">
    <slot>
        <v-icon v-if="!!icon" color size="medium" style="margin-right: 11px;">{{icon}} </v-icon>{{ text }}
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      default: 'blue'
    },
    text: {
      default: 'Download Report'
    },
    classes: {
      default: ''
    },
    color: {
      default: ''
    },
    fontSize: {
      default: ''
    },
    background: {
      default: ''
    },
    backgroundColor: {
      default: null
    },
    borderColor: {
      default: ''
    },
    fontWeight: {
      default: '500'
    },
    width: {
      default: '100%'
    },
    icon: {
      default: null
    }
  }
}
</script>

<style lang="scss" src="./Index.scss">

</style>
