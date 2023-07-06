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

import Listing from '../listing'

export default {
  name: 'TopicArticles',

  head() {
    return {
      title: 'Topic - ' + this.pageTitle,
    }
  },

  extends: Listing,

  data() {
    return {
      topic: {
        slug: this.$route.params.topic,
        name: this.$route.params.topic,
      },
    }
  },

  computed: {
    pageTitle() {
      return this.topic.name
    },
  },

  methods: {
    // TODO: replace this with fetch for topic articles once endpoint exists
    getContentArticles() {
      let payload = `query MyQuery {
        liveArticles(filters: {topic: "${this.$route.params.topic}"}) {
            ${articleQueryFields}
        }
        allTopics {
            name
            slug
            featured
        }
      }`
      let jsonPayload = JSON.stringify({ query: payload })
      if (!!this.$store.state.homepageModule.topics.length) {
        this.allArticles = this.$store.state.homepageModule.topics
        return false
      }
      this.$store.dispatch('activateLoader', 1)
      this.proxy
        .fetchContentData(jsonPayload)
        .then((response) => {
          let data = response.data.liveArticles
          this.allArticles = data.map((item) => {
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
          this.$store.dispatch('activateTopics', this.allArticles)
          this.topic = response.data.allTopics.find(
            (topic) => topic.slug === this.$route.params.topic
          )
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

<style lang="scss" src="./index.scss"></style>
