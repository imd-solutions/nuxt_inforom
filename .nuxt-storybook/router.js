import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25523b10 = () => interopDefault(import('../pages/reports/index.vue' /* webpackChunkName: "pages/reports/index" */))
const _312fd9be = () => interopDefault(import('../pages/topics/index.vue' /* webpackChunkName: "pages/topics/index" */))
const _139d2076 = () => interopDefault(import('../pages/reports/details/_category.vue' /* webpackChunkName: "pages/reports/details/_category" */))
const _fcaadf3a = () => interopDefault(import('../pages/details/_id.vue' /* webpackChunkName: "pages/details/_id" */))
const _67942670 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/reports",
    component: _25523b10,
    name: "reports"
  }, {
    path: "/topics",
    component: _312fd9be,
    name: "topics"
  }, {
    path: "/reports/details/:category?",
    component: _139d2076,
    name: "reports-details-category"
  }, {
    path: "/details/:id?",
    component: _fcaadf3a,
    name: "details-id"
  }, {
    path: "/",
    component: _67942670,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
