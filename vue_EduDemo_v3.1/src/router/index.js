import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Admin from '@/views/Admin.vue';
import Datas from '@/views/Datas.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: Home },
    { path: '/admin', component: Admin },
    { path: '/Datas', component: Datas }
  ]
});

export default router;
