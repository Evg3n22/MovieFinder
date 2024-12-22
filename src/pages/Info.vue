<!--<template>-->
<!--  <div class="container d-flex flex-column align-items-center">-->
<!--    <div class="card" style="width: 18rem;">-->
<!--      <img :src="film.poster" class="card-img-top" alt="poster">-->
<!--      <div class="card-body">-->
<!--        <h5 class="card-title mb-3">{{ film.title }}</h5>-->
<!--        <p class="card-text mb-1"><b>Director:</b> {{film.director}}</p>-->
<!--        <p class="card-text"><b>Year:</b>{{film.year}}</p>-->
<!--        <a @click.prevent="$router.go(-1)" href="#" class="btn btn-primary">Go back</a>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: '_Info',-->
<!--  data() {-->
<!--    return {-->
<!--      filmId: this.$route.params.id,-->
<!--      film: {},-->
<!--    }-->
<!--  },-->
<!--  props: {-->
<!--    getFilms: function () {}-->
<!--  },-->
<!--  methods: {-->
<!--    GetFilms(){-->
<!--      this.films = JSON.parse(localStorage.getItem('films') ?? '[]')-->
<!--      this.film = this.films.find((item) => item.id.toString() === this.filmId)-->

<!--      if(this.film === undefined){-->
<!--        this.films = JSON.parse(localStorage.getItem('additionalFilms') ?? '[]')-->
<!--        this.film = this.films.find((item) => item.id.toString() === this.filmId)-->
<!--      }-->

<!--    },-->
<!--  },-->
<!--  beforeMount() {-->
<!--    this.GetFilms()-->
<!--  },-->
<!--}-->
<!--</script>-->

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card film-card">
      <img :src="film.poster" class="card-img-top" alt="poster">
      <div class="card-body">
        <h5 class="card-title mb-3">{{ film.title }}</h5>
        <p class="card-text mb-2"><b>Director:</b> {{ film.director }}</p>
        <p class="card-text mb-3"><b>Year:</b> {{ film.year }}</p>
        <a @click.prevent="$router.go(-1)" href="#" class="btn btn-primary go-back-btn">Go back</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '_Info',
  data() {
    return {
      filmId: this.$route.params.id,
      film: {},
    }
  },
  props: {
    getFilms: function () {}
  },
  methods: {
    GetFilms() {
      this.films = JSON.parse(localStorage.getItem('films') ?? '[]')
      this.film = this.films.find((item) => item.id.toString() === this.filmId)

      if (this.film === undefined) {
        this.films = JSON.parse(localStorage.getItem('additionalFilms') ?? '[]')
        this.film = this.films.find((item) => item.id.toString() === this.filmId)
      }
    },
  },
  beforeMount() {
    this.GetFilms()
  },
}
</script>

<style scoped>
.container {
  height: 100vh; /* Робить контейнер висотою на весь екран */
  //background-color: #f8f9fa; /* Світло-сірий фон */
  display: flex;
}

.film-card {
  width: 30rem; /* Збільшена ширина картки */
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Інтенсивніший тіньовий ефект */
  border-radius: 10px; /* Закруглені кути */
  background-color: #ffffff; /* Білий фон картки */
}

.card-img-top {
  border-radius: 10px; /* Закруглені кути для зображення */
  margin-bottom: 15px;
}

.card-title {
  font-size: 2rem; /* Збільшений розмір тексту заголовка */
  font-weight: bold;
  text-align: center;
}

.card-text {
  font-size: 1.1rem; /* Збільшений текст опису */
  color: #6c757d;
}

.go-back-btn {
  display: block;
  margin: 20px auto 0; /* Центрування кнопки */
  background-color: #007bff;
  border: none;
  padding: 15px 30px; /* Збільшений розмір кнопки */
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
}

.go-back-btn:hover {
  background-color: #0056b3;
  color: #ffffff;
}
</style>
