<script>
export default {
  name: '_Home',
}
</script>

<script setup>
import { useFilmsStore, useAdditionalFilmsStore } from '@/store.js'
import { useRouter } from 'vue-router'
import Modal from '@/components/Modal.vue'
import AdditionalFilms from '@/components/AdditionalFilms.vue'
import InputText from 'primevue/inputtext'

const addstore = useAdditionalFilmsStore()
const store = useFilmsStore()
const router = useRouter()

// Contain two functions search and router
function handleSearch() {
  store.film_search(store.filmName)
  router.push({ name: 'result' })
}
</script>

<template>
  <!--  A condition that checks if there are any movies added  -->
  <div v-if="addstore.additionalFilms.length > 0">
    <div class="container">
      <p>Welcome to MovieFinder</p>
      <div class="input-group mb-3">
        <div class="input-group-append">
          <!--    Component that adds a button (add movie) and a pop-up window      -->
          <Modal />
        </div>
        <InputText
          type="text"
          class="form-control"
          placeholder="Enter film title ... "
          aria-label="Enter film title"
          aria-describedby="basic-addon2"
          @keyup.enter="handleSearch"
          v-model="store.filmName"
          variant="filled"
        />
        <div class="input-group-append">
          <!--    Search button      -->
          <button class="btn btn-common" @click="handleSearch">
            <img src="@/assets/image/search.svg" alt="search icon" />
          </button>
        </div>
      </div>
      <!--  Slider that shows added movies    -->
      <AdditionalFilms />
    </div>
  </div>

  <!-- Condition when there are no movies added -->
  <div v-else-if="addstore.additionalFilms.length === 0">
    <div class="container">
      <p>Welcome to MovieFinder</p>
      <div class="input-group mb-3">
        <div class="input-group-append">
          <!--    Component that adds a button (add movie) and a pop-up window      -->
          <Modal />
        </div>
        <InputText
          type="text"
          class="form-control"
          placeholder="Enter film title ... "
          aria-label="Enter film title"
          aria-describedby="basic-addon2"
          @keyup.enter="handleSearch"
          v-model="store.filmName"
          variant="filled"
        />
        <div class="input-group-append">
          <!--    Search button      -->
          <button class="btn btn-common" @click="handleSearch">
            <img src="@/assets/image/search.svg" alt="search icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Aligns elements in the center */
  justify-content: center;
  height: 100vh; /* Makes the container full screen high */
}

p {
  font-size: 2rem; /* Increase the font size */
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px; /* Indentation from the top edge of the screen */
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-group {
  max-width: 800px; /* Setting search restrictions by width */
  width: 100%;
}

.btn-common {
  display: flex;
  align-items: center; /* I show the elements in the center */
  justify-content: center;
  padding: 10px 20px; /* Stretch the button to the height of the input */
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  border: solid 1px rgba(47, 47, 47, 0.3);
  border-radius: 5px;
  cursor: pointer; /* Change the cursor to 'press' */
  transition: background-color 0.3s;
}

.btn-common img {
  width: 24px;
  height: 24px; /* Set the height and width of the image */
}

.btn-common:hover {
  background-color: rgba(47, 47, 47, 0.3); /* When hovering, I change the color to gray */
}
</style>
