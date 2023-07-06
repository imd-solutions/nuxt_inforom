<template>
  <div class="timeline" :style="{ background: background }">
    <h3
      class="mb-3"
      style="
        font-family: 'Gotham';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
        text-transform: uppercase;
        color: #000;
      "
    >
      From the community
    </h3>
    <v-timeline dense>
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="orange"
        v-for="item in data"
        :key="item.name"
      >
        <span class="timeline-avatar"
          ><Avatar :imageUrl="item.imageUrl" :name="item.name"
        /></span>
        <div v-if="item.articles[0]" class="timeline__content">
          <p>
            <Link
              :to="{
                name: 'details-id',
                params: { id: item.articles[0].slug },
              }"
              >{{ item.articles[0].title }}</Link
            >
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import Avatar from '../Avatar/Avatar'
import Link from '../Link/Link'

export default {
  name: 'Timeline',
  components: { Link, Avatar },
  props: {
    background: {
      default: 'transparent',
    },
    data: {
      default: null,
    },
  },
  methods: {
    getFirstArticle(articles) {
      try {
        return articles[0]
      } catch (err) {
        return []
      }
    },
  },
}
</script>

<style src="./Index.scss" lang="scss"></style>
