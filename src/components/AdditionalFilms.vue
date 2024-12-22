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
<!--  Passing data to the carousel component-->
  <Carousel :movies="addstore.additionalFilms" headline="Added films"/>

</template>
