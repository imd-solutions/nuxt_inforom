export default {
  activateHero1Data: ({commit}, payload) => {
    commit('setHero1Data', payload)
  },
  activateHero2Data: ({commit}, payload) => {
    commit('setHero2Data', payload)
  },
  activateTrendingArticles: ({commit}, payload) => {
    commit('setTrendingArticles', payload)
  },
  activateOtherArticles: ({commit}, payload) => {
    commit('setOtherArticles', payload)
  },
  activateFeaturedArticles: ({commit}, payload) => {
    commit('setFeaturedArticles', payload)
  },
  activateReadArticles: ({commit}, payload) => {
    commit('setReadArticles', payload)
  },
  activateListenArticles: ({commit}, payload) => {
    commit('setListenArticles', payload)
  },
  activateWatchArticles: ({commit}, payload) => {
    commit('setWatchArticles', payload)
  },
  activateAuthors: ({commit}, payload) => {
    commit('setAuthors', payload)
  },
  activateFeaturedTopics: ({commit}, payload) => {
    commit('setFeaturedTopics', payload)
  },
  activateShowMoreLoadedArticleItems: ({commit}, payload) => {
    commit('setShowMoreLoadedArticleItems', payload)
  },
  activateFeaturedAuthors: ({commit}, payload) => {
    commit('setFeaturedAuthors', payload)
  },
  activateDetails: ({commit}, payload) => {
    commit('setDetails', payload)
  },
  activateCategories: ({commit}, payload) => {
    commit('setCategories', payload)
  },
  activateTopics: ({commit}, payload) => {
    commit('setTopics', payload)
  },
  activateListing: ({commit}, payload) => {
    commit('setListing', payload)
  },
}
