import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import ResultsView from '../views/ResultsView.vue'
import SingleNewsView from '../views/SingleNewsView.vue'
import TeamsView from '../views/TeamsView.vue'
import SingleTeamView from '../views/SingleTeamView.vue'
import SingleResultView from '../views/SingleResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/news/:id',
      component: SingleNewsView
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    },
    {
      path: '/results/:id',
      name: 'single-result',
      component: SingleResultView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/teams/:id',
      name: 'team',
      component: SingleTeamView
    }
  ]
})

export default router
