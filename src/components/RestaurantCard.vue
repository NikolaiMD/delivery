<template>
  <RouterLink :to="'/' + props.link" class="card card-restaurant">
    <img :src="'src/assets/' + props.image" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ props.name }}</h3>
        <span class="card-tag tag">{{ props.delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">
          {{ props.stars }}
        </div>
        <div class="price">От {{ props.price }} ₽</div>
        <div class="category">{{ props.kitchen }}</div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
let props = defineProps({
  name: String,
  kitchen: String,
  image: String,
  price: Number,
  products: String,
  stars: Number,
  delivery: Number,
  link: String
})

</script>

<style scoped>

</style>