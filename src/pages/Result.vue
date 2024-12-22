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
// I retrieve data from local storage so that when the page reloads, the data is saved on the page
onMounted(() => {
  store.getFilmsFromLocalStorage()
})
</script>

<template>
  <!--  Passing data to the carousel component-->
  <Carousel :movies="store.films" headline="Here are the movies we found for you" />
</template>

<style scoped></style>
