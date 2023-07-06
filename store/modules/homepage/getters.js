export default {
  getHero1Data: (state) => state.hero1Data,
  getHero2Data: (state) => state.hero2Data,
  getTrendingArticles: (state) => state.trendingArticles,
  getOtherArticles: (state) => state.otherArticles,
  getFeaturedArticles: (state) => state.featuredArticles,
  getReadArticles: (state) => state.readArticles,
  getListenArticles: (state) => state.listenArticles,
  getWatchArticles: (state) => state.watchArticles,
  getAuthors: (state) => state.authors,
  getFeaturedTopics: (state) => state.featuredTopics,
  getShowMoreLoadedArticleItems: (state) => state.showMoreLoadedArticleItems,
  getArticleDetailsById: (state) => (id) => {
    return state.details.find((article) => article.id === id)
  },
}
