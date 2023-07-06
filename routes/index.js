export default [
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Default Page.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/details/:id',
    name: 'article-details',
    component: () => import('@/views/details.vue'),
    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },
  {
    path: '/topics',
    name: 'topics',
    component: () => import('@/pages/topics/topics'),
    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/views/Login/Default Page.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
