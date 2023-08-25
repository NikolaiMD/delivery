<template>
  <div v-if="props.show === true" class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button v-on:click="hide" class="close">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <div v-for="(item, index) in items.items" :key="item.id">
          <div v-if="item.id === Object.keys(items.counters)[index] && Object.values(items.counters)[index] > 0"
               class="food-row">
            <span class="food-name">{{ item.name }}</span>
            <strong class="food-price">{{ item.price * items.getCounterValue(item.id) }}</strong>
            <div class="food-counter">
              <button v-on:click="items.decreaseCount(item.id)" class="counter-button">-</button>
              <span class="counter">{{ items.getCounterValue(item.id) }}</span>
              <button v-on:click="items.increaseCount(item.id)" class="counter-button">+</button>
            </div>
          </div>
        </div>
        <div v-if="!items.items.length">
          <span>Ваша корзина пуста!</span>
        </div>
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ items.cartPrice }} ₽</span>
        <div class="footer-buttons">
          <button v-if="items.counter>0" class="button button-primary">Оформить заказ</button>
          <button v-on:click="hide" class="button clear-cart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script setup>
import {useCartStore} from "../../stores/cart.js";

const items = useCartStore()
let props = defineProps({
  show: Boolean
})
let emit = defineEmits(['hideCartModal'])
let hide = () => {
  emit('hideCartModal', false)
}
</script>

<style scoped>

</style>