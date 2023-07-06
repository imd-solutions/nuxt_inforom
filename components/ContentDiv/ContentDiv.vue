<template>
  <div
    :class="['content-div', classes]"
    :style="{ background: background, backgroundImage: backgroundImage }"
  >
    <v-col :class="cssClass" cols="12" v-if="showHeader && (showTitle || showButton)">
      <div
        v-if="showTitle"
        class="d-md-flex flex-md-row d-sm-flex flex-sm-column justify-space-between align-center content-div__main-title"
      >
        <Title v-if="showTitle" :text="title" />
        <Button
          v-if="showButton"
          background="transparent"
          :text="buttonText"
          backgroundColor="transparent"
          borderColor="#1A2746"
          color="#1A2746"
          fontSize="16"
          font-weight="700"
          :width="100"
        />
      </div>
    </v-col>
    <slot></slot>
  </div>
</template>

<script>
import Title from '../Text/Title/Title'
import Button from '../Button/Button'
export default {
  name: 'ContentDiv',
  components: {
    Title,
    Button,
  },
  props: {
    colCss: {
      type: Number,
      required: false
    },
    classes: {
      default: '',
    },
    background: {
      default: 'green',
    },
    backgroundImage: {
      default: null,
    },
    title: {
      default: 'our industry features & opinions',
    },
    showButton: {
      default: true,
    },
    showTitle: {
      default: true,
    },
    showHeader: {
      default: true,
    },
    buttonText: {
      default: '',
    },
    isHeaderFull: {
      default: false,
    },
  },
  computed: {
    cssClass() {
      return this.colCss ? `col-md-${this.colCss} pa-0`: ''
    }
  }
}
</script>

<style lang="scss" src="./Index.scss"></style>
