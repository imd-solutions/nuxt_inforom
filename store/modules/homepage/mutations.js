import Vue from 'vue'

export default {
  setIsLoading(state, payload) {
    state.isLoading = payload
  },
  setHero1Data(state, payload) {
    state.hero1Data = payload
  },
  setHero2Data(state, payload) {
    state.hero2Data = payload
  },
  setTrendingArticles(state, payload) {
    state.trendingArticles = payload
  },
  setOtherArticles(state, payload) {
    state.otherArticles = payload
  },
  setFeaturedArticles(state, payload) {
    state.featuredArticles = payload
  },
  setReadArticles(state, payload) {
    state.readArticles = payload
  },
  setListenArticles(state, payload) {
    state.listenArticles = payload
  },
  setWatchArticles(state, payload) {
    state.watchArticles = payload
  },
  setAuthors(state, payload) {
    state.authors = payload
  },
  setFeaturedTopics(state, payload) {
    state.featuredTopics = payload
  },
  setShowMoreLoadedArticleItems(state, payload) {
    state.showMoreLoadedArticleItems = payload
  },
  setFeaturedAuthors(state, payload) {
    state.featuredAuthors = payload
  },
  setDetails(state, payload) {
    let index = state.details.findIndex((detail) => {
      return detail.id === payload.id
    })
    if (index > -1) {
      state.details[index] = payload
    } else {
      state.details.push(payload)
    }
  },
  setCategories(state, payload) {
    state.categories = payload
  },
  setTopics(state, payload) {
    state.topics = payload
  },
  setListing(state, payload) {
    state.listing = payload
  },
  setStore(state, [key, val]) {
    Vue.set(state, key, val)
  },
}
