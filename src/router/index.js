import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";
import FoodBand from "../views/restaurants/food-band.vue";
import GusiLebedi from "../views/restaurants/gusi-lebedi.vue";
import PalkiSkalki from "../views/restaurants/palki-skalki.vue";
import PizzaBurger from "../views/restaurants/pizza-burger.vue";
import PizzaPlus from "../views/restaurants/pizza-plus.vue";
import Tanuki from "../views/restaurants/tanuki.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/food-band',
            name: 'FoodBand',
            component: FoodBand
        },
        {
            path: '/gusi-lebedi',
            name: 'GusiLebedi',
            component: GusiLebedi
        },
        {
            path: '/palki-skalki',
            name: 'PalkiSkalki',
            component: PalkiSkalki
        },
        {
            path: '/pizza-burger',
            name: 'PizzaBurger',
            component: PizzaBurger
        },
        {
            path: '/pizza-plus',
            name: 'PizzaPlus',
            component: PizzaPlus
        },
        {
            path: '/tanuki',
            name: 'Tanuki',
            component:Tanuki
        },
    ]
})
export default router