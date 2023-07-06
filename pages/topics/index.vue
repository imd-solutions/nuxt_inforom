<template>
  <div>
    <Masthead
      title="Topics"
      titleClasses=""
      subtitleClasses=""
      subtitle="Browse Inform topics from A - Z"
      :alignCenter="true"
    />
    <div class="fullMastHead">
      <Masthead
        :class="`mastheadTopic`"
        :showTitle="false"
        subtitle=""
        background="#F2F4F4"
      >
        <v-container>
          <h2 class="mastheadSubtitle">Key topics</h2>
          <v-btn
            v-for="(topic, index) in featuredTopics"
            :key="index"
            rounded
            class="border-1"
          >
            <Link
              :to="{
                name: 'topics-topic',
                params: { topic: topic.slug },
              }"
            >
              {{ topic.name }}
            </Link>
          </v-btn>
        </v-container>
      </Masthead>
    </div>
    <div class="fullMastContent">
      <div
        class="mastheadContainer"
        v-for="(section, sectionIndex) in alphabeticalTopics"
        :key="section.title"
      >
        <hr class="mastheadHr" v-if="sectionIndex === 0" />
        <div class="mastheadContent">
          <h2 class="pb-5">{{ section.title }}</h2>
          <v-row>
            <v-col v-if="isMobile" class="col-12">
              <p v-for="(topic, index) in section.data" :key="index">
                <Link
                  :to="{
                    name: 'topics-topic',
                    params: { topic: topic.slug },
                  }"
                >
                  {{ topic.name }}
                </Link>
              </p>
            </v-col>
            <v-col
              v-else
              class="col-md-4 col-12"
              v-for="(chunk, i) in chunkSections(section.data, 6)"
              :key="i"
            >
              <p v-for="(topic, index) in chunk" :key="index">
                <Link
                  :to="{
                    name: 'topics-topic',
                    params: { topic: topic.slug },
                  }"
                >
                  {{ topic.name }}
                </Link>
              </p>
            </v-col>
          </v-row>
        </div>
        <hr
          class="mastheadHr"
          v-if="sectionIndex < alphabeticalTopics.length - 1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Link from '../../components/Link/Link'
import ContentProxy from '../../proxies/ContentProxy'
import Masthead from '../../components/Masthead/Masthead'
import img from '../../assets/Images/masthead/reports.png'

export default {
  name: 'topics',

  components: {
    Masthead,
    Link,
  },

  head() {
    return {
      title: 'Topics',
    }
  },

  data() {
    return {
      proxy: new ContentProxy(),
      img: img,
      allTopics: [],
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.width < 500 ? true : false
    },
    featuredTopics() {
      return this.allTopics.filter((topic) => topic.featured)
    },
    alphabeticalTopics() {
      if (this.allTopics.length === 0) {
        return []
      }
      return Object.values(
        this.allTopics.reduce((acc, topic) => {
          let firstLetter = topic.name[0].toUpperCase()
          if (!acc[firstLetter]) {
            acc[firstLetter] = { title: firstLetter, data: [topic] }
          } else {
            acc[firstLetter].data.push(topic)
          }
          return acc
        }, {})
      )
    },
  },

  methods: {
    getTopics() {
      let payload = `query MyQuery {
                        allTopics {
                            name
                            slug
                            featured
                        }
                    }`
      let jsonPayload = JSON.stringify({ query: payload })
      this.$store.dispatch('activateLoader', 1)

      this.proxy
        .fetchContentData(jsonPayload)
        .then((response) => {
          this.allTopics = response.data.allTopics
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          this.$store.dispatch('activateLoader', -1)
        })
    },
    chunkSections(array, length) {
      const totalChunks = []
      const chunkLength = parseInt(length)

      for (let i = 0; i < array.length; i += chunkLength) {
        totalChunks.push(array.slice(i, i + chunkLength))
      }

      return totalChunks
    },
  },
  mounted() {
    this.getTopics()
  },
}
</script>

<style lang="scss" src="./index.scss"></style>
