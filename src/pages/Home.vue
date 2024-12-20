<script>
export default {
  name: '_Home',
}
</script>

<script setup>
import { useFilmsStore } from '@/store.js'
import Modal from '@/components/Modal.vue'
const store = useFilmsStore()

store.film_search()
</script>

<template>
  <div class="container">
    <input
      type="text"
      placeholder="Enter the film name"
      @keyup.enter="store.film_search(store.filmName)"
      v-model="store.filmName"
    />
    <router-link to="/result">
      <button class="btn btn-dark " @click="store.film_search(store.filmName)">Search</button>
    </router-link>

    <Modal/>
  </div>



</template>

