<script>
export default {
  name: '_Modal',
}
</script>

<script setup>
import { useAdditionalFilmsStore } from '@/store.js'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'

const visible = ref(false)
const addStore = useAdditionalFilmsStore()
</script>

<template>
  <div>
    <div class="card flex justify-center">
      <button class="btn btn-dark" @click="visible = true">Show</button>
      <Dialog
        v-model:visible="visible"
        header="Add film"
        :style="{ width: '25rem', marginBottom: '10px' }"
      >
        <div class="form-group">
          <label for="titleInput">Title</label>
          <input
            type="text"
            class="form-control"
            id="titleInput"
            placeholder="Enter title of movie"
            v-model="addStore.additionalFilms.title"
          />
        </div>
        <div class="form-group">
          <label for="posterInput">Poster</label>
          <input
            type="text"
            class="form-control"
            id="posterInput"
            placeholder="Enter poster link"
            v-model="addStore.additionalFilms.poster"
          />
        </div>
        <div class="form-group">
          <label for="directorInput">Director</label>
          <input
            type="text"
            class="form-control"
            id="directorInput"
            placeholder="Enter director's name"
            v-model="addStore.additionalFilms.director"
          />
        </div>
        <div class="form-group">
          <label for="yearInput">Year</label>
          <input
            type="text"
            class="form-control"
            id="yearInput"
            placeholder="Enter year of release"
            v-model="addStore.additionalFilms.year"
          />
          <!--            @input="$event.target.value"-->
        </div>
        <button
          type="submit"
          @click="
            ((visible = false),
            addStore.addFilm(
              addStore.additionalFilms.title,
              addStore.additionalFilms.year,
              addStore.additionalFilms.poster,
              addStore.additionalFilms.director,
            ))
          "
          class="btn btn-dark"
        >
          Add Film
        </button>
        <div class="flex justify-end gap-2"></div>
      </Dialog>
    </div>
  </div>
</template>

<style>
.form-group {
  margin-bottom: 10px;
}
</style>
