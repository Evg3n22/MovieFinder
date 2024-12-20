<script>
export default {
  name: '_Modal',
}
</script>

<script setup>
// import { useFilmsStore } from '@/store.js'
import Dialog from 'primevue/dialog';
import { ref } from "vue";

const visible = ref(false);
// const store = useFilmsStore()
</script>

<template>
  <div>
    <div class="card flex justify-center">
      <Button class="btn btn-dark" @click="visible = true">Show</Button>
      <Dialog v-model:visible="visible" header="Add film" :style="{ width: '25rem' , marginBottom: '10px' }">
        <div class="form-group">
          <label for="titleInput">Title</label>
          <input
            type="text"
            class="form-control"
            id="titleInput"
            placeholder="Enter title of movie"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="posterInput">Poster</label>
          <input
            type="text"
            class="form-control"
            id="posterInput"
            placeholder="Enter poster link"
            v-model="poster"
          />
        </div>
        <div class="form-group">
          <label for="directorInput">Director</label>
          <input
            type="text"
            class="form-control"
            id="directorInput"
            placeholder="Enter director's name"
            v-model="director"
          />
        </div>
        <div class="form-group">
          <label for="yearInput">Year</label>
          <input
            type="text"
            class="form-control"
            id="yearInput"
            placeholder="Enter year of release"
            v-model="year"
          />
        </div>
        <button type="submit" @click="visible = false" class="btn btn-dark">Add Film</button>
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
