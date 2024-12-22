<script>
import Carousel from '@/components/Carousel.vue'
export default {
  name: '_Result',
  components: { Carousel },
}
</script>

<script setup>
import {useFilmsStore} from '@/store.js'
import { onMounted} from 'vue'

const store = useFilmsStore()
onMounted(() => {
  store.getFilmsFromLocalStorage()
})
</script>

<template>
  <Carousel :movies="store.films" headline="Here are the movies we found for you" />
</template>

<style scoped></style>
