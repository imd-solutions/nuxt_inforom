<template>
  <Link :to="link">
    <template>
      <div
          :class="[
      'card',
      classes,
      isHorizontal && !$vuetify.breakpoint.mobile
        ? 'flex align-center horizontal-card'
        : '',
      isFullwidth ? 'fullwidth-card' : '',
      isAlignBaseline ? 'align-baseline' : '',
      borderBottom ? 'card-border-bottom': ''
    ]"
      >
        <div class="card-content__img" :class="{'col70': imgFit}">
        <DefaultImage
            :badge="badge"
            :classes="[cardDetailsClasses.image]"
            v-if="showImage && !!cardContent.image"
            :src="cardContent.image"
            :height="imageHeight"
            :width="imageWidth"
            :maxHeight="imageMaxHeight"
        />
        </div>
        <div class="card-content__text" :class="{'col30': imgFit}">
          <Topics
              :classes="[cardDetailsClasses.topics]"
              :text="topics"
              v-if="showTopics && !!topics"
          />
          <Title
              :headingTitle="headingTitle"
              :classes="[cardDetailsClasses.title]"
              :text="cardContent.title"
              v-if="!!cardContent.title"
          />
          <Content
              :classes="['mt-20', cardDetailsClasses.content]"
              :text="cardContent.content"
              v-if="!!showContent && !!cardContent.content"
          />
          <div class="card__footer mt-3">
            <Date
                :classes="[cardDetailsClasses.date]"
                :text="cardContent.date"
                v-if="showDate && !!cardContent.date"
            />
            <Author
                :classes="[cardDetailsClasses.authors]"
                :text="authors"
                v-if="showAuthors && !!authors"
            />
          </div>
        </div>
      </div>
      <hr v-if="showHr" />
    </template>
  </Link>
</template>

<script>
import DefaultImage from "../DefaultImage/DefaultImage";
import Topics from "../Text/Topics/Topics";
import Title from "../Text/Title/Title";
import Content from "../Text/Content/Content";
import Date from "../Text/Date/Date";
import Author from "../Text/Author/Author";
import Link from "../Link/Link";

export default {
  name: "Card",
  components: {Link, Author, Date, Content, Title, Topics, DefaultImage},
  props: {
    imgFit: {
      type: Boolean,
      default: false
    },
    showHr: {
      type: Boolean,
      default: false
    },
    badge: {
      required: false,
    },
    borderBottom: {
      required: false,
    },
    cardContent: {
      default() {
        return {
          image: "https://i.ibb.co/ynKY7t6/Rectangle-10.jpg",
          topicAndType: "'5G | Features & opinion'",
          title:
              "Rapid growth in Open API certification as more telcos push for compliance",
          content:
              "In 2021 TM Forum saw the most rapid increase to date in the number of companies certifying Open APIs.",
          date: "FEB 2022",
          author: "joanne taaffe",
        };
      },
    },
    cardDetailsClasses: {
      default() {
        return {
          image: "",
          topicAndType: "",
          title: "",
          content: "",
          date: "",
          author: "",
        };
      },
    },
    classes: {
      default: "",
    },

    isHorizontal: {
      default: false,
    },
    isFullwidth: {
      default: false,
    },
    showContent: {
      default: true,
    },
    showImage: {
      default: true,
    },
    showTopics: {
      default: true,
    },
    showDate: {
      default: true,
    },
    showAuthors: {
      default: true,
    },
    imageHeight: {
      default: '',
    },
    imageWidth: {
      default: '',
    },
    imageMaxHeight: {
      default: '',
    },
    link: {
      default() {
        return {name: "details-id", params: {id: 1}};
      },
    },
    headingTitle: {
      type: String,
      default: "h1",
    },
    isAlignBaseline: {
      default: false
    }
  },
  computed: {
    topics() {
      try {
        return this.cardContent.topics.map((topic) => topic.name).join();
      } catch (err) {
        return "";
      }
    },
    authors() {
      try {
        return this.cardContent.authors.map((author) => author.name).join();
      } catch (err) {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" src="./Index.scss"/>
