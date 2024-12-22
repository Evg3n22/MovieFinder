<script>
export default {
  name: '_Modal',
}
</script>

<script setup>
import { useAdditionalFilmsStore } from '@/store.js'
import Dialog from 'primevue/dialog'
import FileUpload from 'primevue/fileupload'
import { ref } from 'vue'

const src = ref(null)

function onFileSelect(event) {
  const file = event.files[0]
  const reader = new FileReader()

  reader.onload = async (e) => {
    src.value = e.target.result
    // Transferring the image to the storage
    addStore.additionalFilms.poster = src.value
  }

  reader.readAsDataURL(file)
}

const visible = ref(false)
const addStore = useAdditionalFilmsStore()
</script>

<template>
  <!--  Add movie button-->
  <button class="btn-common" @click="visible = true">
    <img src="@/assets/image/add_circle.svg" alt="add circle icon" />
  </button>
  <!--  Passes the visible value and-->
  <Dialog
    v-model:visible="visible"
    header="Add film"
    :style="{ width: '25rem', marginBottom: '10px' }"
  >
    <div class="form-group">
      <!--     Input movie title      -->
      <label for="titleInput">Title</label>
      <input
        type="text"
        class="form-control"
        id="titleInput"
        placeholder="Enter title of movie"
        v-model="addStore.additionalFilms.title"
      />
    </div>
    <!--     Input movie director      -->
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
    <!--    Enter the year of the movie's release  -->
    <div class="form-group">
      <label for="yearInput">Year</label>
      <input
        type="text"
        class="form-control"
        id="yearInput"
        placeholder="Enter year of release"
        v-model="addStore.additionalFilms.year"
      />
    </div>

    <!--    Enter a photo from your device-->
    Choose photo
    <div class="card flex flex-col items-center gap-6 form-group">
      <FileUpload
        mode="basic"
        @select="onFileSelect"
        customUpload
        auto
        severity="secondary"
        class="p-button-outlined"
      />
      <img
        v-if="src"
        :src="src"
        alt="Image"
        class="shadow-md rounded-xl w-full sm:w-64"
        style="filter: grayscale(100%)"
      />
    </div>

    <!--    Sending data to the storage-->
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
</template>

<style>
.form-group {
  margin-bottom: 10px;
}

.btn-common {
  display: flex;
  align-items: center; /* I show the elements in the center */
  justify-content: center;
  padding: 10px 20px; /* Stretch the button to the height of the input */
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #ffffff;
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
