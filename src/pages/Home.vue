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

function handleSearch() {
  store.film_search(store.filmName)
  router.push({ name: 'result' })
}
</script>

<template>
  <div v-if="addstore.additionalFilms.length > 0">
    <div class="container">
      <p>Welcome to MovieFinder</p>
      <div class="input-group mb-3">
        <div class="input-group-append">
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
          <button class="btn" @click="handleSearch">
            <img src="@/assets/image/search.svg" alt="search icon" />
          </button>
        </div>
      </div>
      <!--      <h1>Added Films</h1>-->
      <AdditionalFilms />
    </div>
  </div>

  <div v-else-if="addstore.additionalFilms.length === 0">
    <div class="container">
      <p>Welcome to MovieFinder</p>
      <div class="input-group mb-3">
        <div class="input-group-append">
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
          <button class="btn" @click="handleSearch">
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
  align-items: center;
  justify-content: center;
  height: 100vh;
}

p {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-group {
  max-width: 800px;
  width: 100%;
}

.condition-active {
  background-color: #f0f0f0; /* Приклад: фон змінюється при умові */
  color: #333;
}

.btn {
  border: solid 1px rgba(47, 47, 47, 0.2);
}

InputText {
  border: solid;
}
</style>
