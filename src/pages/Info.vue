<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="card" style="width: 18rem;">
      <img :src="film.poster" class="card-img-top" alt="poster">
      <div class="card-body">
        <h5 class="card-title mb-3">{{ film.title }}</h5>
        <p class="card-text mb-1"><b>Director:</b> {{film.director}}</p>
        <p class="card-text"><b>Year:</b>{{film.year}}</p>
        <a @click.prevent="$router.go(-1)" href="#" class="btn btn-primary">Go back</a>
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
    GetFilms(){
      this.films = JSON.parse(localStorage.getItem('films') ?? '[]')
      this.film = this.films.find((item) => item.id.toString() === this.filmId)

      if(this.film === undefined){
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
