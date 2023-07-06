import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = {
  hero1Data: {},
  hero2Data: [],
  trendingArticles: [],
  otherArticles: [],
  featuredArticles: [],
  readArticles: [],
  listenArticles: [],
  watchArticles: [],
  authors: [],
  featuredTopics: [],
  showMoreLoadedArticleItems: [],
  featuredAuthors: [],
  details: [],
  categories: [],
  topics: [],
  listing: []
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

export default {
  state,
  actions,
  mutations,
  getters
}
