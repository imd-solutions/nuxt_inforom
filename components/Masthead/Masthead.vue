<template>
  <div
    :class="['masthead', classes]"
    :style="{ background: background, backgroundImage: backgroundImage }"
  >
    <div
      class="d-flex flex-row"
      :class="{
        'justify-space-between': !alignCenter,
        'justify-space-around': alignCenter,
      }"
    >
      <div
        class="d-flex flex-column masthead__main-title"
        :class="{ 'align-center justify-center': alignCenter }"
      >
        <Title v-if="showTitle" :text="title" :classes="titleClasses" />
        <Title
          v-if="subtitle"
          headingTitle="h2"
          :text="subtitle"
          :classes="subtitleClasses"
        />
      </div>
      <div v-if="img">
        <img :src="img" />
      </div>
    </div>
    <div
      class="d-flex masthead__main-title"
      :class="{ 'align-center justify-center': alignCenter }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Title from '../Text/Title/Title'
export default {
  name: 'Masthead',
  components: {
    Title,
  },
  props: {
    classes: {
      default: '',
    },
    titleClasses: {
      type: String,
      default: 'white--text mb-0',
    },
    subtitleClasses: {
      type: String,
      default: 'white--text mb-0',
    },
    background: {
      default: '',
    },
    backgroundImage: {
      default: '',
    },
    title: {
      default: '',
    },
    subtitle: {
      default: '',
    },
    img: {
      default: null,
    },
    alignCenter: {
      default: false,
    },
    showTitle: {
      default: true,
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
