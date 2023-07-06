<template>
  <div class="details-page">
    <div class="details-page__header">
      <div class="d-flex">
        <Avatar
            v-for="(author, index) in content.allAuthors"
            :key="index"
            :background="'#F5F6F7'"
            class="mr-2"
            :name="author.name"
            :imageUrl="author.file ? author.file.url : ''"
        />
      </div>
      <Topics class="mt-3" :text="topics"/>
      <Title :text="content.title"/>
      <Content :text="content.excerpt"/>
      <div class="d-flex flex-row align-center mb-4">
        <!-- <Length icon="mdi-clock-time-five-outline" class="mr-4"/> -->
        <Date icon="mdi-calendar" :text="content.dateDisplay"/>
      </div>
      <div v-if="isReport">
        <div v-show="showingAgreementCheckbox" class="report-form-wrapper mt-3">
          <h5 class="mb-2">Download Report</h5>
          <v-row>
            <v-col cols="1">
              <input
                  type="checkbox"
                  id="sponsorOptin"
                  name="sponsorOptin"
                  v-model="sponsorOptin"
              />
            </v-col>
            <v-col>
              <label for="sponsorOptin" class="mb-2">
                Yes, I’d wish to receive further information from, and otherwise
                be contacted by
                <span
                    v-for="(company, index) in content.allCompanies"
                    :key="index"
                >{{ company.name }}</span
                >.
              </label>
              <p>
                TM Forum will be processing your information (name, email,
                company, job title and country), with the assistance of our
                service providers located within and outside the European Union,
                to manage your registration to this event or report download, as
                well as to keep you informed about our services and products,
                further events and special offers, the organization of events,
                providing training and certification and facilitating
                collaboration programs.
              </p>
              <p>
                Your data will be shared with
                <span
                    v-for="(company, index) in content.allCompanies"
                    :key="index"
                >{{ company.name }}</span
                >
                for their follow-up. To learn more about how we process your
                data, please refer to our Privacy Policy.
              </p>
            </v-col>
          </v-row>
        </div>
        <Button
            id="report-download"
            @buttonEvent="buttonClick"
            icon="mdi-download"
            width="130"
            background="#E0121D"
            background-color="#E0121D"
            border-color="#E0121D"
            color="white"
        >
          <v-progress-circular
              v-if="fetching"
              :size="20"
              :width="4"
              color="white"
              indeterminate
          ></v-progress-circular>
        </Button>
      </div>
    </div>
    <div class="details-page__hero-image mt-4">
      <DefaultImage :src="content.image ? content.image.file.url : ''"/>
    </div>
    <div class="details-page__content mt-16">
      <v-row>
        <v-col cols="3">
          <div v-if="hasCompanies" class="details-page__content-aside">
            <p class="details-page__content-aside--title">
              Report sponsored by:
            </p>
            <div v-for="(item, index) in content.allCompanies" :key="index">
              <DefaultImage
                  :src="item.logo ? item.logo.file.url : ''"
                  class="mb-2"
                  style="max-width: 160px; width: max-content"
              />
            </div>
            <!-- <List
                :data="[{text: 'Header Title', id:'4647'},{text: 'Header Title', id:'4'}, {text: 'Active Header Title', id:'9695'},{text: 'Header Title', id:'6'}, {text: 'Header Title', id:'7'}]"/>
                -->
          </div>
          <p class="details-page__content-aside--sub-title mt-6">
            {{ content.title }}
          </p>
        </v-col>
        <v-col col="9">
          <div class="details-page__content-main">
            <div
                v-html="content.body"
                class="details-page__content-main--frame"
            ></div>
            <WebinarForm
                v-if="content.marketoFormidWebinar"
                date="Webinar date"
                description="Webinar description"
                :companies="content.allCompanies"
                :marketoFormId="content.marketoFormidWebinar"
                class="mt-8"
            />
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="details-page__footer mt-16">
      <DetailsTab
          :items="[{text: 'RELATED ARTICLES', content: carouselItems, icon:'mdi-file-document-outline'}]"/>
    </div>

  </div>
</template>

<script>
import ContentDiv from '../../components/ContentDiv/ContentDiv'
import img from '../../assets/Images/Reports.png'
import Avatar from '../../components/Avatar/Avatar'
import Topics from '../../components/Text/Topics/Topics'
import Title from '../../components/Text/Title/Title'
import Content from '../../components/Text/Content/Content'
import Date from '../../components/Text/Date/Date'
import Length from '../../components/Text/Length/Length'
import Button from '../../components/Button/Button'
import DefaultImage from '../../components/DefaultImage/DefaultImage'
import List from '../../components/List/List'
import DetailsTab from '../../components/DetailsTab/Tab'
import WebinarForm from '../../components/Form/Webinar/Webinar'
import ContentProxy from '../../proxies/ContentProxy'

