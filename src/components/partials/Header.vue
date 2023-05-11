<template>
  <div class="container">
    <header class="header">
      <RouterLink to="/" class="logo">
        <img src="../../assets/img/icon/logo.svg" alt="Logo"/>
      </RouterLink>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки"/>
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button @click="showAccessModal = !showAccessModal" class="button button-primary button-auth">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button @click="showCartModal = !showCartModal" class="button button-cart" id="cart-button">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
  <CartModal :show="showCartModal" @hideCartModal="hide"></CartModal>
  <AccessModal :show="showAccessModal" @hideAccessModal="hide"></AccessModal>
</template>

<script setup>
import {ref} from "vue"

let showCartModal = ref(false)
let showAccessModal = ref(false)

let hide = (childData) => {
  showCartModal.value = childData
  showAccessModal.value = childData
}
</script>

<style scoped>

</style>