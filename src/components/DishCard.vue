<template>
  <div class="cards cards-menu">
    <div v-for="dish in dishes" class="card">
      <img :src="'/src/assets/' + dish.image" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">{{ dish.name }}</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">{{ dish.description }}
          </div>
        </div>
        <div class="card-buttons">
          <button
              v-on:click="cart.increaseCount(dish.id); cart.addToCart({name: dish.name, price: dish.price, id: dish.id, qty: dish.qty})"
              class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price-bold">{{ dish.price }} ₽</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from "../stores/cart.js";
import dishCardData from '../composables/dishCardData.js'

const cart = useCartStore()
const {
  dishes
} = dishCardData()
</script>

<style scoped>

</style>