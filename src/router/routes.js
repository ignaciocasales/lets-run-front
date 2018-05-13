export default [
  {
    path: '/',
    component: () => import('layouts/main'),
    children: [
      {path: '/', component: () => import('pages/LrLanding')},
      {path: '/feed', component: () => import('pages/LrFeed')}
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404.vue')
  }
]
