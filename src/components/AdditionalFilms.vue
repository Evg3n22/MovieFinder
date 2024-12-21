<script>
export default {
  name: 'AdditionalFilms',

}
</script>

<script setup>
import { useAdditionalFilmsStore } from '@/store.js'
const store = useAdditionalFilmsStore()

</script>

<template>
  <div>{{ store.additionalFilms }}</div>
</template>
