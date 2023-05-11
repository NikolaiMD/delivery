import {computed} from "vue";
import {useRoute} from 'vue-router';
import restaurantsData from "../db/db.json"

export default function headerData() {
    const route = useRoute()
    const currentRouteName = computed(() => route.path)
    const info = []
    const translitNames = {
        'food-band': 'FoodBand',
        'gusi-lebedi': 'Гуси Лебеди',
        'palki-skalki': 'Палки скалки',
        'pizza-burger': 'PizzaBurger',
        'pizza-plus': 'Пицца Плюс',
        'tanuki': 'Тануки',
    }
    const partners = restaurantsData.db.partners
    Object.entries(translitNames).forEach(([key, value]) => {
        if (currentRouteName.value.includes(`${key}`)) {
            partners.forEach(item => {
                if (value === item.name) {
                    info.push(item)
                }
            })
        }
    });
    return {
        info
    }
}

