import Vuex from 'vuex';
import commonModule from'./modules/common'
import homepageModule from'./modules/homepage'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      commonModule,
      homepageModule
    }
  });
};

export default createStore
