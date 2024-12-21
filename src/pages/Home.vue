<script>
export default {
  name: '_Home',
}
</script>

<script setup>
import { useFilmsStore } from '@/store.js'
import Modal from '@/components/Modal.vue'
import AdditionalFilms from '@/components/AdditionalFilms.vue'
const store = useFilmsStore()

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

    <h1>Added Films</h1>
    <AdditionalFilms/>
  </div>



</template>

