import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutMe from '../components/AboutMe.vue';
import AchievementsPage from '../components/AchievementsPage.vue';
import SkillsPage from '../components/SkillsPage.vue';
import ContactMe from '../components/ContactMe.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutMe },
  { path: '/achievements', component: AchievementsPage },
  { path: '/skills', component: SkillsPage },
  { path: '/contact', component: ContactMe }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

