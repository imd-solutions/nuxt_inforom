<template>
  <div class="report-details-page">
    <Masthead
      :title="pageTitle"
      subtitle="Enabling digital transformation through insight, research and analysis"
      :classes="headerColour"
    />
    <v-row class="mt-5">
      <v-col class="col-md-3 col-sm-12">
        <div class="d-flex flex-column hero2Articles">
          <Card
            :badge="{}"
            v-if="hero2Article"
            headingTitle="h4"
            :cardContent="hero2Article"
            :showContent="false"
            :link="{ name: 'details-id', params: { id: hero2Article.id } }"
            :showHr="true"
          />
          <Card
            :badge="{}"
            v-if="hero2Article"
            headingTitle="h4"
            :cardContent="hero2Article"
            :showContent="false"
            :link="{ name: 'details-id', params: { id: hero3Article.id } }"
          />
        </div>
      </v-col>
      <v-col class="col-md-6 col-sm-12 border-r border-l">
        <Card
          :badge="{}"
          v-if="hero1Article"
          :cardContent="hero1Article"
          :link="{ name: 'details-id', params: { id: hero1Article.id } }"
          :image-height="348"
          style=""
        />
      </v-col>
      <v-col class="col-md-3 col-sm-12">
        <Trending
          headingTitle="span"
          icon="casestudy"
          v-if="trendingArticles.length"
          :articles="trendingArticles.splice(0, 7)"
          title="Popular features &amp; opinions"
        />
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col v-if="otherArticles" cols="12">
        <div v-for="(article, index) in otherArticles" :key="index">
          <Card
            :badge="{}"
            headingTitle="h3"
            :card-content="article"
            :link="{
              name: 'details-id',
              params: { id: article.id },
            }"
            :isHorizontal="true"
            :isFullwidth="true"
            :showHr="index < otherArticles.length - 1"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const articleQueryFields = `
  allAuthors {
    name
  }
  allTopics {
    name
  }
  body
  dateDisplay
  excerpt
  format {
    name
  }
  image {
    file {
      name
      url
    }
  }
  id
  live
  title
`
import ContentProxy from '../proxies/ContentProxy'
import Card from '../components/Card/Card'

export default {
  name: 'ArticleListing',

  head() {
    return {
      title: this.pageTitle,
    }
  },

  components: {
    Card,
  },

  data() {
    return {
      proxy: new ContentProxy(),
      allArticles: [],
      pageNumber: 1,
    }
  },

  computed: {
    articles() {
      return this.allArticles
    },
    hero1Article() {
      try {
        return this.articles[0]
      } catch (err) {
        console.error(err)
        return null
      }
    },
    hero2Article() {
      try {
        return this.articles[1]
      } catch (err) {
        console.error(err)
        return null
      }
    },
    hero3Article() {
      try {
        return this.articles[2]
      } catch (err) {
        console.error(err)
        return null
      }
    },
    otherArticles() {
      try {
        return this.articles.slice(2)
      } catch (err) {
        console.error(err)
        return null
      }
    },
    trendingArticles() {
      return this.allArticles.map((item) => {
        return {
          content: item.title,
          date: item.dateDisplay,
          topics: item.allTopics,
          id: item.id,
        }
      })
    },
    pageType() {
      try {
        return typeMapping.find(
          (cat) => cat.slug === this.$route.params.category
        )
      } catch (err) {
        return { title: 'Articles', headerColour: 'light-green lighter-2' }
      }
    },
    pageTitle() {
      return this.pageType.title
    },
    headerColour() {
      return this.pageType.headerColour
    },
  },

  methods: {
    getContentArticles() {
      let payload = `query MyQuery {
        frontpageArticles {
          otherArticles(pageSize: 20, page: ${this.pageNumber}) {
            ${articleQueryFields}
          }
        }
      }`
      let jsonPayload = JSON.stringify({ query: payload })
      this.$store.dispatch('activateLoader', 1)
      if (!!this.$store.state.homepageModule.listing.length) {
        this.allArticles = this.$store.state.homepageModule.listing
        return false
      }
      this.$store.dispatch('activateLoader', 1)
      this.proxy
        .fetchContentData(jsonPayload)
        .then((response) => {
          let data = response.data.frontpageArticles.otherArticles
          let articles = data.map((item) => {
            let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
            if (item.image && item.image.file) imageUrl = item.image.file.url
            return {
              image: imageUrl,
              title: item.title,
              content: item.body,
              date: item.dateDisplay,
              authors: item.allAuthors,
              topics: item.allTopics,
              format: item.format,
              id: item.id,
            }
          })
          this.allArticles = articles
          this.$store.dispatch('activateListing', this.allArticles)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          this.$store.dispatch('activateLoader', -1)
        })
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
