<template>
  <div class="tab">
    <v-tabs fixed-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="(item, index) in items" :key="index">
        <v-icon color="#fff" size="medium" style="margin-right: 11px">{{
          item.icon
        }}</v-icon>
        {{ item.text }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card flat v-for="(card, index) in item['content']" :key="index">
          <Card
            :card-content="card"
            :showTopic="false"
            :link="{ name: 'details-id', params: { id: item && card.slug } }"
            :show-content="false"
            :is-horizontal="true"
          />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Card from '../Card/Card'
export default {
  name: 'Tab',
  components: {
    Card,
  },
  data() {
    return {
      tab: null,
    }
  },
  props: {
    items: {
      default: () => [
        {
          text: 'Read',
          content: `Read`,
          icon: 'mdi-file-document-outline',
        },
        {
          text: 'Listen',
          content: 'Listen',
          icon: 'mdi-speaker-wireless',
        },
        { text: 'Watch', content: 'Watch', icon: 'mdi-video' },
      ],
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
