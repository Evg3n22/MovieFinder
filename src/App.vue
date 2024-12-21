<script setup>
import {useAdditionalFilmsStore} from '@/store.js'
const addStore = useAdditionalFilmsStore()

addStore.getAdditionalFilmsFromLocalStorage()
</script>

<template>
  <router-view />
</template>
