import {createApp} from 'vue'
import {createPinia} from "pinia";
import './style.css'

import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
import Special from './components/partials/Special.vue'
import RestaurantHeader from './components/partials/RestaurantHeader.vue'
import CartModal from './components/partials/CartModal.vue'
import AccessModal from './components/partials/AccessModal.vue'
import Home from "./views/Home.vue";
import RestaurantCard from './components/RestaurantCard.vue'
import DishCard from './components/DishCard.vue'
import FoodBand from "./views/restaurants/food-band.vue";
import GusiLebedi from "./views/restaurants/gusi-lebedi.vue";
import PalkiSkalki from "./views/restaurants/palki-skalki.vue";
import PizzaBurger from "./views/restaurants/pizza-burger.vue";
import PizzaPlus from "./views/restaurants/pizza-plus.vue";
import Tanuki from "./views/restaurants/tanuki.vue";
import {useCartStore} from "./stores/cart.js";

app.component('Header', Header)
app.component('Footer', Footer)
app.component('Special', Special)
app.component('RestaurantHeader', RestaurantHeader)
app.component('CartModal', CartModal)
app.component('AccessModal', AccessModal)
app.component('Home', Home)
app.component('RestaurantCard', RestaurantCard)
app.component('DishCard', DishCard)
app.component('FoodBand', FoodBand)
app.component('GusiLebedi', GusiLebedi)
app.component('PalkiSkalki', PalkiSkalki)
app.component('PizzaBurger', PizzaBurger)
app.component('PizzaPlus', PizzaPlus)
app.component('Tanuki', Tanuki)
app.use(pinia)
app.use(router)
// app.config.globalProperties.mainStore = useCartStore()
app.mount('#app')
