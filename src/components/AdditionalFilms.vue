<script>
export default {
  name: 'AdditionalFilms',

}
</script>

<script setup>
import Carousel from '@/components/Carousel.vue'
import {useAdditionalFilmsStore} from '@/store.js'
const addstore = useAdditionalFilmsStore()

</script>

<template>

  <Carousel :movies="addstore.additionalFilms" headline="Added films"/>

</template>
