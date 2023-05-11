<template>
  <div class="section-heading">
    <h2 class="section-title restaurant-title">{{ info[0].name }}</h2>
    <div class="card-info">
      <div class="rating">
        {{ info[0].stars }}
      </div>
      <div class="price">От {{ info[0].price }} ₽</div>
      <div class="category">{{ info[0].kitchen }}</div>
    </div>
  </div>
</template>

<script setup>
import headerData from '../../composables/headerData.js'

const {
  info
} = headerData()
</script>

<style scoped>

</style>