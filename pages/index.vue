<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <Layout>
        <template>
          <v-row>
            <v-col class="col-md-6 col-sm-12 border-r">
              <Card
                  :badge="{}"
                  :cardContent="hero1Data"
                  :link="{ name: 'details-id', params: { id: hero1Data.slug } }"
                  :image-height="348"
                  :cardDetailsClasses="{image: '', topics: '', title: '', content: '', date: '', authors: ''}"
                  style=""
              />
            </v-col>
            <v-col class="col-md-3 col-sm-12">
              <div class="d-flex flex-column hero2Articles">
                <Card
                    :badge="{}"
                    headingTitle="h4"
                    :cardContent="hero2Data[0]"
                    :showContent="false"
                    :link="{ name: 'details-id', params: { id: hero2Data[0].slug } }"
                    :cardDetailsClasses="{image: '', topics: '', title: '', content: '', date: '', authors: ''}"
                    :showHr="true"
                />
                <Card
                    :badge="{}"
                    headingTitle="h4"
                    :cardContent="hero2Data[1]"
                    :showContent="false"
                    :link="{ name: 'details-id', params: { id: hero2Data[0].slug } }"
                    :cardDetailsClasses="{image: '', topics: '', title: '', content: '', date: '', authors: ''}"
                />
              </div>
            </v-col>
            <v-col class="col-md-3 col-sm-12  border-l">
              <Trending :articles="trendingArticles"/>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="12">
              <ContentDiv :colCss="8" class="reports-content" :background="'#AABE3B'" :title="'Reports'" :buttonText="'Show All'">
                <div :class="'row'">
                  <v-col class="col-md-8 col-sm-12">
                    <v-row>
                      <v-col class="col-md-6 col-sm-12">
                        <Card
                            :badge="{}"
                            headingTitle="h5"
                            :cardContent="featuredArticles[0]"
                            :link="{ name: 'details-id', params: { id: featuredArticles.length && featuredArticles[0].slug } }"
                            :is-horizontal="true"
                            :cardDetailsClasses="{image: '', topics: '', title: '', content: 'inkBlue--text', date: '', authors: ''}"
                            :image-width="'72px'"
                            :isAlignBaseline="false"
                            :border-bottom="true"
                        />
                      </v-col>
                      <v-col class="col-md-6 col-sm-12">
                        <Card
                            :badge="{}"
                            headingTitle="h5"
                            :cardContent="featuredArticles[1]"
                            :link="{ name: 'details-id', params: { id: featuredArticles.length && featuredArticles[1].slug } }"
                            :is-horizontal="true"
                            :cardDetailsClasses="{image: '', topics: '', title: '', content: 'inkBlue--text', date: '', authors: ''}"
                            :image-width="'72px'"
                            :border-bottom="true"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="col-md-6 col-sm-12">
                        <Card
                            :badge="{}"
                            headingTitle="h5"
                            :cardContent="featuredArticles[2]"
                            :link="{ name: 'details-id', params: { id:   featuredArticles.length && featuredArticles[2].slug } }"
                            :is-horizontal="true"
                            :cardDetailsClasses="{image: '', topics: '', title: '', content: 'inkBlue--text', date: '', authors: ''}"
                            :image-width="'72px'"
                        />
                      </v-col>
                      <v-col class="col-md-6 col-sm-12">
                        <Card
                            :badge="{}"
                            headingTitle="h5"
                            :cardContent="featuredArticles[3]"
                            :link="{ name: 'details-id', params: { id:   featuredArticles.length && featuredArticles[3].slug } }"
                            :is-horizontal="true"
                            :cardDetailsClasses="{image: '', topics: '', title: '', content: 'inkBlue--text', date: '', authors: ''}"
                            :image-width="'72px'"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col v-if="!$vuetify.breakpoint.mobile" cols="4" class="d-flex align-center"><img
                      style="width: 100%" :src="img" alt=""/></v-col>
                </div>
              </ContentDiv>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="ad_billboard text-center">
                <Advert v-if="billboardAdvert" :advert="billboardAdvert"/>
              </div>
            </v-col>
          </v-row>
          <v-row class="border-b">
            <v-col class="col-md-3 col-sm-12">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[0]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[0] && otherArticles[0].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-9 col-sm-12">
              <Card :badge="{}" headingTitle="h2" :card-content="otherArticles[1]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[1] && otherArticles[1].slug } }"
                    :isHorizontal="true"
                    :imgFit="true"/>
            </v-col>
          </v-row>
          <v-row class="border-b mb-3">
            <v-col class="col-md-4 col-sm-12 border-r mt-3 mb-3">
              <Card :badge="{}" headingTitle="h3" :card-content="otherArticles[2]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[2] && otherArticles[2].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-4 col-sm-12">
              <Card :badge="{}" headingTitle="h3" :card-content="otherArticles[3]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[3] && otherArticles[3].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-4 col-sm-12 border-l mt-3 mb-3">
              <Card :badge="{}" headingTitle="h3" :card-content="otherArticles[4]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[4] && otherArticles[4].slug } }"
                    :showContent="false"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="col-md-9 col-sm-12">
              <Card :badge="{}" headingTitle="h2" :card-content="otherArticles[5]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[5] && otherArticles[5].slug } }"
                    :isHorizontal="true" :imgFit="true"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-l">
              <NewsletterForm/>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="col-md-6 col-sm-12">
              <ContentDiv class="most-popular" :showTitle="false" :showButton="false" :background="'#0D2548'">
                <h3 class="mb-3"
                    style="font-family: 'Gotham';font-style: normal;font-weight: 400;font-size: 20px;line-height: 140%;text-align: center;text-transform: uppercase;color: #FFFFFF;">
                  Most Popular</h3>
                <Tab
                    :items="[
                        {text: 'Read', content: readArticles, icon: 'mdi-file-document-outline'},
                        {text: 'Listen', content: listenArticles, icon: 'mdi-speaker-wireless'},
                        {text: 'Watch', content: watchArticles, icon: 'mdi-video'}
                    ]"/>
              </ContentDiv>
            </v-col>
            <v-col class="col-md-6 col-sm-12">
              <Timeline style="height: 100%" :data="homepageModule.featuredAuthors" background="#AABE3B"/>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col class="col-md-4 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h3" :card-content="otherArticles[6]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[6] && otherArticles[6].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-4 col-sm-12">
              <Card :badge="{}" headingTitle="h3" :card-content="otherArticles[7]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[7] && otherArticles[7].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-4 col-sm-12 border-l">
              <Card :badge="{}" headingTitle="h3" :card-content="otherArticles[8]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[8] && otherArticles[8].slug } }"
                    :showContent="false"/>
            </v-col>
          </v-row>
          <v-row class="border-t pt-3 pb-3">
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[9]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[9] && otherArticles[9].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[10]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[10] && otherArticles[10].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[11]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[11] && otherArticles[11].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[12]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[12] && otherArticles[12].slug } }"
                    :showContent="false"/>
            </v-col>
          </v-row>
          <v-row class="border-t pt-3 mb-3">
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[13]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[13] && otherArticles[13].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[14]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[14] && otherArticles[14].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[15]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[15] && otherArticles[15].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[16]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[16] && otherArticles[16].slug } }"
                    :showContent="false"/>
            </v-col>
          </v-row>

          <ContentDiv v-if="featuredTopics.length > 0" :background="'#AABE3B'" classes="mb-10"
                      :title="'Browse featured topics'"
                      :buttonText="'See All Topics'" :isHeaderFull="true">
            <Carousel>
              <template>
                <Link v-for="topic in featuredTopics" :key="topic.slug" :to="topic.url"
                      style="padding: 0 4px; position: relative">
                  <img width="100%" :src="topic.image" :alt="topic.name">
                  <p class="pa-3 text-center">{{ topic.name }}</p>
                </Link>
              </template>
            </Carousel>
          </ContentDiv>

          <v-row class="border-b pb-3">
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[17]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[17] && otherArticles[17].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[18]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[18] && otherArticles[18].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[19]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[19] && otherArticles[19].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[20]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[20] && otherArticles[20].slug } }"
                    :showContent="false"/>
            </v-col>
          </v-row>
          <v-row class="border-b pt-3 pb-3 mt-3 mb-3">
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[21]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[21] && otherArticles[21].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[22]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[22] && otherArticles[22].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12 border-r">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[23]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[23] && otherArticles[23].slug } }"
                    :showContent="false"/>
            </v-col>
            <v-col class="col-md-3 col-sm-12">
              <Card :badge="{}" headingTitle="h4" :card-content="otherArticles[24]"
                    :link="{ name: 'details-id', params: { id: !!otherArticles[24] && otherArticles[24].slug } }"
                    :showContent="false"/>
            </v-col>
          </v-row>
          <template v-if="showMoreLoadedArticles">
            <v-row v-for="(chunk, i) in chunkSections(showMoreLoadedArticleItems, 4)" :key="i"
                   class="border-b pb-3 mt-3 mb-3">
              <v-col v-for="(item, j) in chunk" class="col-md-3 col-sm-12" :class="(j+1) % 4 ? 'border-r' : ''"
                     :key="item.id">
                <Card :badge="{}" headingTitle="h4" :card-content="item"
                      :link="{ name: 'details-id', params: { id: item.slug } }" :showContent="false"/>
              </v-col>
            </v-row>
          </template>
          <v-row class="mb-10 mt-12">
            <div class="d-flex align-center justify-center w-full">
              <Button @buttonEvent="buttonEvent" width="130" text="Load More" :background="'#E0121D'"
                      :background-color="'#E0121D'" border-color="#E0121D" color="white"/>
            </div>
          </v-row>
        </template>
      </Layout>
    </v-col>
  </v-row>
