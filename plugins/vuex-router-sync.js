import VuexRouterSync from 'plugins/vuex-router-sync';
import store from '@/store';
import { router } from './vue-router';

VuexRouterSync.sync(store, router);
