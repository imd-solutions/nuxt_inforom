<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top__left">
        <a href="https://tmforum.org" class="mainsite-link">
          <v-icon color="#FFFFFFBF" size="18px">mdi-chevron-left</v-icon>
          Go to TMFORUM.ORG
        </a>
      </div>
      <div v-if="!user" class="header-top__right">
        <a href="#" @click.stop.prevent="login()">Login</a>
        <a href="https://myaccount.tmforum.org/register">Register</a>
      </div>
      <div v-else class="header-top__right">
        <a href="https://staging-myaccount.tmforum.org/sp/saml/slo/">Logout</a>
      </div>
    </div>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      style="margin-top: 28px !important"
    >
      <v-toolbar-title id="logo_header">
        <Link :to="{ name: 'index' }">
          <Logo />
        </Link>
      </v-toolbar-title>
      <v-spacer />
      <ul class="header__list" v-if="!$vuetify.breakpoint.mobile">
        <li>
          <Link :to="{ name: 'topics' }">Topics</Link>
        </li>
        <li>
          <NavigationSelect
            :label="'Research<br>& analysis'"
            :items="[
              {
                text: 'Reports',
                to: { name: 'type-category', params: { category: 'reports' } },
              },
              {
                text: 'eBooks',
                to: { name: 'type-category', params: { category: 'ebooks' } },
              },
              {
                text: 'Case studies',
                to: {
                  name: 'type-category',
                  params: { category: 'case-studies' },
                },
              },
              {
                text: 'Proof of Concepts',
                to: {
                  name: 'type-category',
                  params: { category: 'proof-of-concepts' },
                },
              },
              {
                text: 'White Papers',
                to: {
                  name: 'type-category',
                  params: { category: 'white-papers' },
                },
              },
            ]"
          />
        </li>
        <li>
          <Link
            :to="{
              name: 'type-category',
              params: { category: 'features-and-opinions' },
            }"
            >Features<br />&amp; Opinion</Link
          >
        </li>
        <li>
          <NavigationSelect
            :label="'Webinars<br>& Podcasts'"
            :items="[
              {
                text: 'Webinar',
                to: { name: 'type-category', params: { category: 'webinars' } },
              },
              {
                text: 'Podcast',
                to: { name: 'type-category', params: { category: 'podcasts' } },
              },
            ]"
          />
        </li>
        <li>
          <Link :to="{ name: 'type-category', params: { category: 'videos' } }"
            >Video</Link
          >
        </li>
      </ul>
      <v-spacer />
      <Search v-if="!$vuetify.breakpoint.mobile" />
      <BurgerMenu v-if="$vuetify.breakpoint.mobile" />
    </v-app-bar>
  </div>
</template>

<script>
import axios from 'axios'

import DefaultImage from '../DefaultImage/DefaultImage'
import Logo from '../Logo/Logo'
import NavigationSelect from '../Select/NavigationSelect'
import Search from '../Search/Search'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import AuthProxy from '@/proxies/AuthProxy'
import Link from '../Link/Link'

const logoutUrl = 'https://staging-myaccount.tmforum.org/sp/saml/slo'

export default {
  name: 'AppHeader',
  components: {
    Search,
    BurgerMenu,
    NavigationSelect,
    DefaultImage,
    Logo,
    Link,
  },
  props: {
    isStorybook: {
      default: false,
    },
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      isMobile: false,
      proxy: new AuthProxy(),
      user: null,
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768
    })
  },
  methods: {
    asd() {
      this.$router.push({ path: '/details/1', params: { id: 1 } })
    },
    async login() {
      await this.$oidc.signinRedirect({ state: { url: window.location.href } })
    },
    async logout() {
      axios.get(logoutUrl)
      this.user = null
    },
    async getUser() {
      if (!this.user) {
        this.user = await this.$oidc.getUser()
      }
    },
  },
  mounted() {
    this.getUser()
    setTimeout(() => {
      this.getUser()
    }, 60000)
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
