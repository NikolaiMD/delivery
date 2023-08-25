import {ref, computed} from 'vue'
import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        counter: 0,
        cartPrice: 0,
        counters: {},
        empty: true
    }),
    getters: {
        getCounters: (state) => state.counters,
        getCounterValue: (state) => (counterName) => state.counters[counterName] || 0,
    },
    actions: {
        increaseCount(id) {
            this.counters[id] = (this.counters[id] || 0) + 1;
            this.counter++
        },
        decreaseCount(id) {
            if (this.counters[id] > 0) {
                this.counters[id]--;
            }
            if (this.counter > 0) {
                this.counter--
            }
        },
        addToCart(item) {
            const index = this.items.findIndex(obj => obj.id === item.id)
            if (index === -1) {
                this.items.push(item)
            }
            let price = item.price
            this.cartPrice += price
            price += item.price
        }
    }
});