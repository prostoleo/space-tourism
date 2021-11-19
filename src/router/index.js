/* eslint-disable import/no-cycle */
import { createRouter, createWebHistory } from 'vue-router';

import Home from '^/Home.vue';
import Destination from '^/Destination.vue';
import Crew from '^/Crew.vue';
import Technology from '^/Technology.vue';

const routes = [
	/* {
    path: '/',
    redirect: '/groups',
    meta: { requiresAuth: true }
  }, */
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/crew',
		name: 'Crew',
		component: Crew,
	},
	{
		path: '/technology',
		name: 'Technology',
		component: Technology,
	},
	{
		path: '/destination',
		name: 'Destination',
		component: Destination,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