</template>

<script>
import ContentProxy from "../proxies/ContentProxy";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import Trending from "../components/Trending/Trending";
import NewsletterForm from "../components/Form/Newsletter/Newsletter";
import ContentDiv from "../components/ContentDiv/ContentDiv";
import Tab from "../components/Tab/Tab";
import img from '../assets/Images/Reports.png'
import Timeline from "../components/Timeline/Timeline";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import Advert from "../components/Advert/Advert"
import {mapState} from 'vuex'

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
  slug
  live
  title
`

export default {
  name: 'IndexPage',
  components: {Button, Timeline, ContentDiv, NewsletterForm, Trending, Layout, Card, Tab, Link, Advert},
  data() {
    return {
      hero1Data: {
        image: '',
        topics: '',
        title: '',
        content: '',
        date: '',
        authors: '',
        id: "",
        slug: ""
      },
      hero2Data: [{
        image: '',
        topics: '',
        title: '',
        content: '',
        date: '',
        authors: '',
        id: '',
        slug: ""
      }, {
        image: '',
        topics: '',
        title: '',
        content: '',
        date: '',
        authors: '',
        id: '',
        slug: ""
      }],
      trendingArticles: [],
      otherArticles: [],
      featuredArticles: [],
      pageNumber: 1,
      proxy: new ContentProxy(),
      img: img,
      readArticles: null,
      listenArticles: null,
      watchArticles: null,
      featuredTopics: [],
      totalClickedNumberOfMoreLoading: 0,
      showMoreLoadedArticles: false,
      totalArticleNumber: 25,
      showMoreLoadedArticleItems: [],
      enabledLoader: 1,
      disabledLoader: -1,
    }
  },
  mounted() {
    this.getHeroImageData();
    this.getHero2ImageData();
    this.getTrendingArticles();
    this.getContentArticles(1);
    this.getFeaturedArticles();
    this.getContentArticles(this.pageNumber + 1);
    this.getMostPopularArticles();
    this.getAuthors();
    this.getAdverts();
    this.getCarouselArticles();
  },
  computed: {
    ...mapState(['homepageModule']),
    billboardAdvert() {
      try {
        return this.$store.state.homepageModule.adverts.filter((ad) => ad.format === 'billboard')[0]
      } catch (err) {
        return null
      }
    }
  },
  methods: {
    getHeroImageData() {
      let payload = `query MyQuery {
        frontpageArticles {
          hero1Article {
            ${articleQueryFields}
          }
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      let isLoaded = false
      if (!!this.$store.state.homepageModule.hero1Data) {
        this.hero1Data = this.$store.state.homepageModule.hero1Data
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let item = response.data.frontpageArticles.hero1Article
            let imageUrl = ''
            if (item.image && item.image.file)
              imageUrl = item.image.file.url
            if (JSON.stringify(this.hero1Data) !== JSON.stringify(response.data.frontpageArticles.hero1Article)) {
              this.hero1Data = {
                image: imageUrl,
                title: item.title,
                content: item.body,
                date: item.dateDisplay,
                authors: item.allAuthors,
                topics: item.allTopics,
                format: item.format,
                id: item.id,
                slug: item.slug,
              }
              this.$store.dispatch('activateHero1Data', this.hero1Data)
            }

          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getHero2ImageData() {
      let payload = `query MyQuery {
        frontpageArticles {
          hero2Articles {
            ${articleQueryFields}
          }
        }
      }`
      let isLoaded = false
      if (!!this.$store.state.homepageModule.hero2Data.length) {
        this.hero2Data = this.$store.state.homepageModule.hero2Data
        isLoaded = true

      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      let jsonPayload = JSON.stringify({query: payload})
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let data = response.data.frontpageArticles.hero2Articles
            let hero2Data = data.map(item => {
              let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                image: imageUrl,
                title: item.title,
                content: item.body,
                date: item.dateDisplay,
                authors: item.allAuthors,
                topics: item.allTopics,
                format: item.format,
                id: item.id,
                slug: item.slug,
              }
            })
            if (JSON.stringify(this.hero2Data) !== JSON.stringify(response.data.frontpageArticles.hero2Articles)) {
              this.hero2Data = hero2Data
              this.$store.dispatch('activateHero2Data', this.hero2Data)
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getTrendingArticles() {
      let payload = `query MyQuery {
        frontpageArticles {
          trendingArticles {
            ${articleQueryFields}
          }
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      let isLoaded = false
      if (!!this.$store.state.homepageModule.trendingArticles.length) {
        this.trendingArticles = this.$store.state.homepageModule.trendingArticles
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let data = response.data.frontpageArticles.trendingArticles
            let articles = this.trendingArticles = data.map(item => {
              return {
                content: item.title,
                date: item.dateDisplay,
                topics: item.allTopics,
                id: item.id,
                slug: item.slug,
              }
            })
            if (JSON.stringify(this.trendingArticles) !== JSON.stringify(response.data.frontpageArticles.trendingArticles)) {
              this.trendingArticles = articles
              this.$store.dispatch('activateTrendingArticles', this.trendingArticles)
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getContentArticles(pageNumber) {
      this.pageNumber = pageNumber
      let payload = `query MyQuery {
        frontpageArticles {
          otherArticles(pageSize: 20, page: ${this.pageNumber}) {
            ${articleQueryFields}
          }
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      let _this = this
      let isLoaded = false
      if (!!this.$store.state.homepageModule.otherArticles.length) {
        this.otherArticles = this.$store.state.homepageModule.otherArticles
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let data = response.data.frontpageArticles.otherArticles
            let otherArticles = data.map(item => {
              let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                image: imageUrl,
                title: item.title,
                content: item.body,
                date: item.dateDisplay,
                authors: item.allAuthors,
                topics: item.allTopics,
                format: item.format,
                id: item.id,
                slug: item.slug,
              }
            })
            if (JSON.stringify(this.otherArticles) !== JSON.stringify(response.data.frontpageArticles.otherArticles)) {
              let concatArray = _this.otherArticles.concat(otherArticles);
              this.otherArticles = concatArray;
              this.$store.dispatch('activateOtherArticles', this.otherArticles)
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getFeaturedArticles() {
      let payload = `query MyQuery {
        frontpageArticles {
          featuredArticles {
            ${articleQueryFields}
          }
        }
      }
`
      let jsonPayload = JSON.stringify({query: payload})
      let isLoaded = false
      if (!!this.$store.state.homepageModule.featuredArticles.length) {
        this.featuredArticles = this.$store.state.homepageModule.featuredArticles
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let data = response.data.frontpageArticles.featuredArticles
            let articles = data.map(item => {
              let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                image: imageUrl,
                title: item.title,
                content: item.body,
                id: item.id,
                slug: item.slug,
              }
            })
            if (JSON.stringify(this.featuredArticles) !== JSON.stringify(response.data.frontpageArticles.featuredArticles)) {
              this.featuredArticles = articles
              this.$store.dispatch('activateFeaturedArticles', this.featuredArticles)
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getMoreArticles() {
      this.getContentArticles(this.pageNumber + 1);
    },
    getMostPopularArticles() {
      let payload = `query MyQuery {
        frontpageArticles {
          popularByInteractionType {
            interactionType
            articles {
              ${articleQueryFields}
            }
          }
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      let isLoaded = false
      if (!!this.$store.state.homepageModule.readArticles.length) {
        this.readArticles = this.$store.state.homepageModule.readArticles
        this.listenArticles = this.$store.state.homepageModule.listenArticles
        this.watchArticles = this.$store.state.homepageModule.watchArticles
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let read = response.data.frontpageArticles.popularByInteractionType.find((popular) => popular.interactionType === 'R').articles
            let listen = response.data.frontpageArticles.popularByInteractionType.find((popular) => popular.interactionType === 'L').articles
            let watch = response.data.frontpageArticles.popularByInteractionType.find((popular) => popular.interactionType === 'W').articles
            let readArticles = read.map(item => {
              let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                image: imageUrl,
                title: item.title,
                content: item.body,
                id: item.id,
                slug: item.slug,
              }
            })
            let listenArticles = listen.map(item => {
              let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                image: imageUrl,
                title: item.title,
                content: item.body,
                id: item.id,
                slug: item.slug,
              }
            })
            let watchArticles = watch.map(item => {
              let imageUrl = 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg'
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                image: imageUrl,
                title: item.title,
                content: item.body,
                id: item.id,
                slug: item.slug,
              }
            })
            if (JSON.stringify(this.readArticles) !== JSON.stringify(response.data.frontpageArticles.readArticles)) {
              this.readArticles = readArticles;
              this.listenArticles = listenArticles;
              this.watchArticles = watchArticles;
              this.$store.dispatch('activateReadArticles', this.readArticles);
              this.$store.dispatch('activateListenArticles', this.listenArticles);
              this.$store.dispatch('activateWatchArticles', this.watchArticles);
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getAuthors() {
      let payload = `query MyQuery {
                        frontpageArticles {
                            featuredAuthors {
                                name
                                image {
                                    file {
                                        url
                                    }
                                }
                                articles {
                                    title
                                    slug
                                    id
                                }
                            }
                        }
                    }`
      let isLoaded = false
      if (!!this.$store.state.homepageModule.featuredAuthors.length) {
        this.featuredAuthors = this.$store.state.homepageModule.featuredAuthors
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      let jsonPayload = JSON.stringify({query: payload})
      this.proxy
          .fetchContentData(jsonPayload)
          .then((response) => {
            let data = response.data.frontpageArticles.featuredAuthors
            let articles = data.map(item => {
              let imageUrl = ''
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                imageUrl: imageUrl,
                name: item.name,
                articles: item.articles || [],
              }
            })
            if (JSON.stringify(this.featuredArticles) !== JSON.stringify(response.data.frontpageArticles.featuredArticles)) {
              this.featuredAuthors = articles
              this.$store.dispatch('activateFeaturedAuthors', this.featuredAuthors)
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    getAdverts() {
      let payload = `query getLiveAdverts {
                        liveAdverts {
                            name
                            format
                            image {
                                file {
                                    url
                                }
                            }
                            url
                            live
                        }
                    }`
      //this.$store.dispatch('activateLoader', this.enabledLoader)
      let jsonPayload = JSON.stringify({query: payload})
      this.proxy
          .fetchContentData(jsonPayload)
          .then((response) => {
            let data = response.data.liveAdverts
            let adverts = data.map(item => {
              let imageUrl = ''
              if (item.image && item.image.file)
                imageUrl = item.image.file.url
              return {
                name: item.name,
                format: item.format,
                imageUrl: imageUrl,
                url: item.url,
                live: item.live,
              }
            })
            this.$store.commit('setStore', ["adverts", adverts])
          })
          .catch((err) => {
            console.error(err)
          })
    },
    getCarouselArticles() {
      let payload = `query MyQuery {
        frontpageArticles {
          featuredTopics {
            name
            slug
            featuredImage {
              file {
                url
                name
              }
            }
          }
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      let isLoaded = false
      if (!!this.$store.state.homepageModule.featuredTopics.length) {
        this.featuredTopics = this.$store.state.homepageModule.featuredTopics
        isLoaded = true
      } else {
        this.$store.dispatch('activateLoader', this.enabledLoader)
      }
      this.proxy
          .fetchContentData(jsonPayload, isLoaded)
          .then((response) => {
            let data = response.data.frontpageArticles.featuredTopics
            let articles = data.map(item => {
              return {
                image: item.featuredImage.file.url || 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg',
                name: item.name,
                slug: item.slug,
                url: `/topics/${item.slug}/`,
                id: item.id
              }
            })
            if (JSON.stringify(this.featuredTopics) !== JSON.stringify(response.data.frontpageArticles.featuredTopics)) {
              this.featuredTopics = articles
              this.$store.dispatch('activateFeaturedTopics', this.featuredTopics)
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            if (!isLoaded) {
              this.$store.dispatch('activateLoader', this.disabledLoader)
            }
          })
    },
    buttonEvent() {
      this.totalClickedNumberOfMoreLoading += this.totalClickedNumberOfMoreLoading;
      this.showMoreLoadedArticleItems = this.otherArticles.slice(24)
      this.showMoreLoadedArticles = true;
      this.totalArticleNumber = this.totalArticleNumber + 8
      this.getMoreArticles()
    },
    chunkSections(array, length) {
      const totalChunks = [];
      const chunkLength = parseInt(length);

      for (let i = 0; i < array.length; i += chunkLength) {
        totalChunks.push(array.slice(i, i + chunkLength));
      }

      return totalChunks;
    },
  }
}
</script>

<style lang="scss" src="./Index.scss"></style>
