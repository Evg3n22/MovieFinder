<!--<template>-->

<!--  <div class="carousel-container">-->
<!--    <h1>{{headline}}</h1>-->
<!--    <div class="card">-->
<!--      <Carousel-->
<!--        :value="movies"-->
<!--        :numVisible="3"-->
<!--        :numScroll="3"-->
<!--        :responsiveOptions="responsiveOptions"-->
<!--        :headline="headline"-->
<!--      >-->
<!--        <template #item="slotProps">-->
<!--          <div class="carousel-item">-->
<!--            <div class="image-container">-->
<!--              <img-->
<!--                :src="slotProps.data.poster"-->
<!--                :alt="slotProps.data.title"-->
<!--                class="movie-poster"-->
<!--              />-->
<!--              <Tag-->
<!--                :value="slotProps.data.director"-->
<!--                :severity="getSeverity(slotProps.data.inventoryStatus)"-->
<!--                class="tag"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="movie-title">{{ slotProps.data.title }}</div>-->
<!--            <div class="movie-footer">-->
<!--              <div class="movie-year">{{ slotProps.data.year }}</div>-->
<!--              <router-link-->
<!--                :to="{ name: 'info', params: { id: slotProps.data.id } }"-->
<!--                class="info-link"-->
<!--              >-->
<!--                <img src="@/assets/image/info.svg" alt="info icon" />-->
<!--              </router-link>-->
<!--            </div>-->
<!--          </div>-->
<!--        </template>-->
<!--      </Carousel>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--import Carousel from 'primevue/carousel'-->

<!--defineProps(['movies', 'headline'])-->

<!--const responsiveOptions = ref([-->
<!--  {-->
<!--    breakpoint: '1400px',-->
<!--    numVisible: 2,-->
<!--    numScroll: 1,-->
<!--  },-->
<!--  {-->
<!--    breakpoint: '1199px',-->
<!--    numVisible: 3,-->
<!--    numScroll: 1,-->
<!--  },-->
<!--  {-->
<!--    breakpoint: '767px',-->
<!--    numVisible: 2,-->
<!--    numScroll: 1,-->
<!--  },-->
<!--  {-->
<!--    breakpoint: '575px',-->
<!--    numVisible: 1,-->
<!--    numScroll: 1,-->
<!--  },-->
<!--])-->

<!--const getSeverity = (status) => {-->
<!--  switch (status) {-->
<!--    case 'INSTOCK':-->
<!--      return 'success'-->

<!--    case 'LOWSTOCK':-->
<!--      return 'warn'-->

<!--    case 'OUTOFSTOCK':-->
<!--      return 'danger'-->

<!--    default:-->
<!--      return null-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<script>-->
<!--export default {-->
<!--  name: '_Carousel',-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.carousel-container {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  height: 100vh; /* Центрування по вертикалі */-->
<!--  width: 100%; /* Центрування по ширині */-->
<!--  background-color: #f5f5f5; /* Світлий фон */-->
<!--  padding: 20px; /* Відступи */-->
<!--  box-sizing: border-box;-->
<!--}-->

<!--.card {-->
<!--  max-width: 90%; /* Збільшуємо ширину до 90% екрана */-->
<!--  width: 1200px; /* Максимальна ширина */-->
<!--  padding: 20px;-->
<!--  background: #ffffff;-->
<!--  border-radius: 10px;-->
<!--  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Додаємо м'яку тінь */-->
<!--}-->

<!--.carousel-item {-->
<!--  display: flex; /* Замість block */-->
<!--  flex-direction: column; /* Вертикальне розташування контенту */-->
<!--  justify-content: space-between; /* Розділення контенту */-->
<!--  align-items: center; /* Вирівнювання по центру */-->
<!--  border: 1px solid #ddd; /* Сірий контур */-->
<!--  border-radius: 10px; /* Закруглені краї */-->
<!--  padding: 15px; /* Внутрішні відступи */-->
<!--  text-align: center; /* Текст по центру */-->
<!--  background-color: #ffffff; /* Білий фон */-->
<!--  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Анімація */-->
<!--  width: auto; /* Автоматична ширина */-->
<!--  height: auto; /* Автоматична висота */-->
<!--  overflow: hidden; /* Усунення зайвого контенту */-->
<!--}-->

<!--.carousel-item:hover {-->
<!--  transform: translateY(-5px); /* Невеликий підйом при наведенні */-->
<!--  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);-->
<!--}-->

<!--.image-container {-->
<!--  position: relative;-->
<!--  margin-bottom: 15px;-->
<!--}-->

<!--.movie-poster {-->
<!--  width: 100%;-->
<!--  height: auto;-->
<!--  border-radius: 10px;-->
<!--  object-fit: cover;-->
<!--}-->

<!--.tag {-->
<!--  position: absolute;-->
<!--  top: 10px;-->
<!--  left: 10px;-->
<!--}-->

<!--.movie-title {-->
<!--  font-size: 1.2rem;-->
<!--  font-weight: bold;-->
<!--  color: #333;-->
<!--  margin-bottom: 10px;-->
<!--}-->

<!--.movie-footer {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  font-size: 1rem;-->
<!--  color: #555;-->
<!--}-->

<!--.movie-year {-->
<!--  font-weight: bold;-->
<!--  color: #007bff; /* Синій колір року */-->
<!--}-->

<!--.info-link img {-->
<!--  width: 24px;-->
<!--  height: 24px;-->
<!--  transition: transform 0.2s;-->
<!--}-->

<!--.info-link img:hover {-->
<!--  transform: scale(1.2); /* Збільшення значка при наведенні */-->
<!--}-->

<!--.p-carousel .p-carousel-item {-->
<!--  display: flex; /* Забезпечує вирівнювання через flexbox */-->
<!--  justify-content: center; /* Вирівнює елементи горизонтально */-->
<!--  align-items: center; /* Вирівнює елементи вертикально */-->
<!--}-->
<!--.p-carousel-content {-->
<!--  display: flex; /* Робить всі елементи flexbox */-->
<!--  justify-content: center; /* Центрує елементи горизонтально */-->
<!--  align-items: center; /* Центрує елементи вертикально */-->
<!--}-->


<!--</style>-->


<template>
  <div class="carousel-container">
    <h1 class="carousel-headline">{{ headline }}</h1>
    <div class="card">
      <Carousel
        :value="movies"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="carousel-item">
            <div class="image-container">
              <img
                :src="slotProps.data.poster"
                :alt="slotProps.data.title"
                class="movie-poster"
              />
              <Tag
                :value="slotProps.data.director"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="tag"
              />
            </div>
            <div class="movie-title">{{ slotProps.data.title }}</div>
            <div class="movie-footer">
              <div class="movie-year">{{ slotProps.data.year }}</div>
              <router-link
                :to="{ name: 'info', params: { id: slotProps.data.id } }"
                class="info-link"
              >
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

defineProps(['movies', 'headline'])

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
  flex-direction: column; /* Розташування елементів вертикально */
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  //background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}

.carousel-headline {
  font-size: 2rem; /* Розмір заголовка */
  font-weight: bold;
  color: #333; /* Колір тексту */
  text-align: center;
  margin-bottom: 20px; /* Відступ від каруселі */
}

.card {
  max-width: 90%;
  width: 1200px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carousel-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.image-container {
  position: relative;
  margin-bottom: 15px;
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.tag {
  position: absolute;
  top: 10px;
  left: 10px;
}

.movie-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.movie-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #555;
}

.movie-year {
  font-weight: bold;
  color: #007bff;
}

.info-link img {
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
}

.info-link img:hover {
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
