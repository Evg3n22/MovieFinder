<template>
  <div class="card">
    <Carousel
      :value="movies"
      :numVisible="4"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.poster"
                :alt="slotProps.data.title"
                class="w-full rounded"
              />
              <Tag
                :value="slotProps.data.director"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.title }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">{{ slotProps.data.year }}</div>
            <router-link :to="{ name: 'info', params: { id: slotProps.data.id } }">
              <img src="@/assets/image/info.svg" alt="info icon" />
            </router-link>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'

defineProps(['movies'])

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
])

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warn'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}
</script>

<script>
export default {
  name: '_Carousel',
}
</script>
