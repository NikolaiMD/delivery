<template>
  <main class="main">
    <div class="container">
      <Special></Special>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов"/>
          </label>
        </div>
        <div class="cards cards-restaurants">
          <RestaurantCard
              v-for="(restaurant,index) in partners"
              :name="restaurant.name"
              :kitchen="restaurant.kitchen"
              :image="restaurant.image"
              :price="restaurant.price"
              :products="restaurant.products"
              :stars="restaurant.stars"
              :delivery="restaurant.time_of_delivery"
              :link="restaurant.products.replace('.json', '')"
          ></RestaurantCard>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import restaurantsData from "../db/db.json"
const partners = restaurantsData.db.partners
</script>

<style scoped>

</style>