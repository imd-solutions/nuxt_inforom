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
const formats = [
  'Article',
  'case_study',
  'Case study',
  'Case Study',
  'Company',
  'ebook',
  'Insight',
  'media',
  'news',
  'Podcast',
  'Report',
  'research_report',
  'Survey',
  'Video',
  'webinar',
  'Webinar',
  'Whitepaper',
]

const typeMapping = [
  {
    title: 'Reports',
    slug: 'reports',
    lookup: 'research_report',
    headerColour: 'blue lighten-2',
  },
  {
    title: 'Case studies',
    slug: 'case-studies',
    lookup: 'Case study',
    headerColour: 'blue lighten-2',
  },
  {
    title: 'eBooks',
    slug: 'ebooks',
    lookup: 'ebook',
    headerColour: 'light-green lighter-2',
  },
  {
    title: 'Proof of Concepts',
    slug: 'proof-of-concepts',
    headerColour: 'light-green lighter-2',
  },
  {
    title: 'White Papers',
    slug: 'white-papers',
    headerColour: 'light-green lighter-2',
  },
  {
    title: 'Features and Opinions',
    lookup: 'Article',
    slug: 'features-and-opinions',
    headerColour: 'light-green lighter-2',
  },
  {
    title: 'Webinars',
    slug: 'webinars',
    headerColour: 'light-green lighter-2',
  },
  {
    title: 'Podcasts',
    slug: 'podcasts',
    headerColour: 'light-green lighter-2',
  },
  {
    title: 'Videos',
    slug: 'videos',
    headerColour: 'light-green lighter-2',
  },
]

import Listing from '../listing'

export default {
  name: 'TopicArticles',

  head() {
    return {
      title: this.pageTitle,
    }
  },

  extends: Listing,

  computed: {
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
    typeLookup() {
      return this.pageType.lookup || this.pageTitle
    },
    headerColour() {
      return this.pageType.headerColour
    },
  },

  methods: {
    // TODO: replace this with fetch for articles by type once endpoint exists
    getContentArticles() {
      let payload = `query MyQuery {
        liveArticles(filters: {format: "${this.typeLookup}"}) {
            ${articleQueryFields}
        }
      }`
      let jsonPayload = JSON.stringify({ query: payload })
      this.$store.dispatch('activateLoader', 1)
      this.proxy
        .fetchContentData(jsonPayload)
        .then((response) => {
          let data = response.data.liveArticles
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
          this.$store.dispatch('activateCategories', this.allArticles)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          this.$store.dispatch('activateLoader', -1)
        })
    },
  },

  asyncData({ params }) {
    return {
      category: params.category,
    }
  },

  watch: {
    category: {
      immediate: true,
      handler(category) {
        console.log('category :>> ', category)
        this.getContentArticles()
      },
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
