<template>
  <p :class="['topicAndType', classes]">{{text}}</p>
</template>

<script>
export default {
  name: "TopicAndType",
  props: {
    text: {
      default: 'Topic'
    },
    classes: {
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./Index.scss"/>
