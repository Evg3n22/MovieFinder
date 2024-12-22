<template>
  <div class="carousel-container">
    <!--  Transmitted carousel title  -->
    <h1 class="carousel-headline">{{ headline }}</h1>
    <div class="card">
      <!--      I receive movies from props also set visible and scroll parameters-->
      <Carousel
        :value="movies"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="carousel-item">
            <div class="image-container">
              <!--  Picture for the poster    -->
              <img :src="slotProps.data.poster" :alt="slotProps.data.title" class="movie-poster" />
              <!--              tag is responsible for the movement of objects in the carousel-->
              <Tag
                :value="slotProps.data.director"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="tag"
              />
            </div>
            <!--          Movie title  -->
            <div class="movie-title">{{ slotProps.data.title }}</div>
            <div class="movie-footer">
              <!--        Year of release of the movie-->
              <div class="movie-year">{{ slotProps.data.year }}</div>
              <!--              Transmitting data via router-->
              <router-link
                :to="{ name: 'info', params: { id: slotProps.data.id } }"
                class="info-link"
              >
                <!--      info icon          -->
                <img src="@/assets/image/info.svg" alt="info icon" />
              </router-link>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'

defineProps(['movies', 'headline']) //I get props

// Setting restrictions for different device extensions
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
    breakpoint: '780px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
])

// A function that receives states
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

<style scoped>
.carousel-container {
  display: flex;
  flex-direction: column; /* Arrangement of elements vertically */
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.carousel-headline {
  font-size: 2rem; /* Header size */
  font-weight: bold;
  color: #333; /* Text color */
  text-align: center;
  margin-bottom: 20px; /* Retreat from the carousel */
}

.card {
  max-width: 90%;
  width: 1200px;
  padding: 20px; /*Setting the standard width*/
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Setting a shodow */
}

.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* I put objects in the center */
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #ffffff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* set animation */
}

.carousel-item:hover {
  /* animate hover */
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.image-container {
  position: relative;
  margin-bottom: 15px; /* I set an indent from the picture */
}

.movie-poster {
  width: 100%; /* Set picture size */
  height: auto;
  border-radius: 10px; /* Rounding up the picture */
  object-fit: cover;
}

.tag {
  position: absolute;
  top: 10px; /* I changed position a little bit */
  left: 10px;
}

.movie-title {
  font-size: 1.2rem; /* Set color and size of movie-title */
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.movie-footer {
  display: flex;
  justify-content: space-between; /* Set items space-between */
  align-items: center;
  font-size: 1rem;
  color: #555; /* Set color on footer of card */
}

.movie-year {
  font-weight: bold;
  color: #007bff; /* Set color of year */
}

.info-link img {
  width: 24px;
  height: 24px; /* set icon size */
  transition: transform 0.2s; /* set animation */
}

.info-link img:hover {
  /* animate hover */
  transform: scale(1.2);
}

.p-carousel .p-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.p-carousel-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
