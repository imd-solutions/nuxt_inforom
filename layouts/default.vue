<template>
  <v-app dark>
    <Header />
    <SearchResults />
    <Loading />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import SearchResults from '../components/Search/Results'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Loading/Loading'

export default {
  name: 'DefaultLayout',
  components: { SearchResults, Footer, Loading },
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
      loading: true,
    }
  },
}
</script>

<style lang="scss">
.v-main {
  background: rgb(0, 105, 173);
  background: linear-gradient(
    180deg,
    rgba(228, 228, 228, 1) 0%,
    rgba(255, 255, 255, 1) 200px
  );
}
</style>
