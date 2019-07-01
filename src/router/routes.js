
const routes = [
  { path: '/', redirect: '/movies' },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { name: 'movies', path: '/movies', component: () => import('pages/Movies.vue') },
      { name: 'tv', path: 'tv', component: () => import('pages/Tv.vue') },
      { name: 'settings', path: 'settings', component: () => import('pages/Settings.vue') },
      { name: 'tv-show', path: 'tv/shows/:id/:title', component: () => import('pages/Show.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
