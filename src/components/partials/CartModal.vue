<template>
  <div v-if="props.show === true" class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button v-on:click="hide" class="close">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">1250 ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button v-on:click="hide" class="button clear-cart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script setup>
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