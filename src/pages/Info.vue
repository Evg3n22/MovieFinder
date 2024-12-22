<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card film-card">
      <!--  Picture for the poster    -->
      <img :src="film.poster" class="card-img-top" alt="poster" />
      <div class="card-body">
        <!--   Movie title.     -->
        <h5 class="card-title mb-3">{{ film.title }}</h5>
        <!--        Film director-->
        <p class="card-text mb-2"><b>Director:</b> {{ film.director }}</p>
        <!--        Year of release of the movie-->
        <p class="card-text mb-3"><b>Year:</b> {{ film.year }}</p>
        <!--        Link to the previous page (result)-->
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
      filmId: this.$route.params.id, // I receive the id (which was transmitted via the router)
      film: {},
    }
  },
  methods: {
    GetFilms() {
      // Get movies from local storage
      this.films = JSON.parse(localStorage.getItem('films') ?? '[]')
      this.film = this.films.find((item) => item.id.toString() === this.filmId) //Searching for a movie by id

      if (this.film === undefined) {
        // Check if the movies are in additional local storage
        this.films = JSON.parse(localStorage.getItem('additionalFilms') ?? '[]')
        this.film = this.films.find((item) => item.id.toString() === this.filmId) //Searching for a movie by id
      }
    },
  },
  beforeMount() {
    // Calling the method with a life hook
    this.GetFilms()
  },
}
</script>

<style scoped>
.container {
  height: 100vh; /* Makes the container full screen high */
  display: flex;
}

.film-card {
  width: 30rem; /* Increased card width */
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* More intense shadow effect */
  border-radius: 10px; /* Rounded corners */
  background-color: #ffffff; /* White card background */
}

.card-img-top {
  border-radius: 10px; /* Rounded corners for the image */
  margin-bottom: 15px;
}

.card-title {
  font-size: 2rem; /* Increased header text size */
  font-weight: bold;
  text-align: center;
}

.card-text {
  font-size: 1.1rem; /* Increased description text */
  color: #6c757d;
}

.go-back-btn {
  display: block;
  margin: 20px auto 0; /* Centering the button */
  background-color: #007bff;
  border: none;
  padding: 15px 30px; /* Increased button size */
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
