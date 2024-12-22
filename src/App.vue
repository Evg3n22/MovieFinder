<script setup>
import { useAdditionalFilmsStore } from '@/store.js'

const addStore = useAdditionalFilmsStore()

// I retrieve data from local storage so that when the page reloads, the data is saved on the page
addStore.getAdditionalFilmsFromLocalStorage()
</script>

<template>
  <!--  Connecting the router-->
  <router-view />
</template>
