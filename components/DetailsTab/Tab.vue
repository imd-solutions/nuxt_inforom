<template>
<div class="details-tab">
  <v-tabs
      v-model="tab"
      align-with-title
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab
        v-for="(item, index) in items"
        :key="index"
    >
      <v-icon color="#fff" size="medium" style="margin-right: 11px;">{{ item.icon }}</v-icon>
      {{ item.text }}
    </v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab" v-if="!!items.length">
    <v-tab-item
        v-for="(item, index) in items"
        :key="index"
    >
      <Carousel class="mt-8" v-if="!!item.content.length">
        <template>
          <Card :is-horizontal="false" v-for="card in item.content" :link="{ name: 'details-id', params: { id: !!card && card.slug } }" :card-content="card" :key="item.title" />
        </template>
      </Carousel>
    </v-tab-item>
  </v-tabs-items>
</div>
</template>

<script>
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'

export default {
name: "Tab",
components: {
  Card,
  Carousel
},
data() {
  return {
    tab: null,
    featuredTopics: [{
      image: 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg',
      tag: 'Image',
      url: null,
      id: 1
    }]
  }
},
props: {
  items: {
    default: () => [],
  },
}
}
</script>

<style lang="scss" src="./Index.scss">

</style>
