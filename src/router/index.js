import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/HomePage.vue'; // Ваш компонент HomePage
import RegisterForm from '@/components/RegisterForm.vue'; // Компонент регистрации
import LoginForm from '@/components/LogIn.vue'; // Компонент для входа (логин)
import ProfilePage from '@/pages/ProfilePage.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/login',
        name: 'login',
        component: LoginForm, // Ваш компонент для логина
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterForm, // Компонент для регистрации
    },
    {
        path: '/profile',
        component: ProfilePage,
        name: 'profile',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // Список маршрутов
});

export default router;
