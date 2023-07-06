<template>
  <div class="trending">
    <v-row>
      <v-col v-if="icon" class="col-md-1  col-1 icon">
        <img :src="require(`./../../assets/icons/${icon}.png`)" :alt="icon">
      </v-col>
      <v-col :class="icon ? 'col-md-10 col-10' : 'col-md-12  col-12'">
         <Title :headingTitle="headingTitle" :text="title" :classes="`red--text`" styleCss="font-size: 18px !important"></Title>
      </v-col>
    </v-row>
    <div v-for="item in articles" :key="item.id" class="trending-item">
      <Card
        :cardContent="item"
        :link="{ name: 'details-id', params: { id: item.slug } }"
        :showImage="false"
      />
    </div>
  </div>
</template>

<script>
import Title from "../Text/Title/Title";
import Card from "../Card/Card";

export default {
  name: "Trending",
  components: {
    Title,
    Card,
  },
  props: {
    articles: {
      default: [],
    },
    title: {
      default: "Featured",
    },
    headingTitle: {
      type: String,
      default: "h2"
    },
    icon: {
      type: String,
      required: false
    }
  },
  computed: {
    authors() {
      try {
        return this.cardContent.authors.join();
      } catch (err) {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" src="./Index.scss"></style>
