<template>
  <div class="card flex flex-col items-center gap-6">
    <!-- Button to get a photo from device   -->
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
</template>

<script setup>
import { ref } from 'vue'

const src = ref(null)

// Photo selection
function onFileSelect(event) {
  const file = event.files[0]
  const reader = new FileReader()

  reader.onload = async (e) => {
    src.value = e.target.result
    //  When selecting a picture, I pass to the variable
  }

  reader.readAsDataURL(file)
}
</script>