export default {
  name: 'AppDetails',
  components: {
    List,
    DefaultImage,
    Date,
    Content,
    Title,
    Topics,
    Avatar,
    ContentDiv,
    Button,
    Length,
    DetailsTab,
    WebinarForm,
  },
  head() {
    return {
      title: this.content.title,
    }
  },
  data() {
    return {
      fetching: false,
      img: img,
      proxy: new ContentProxy(),
      content: {},
      showingAgreementCheckbox: false,
      sponsorOptin: false,
      carouselItems: []
    }
  },
  created() {
    this.getArticleDetails();
  },
  methods: {
    getArticleDetails() {
      // get anything cached in store
      let storeContent = this.$store.getters.getArticleDetailsById(
          this.getParamsId
      )
      if (storeContent) {
        this.content = storeContent.content
      }
      // check the server for new data
      let payload = `query ArticleBySlug {
        article(slug: "${this.getParamsId}") {
          allAuthors {
            name
            image {
              file {
                url
              }
            }
          }
          allTopics {
            name
            slug
          }
          allCompanies {
            name
            logo {
              file {
                url
              }
            }
          }
          format {
            name
          }
          body
          id
          lastPublishedAt
          dateDisplay
          live
          title
          image {
            file {
              name
              url
            }
          }
          excerpt
          firstPublishedAt
          owner {
            firstName
          }
          marketoFormidDownload
          marketoProgramidDownload
          marketoFormidWebinar
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      this.proxy
          .fetchContentData(jsonPayload)
          .then((response) => {
            this.content = response.data.article
            this.$store.commit('setDetails', {
              id: parseInt(this.getParamsId),
              content: response.data.article,
            })
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            this.getCarouselData()
          })
    },
    async buttonClick() {
      this.fetching = true
      // if we don't already have the user then redirect
      let user = await this.$oidc.getUser()
      if (!user) {
        return await this.$oidc.signinRedirect({
          state: {url: window.location.href},
        })
      } else if (!this.showingAgreementCheckbox) {
        this.showingAgreementCheckbox = true
      } else {
        let response = await this.proxy.marketo({
          formId: this.content.marketoFormidDownload,
          programId: this.content.marketoProgramidDownload,
          input: [
            {
              leadFormFields: {
                firstName: user.profile.given_name,
                lastName: user.profile.family_name,
                email: user.profile.email,
                document_type: this.content.format.name,
                document_topic: this.topics,
                document_title: this.content.title,
                document_app: 'TM Forum Inform',
                PMCF_sponsor_optin: this.sponsorOptin,
              },
            },
          ],
        })
        // TODO: return signed file url from api response
        // window.open(response.url)
        // temp return dummy file from s3
        window.open(
            'https://inform-staging-cms-public.s3.amazonaws.com/enterprise5g2020final.pdf'
        )
      }
      this.fetching = false
    },
    getCarouselData() {
      let payload = `
      query MyQuery {
        liveArticles(filters: {topic: "${this.topics}"}) {
          id
          image {
            file {
              url
            }
          }
          title
          lastPublishedAt
          owner {
            firstName
          }
          slug
        }
      }`
      let jsonPayload = JSON.stringify({query: payload})
      this.proxy
          .fetchContentData(jsonPayload)
          .then((response) => {
            let items = response.data.liveArticles

            this.carouselItems = items.map(item => {
              return {
                image: item.image || 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg',
                topicAndType: item.lastPublishedAt,
                title: item.title,
                content: null,
                date: item.lastPublishedAt,
                author: item.owner,
                id: item.id,
                slug: item.slug
              }
            })
          })
          .catch((err) => {
            console.error(err)
          })


    }
  },
  computed: {
    getParamsId() {
      return this.$router.currentRoute.params.id
    },
    topics() {
      try {
        return this.content.allTopics.map((topic) => topic.name).join()
      } catch (err) {
        return ''
      }
    },
    isReport() {
      try {
        return this.content.format.name === 'research_report'
      } catch (err) {
        return false
      }
    },
    hasCompanies() {
      try {
        return !!this.content.allCompanies.filter((company) => !!company.logo)
            .length
      } catch (err) {
        return false
      }
    },
  },
}
</script>

<style lang="scss" src="./details.scss"></style>
