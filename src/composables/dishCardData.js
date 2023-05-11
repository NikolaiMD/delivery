import {computed} from "vue";
import {useRoute} from 'vue-router';

export default function dishCardData() {
    const route = useRoute()
    const currentRouteName = computed(() => route.path)
    const files = import.meta.glob('../db/restaurants/*.json', {
        import: 'default',
        eager: true
    })
    const dishes = []
    Object.entries(files).forEach(([key, value]) => {
        if (key.includes(`${currentRouteName.value}`)) {
            value.forEach(item => {
                dishes.push(item)
            })
        }
    });
    return {
        dishes
    }
}