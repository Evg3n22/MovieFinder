import { defineStore } from 'pinia'
import imgNotFound from '@/assets/image/img_not_found.jpg'; // Set default img
//Main store with films we search for
export const useFilmsStore = defineStore('films', {
  state: () => ({
    url: 'http://www.omdbapi.com/?apikey=895736cc&',
    films: [],
    filmName: '',
  }),
  actions: {
    getFilmsFromLocalStorage () {
      const storedFilms = localStorage.getItem('films')
      if (storedFilms) {
        this.films = JSON.parse(storedFilms)
      }
    },
    // Main function witch get film from https://www.omdbapi.com/)
    film_search(filmName) {
      fetch(`${this.url}s=${filmName}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            // For each movie we find, we make a request for details
            const filmDetailsPromises = data.Search.map((film) =>
              fetch(`${this.url}i=${film.imdbID}`)
                .then((res) => res.json())
                .then((filmDetails) => {
                  // If there is no poster, we use a default one
                  if (filmDetails.Poster === 'N/A') {
                    filmDetails.Poster = imgNotFound
                  }
                  return {
                    title: filmDetails.Title,
                    year: filmDetails.Year,
                    poster: filmDetails.Poster,
                    director: filmDetails.Director,
                    id: filmDetails.imdbID,
                  }
                }),
            )

            // We are waiting for the completion of all requests
            Promise.all(filmDetailsPromises).then((filmDetails) => {
              this.films = filmDetails // Зберігаємо дані у стан
              // Зберігаємо результати в localStorage
              localStorage.setItem('films', JSON.stringify(this.films))
            })
          } else {
            console.error('Фільми не знайдено:', data.Error)
            this.films = []
          }
        })
        .catch((error) => {
          console.error('Помилка в запиті:', error)
        })
    },
  },
})

//Store witch contain added films and methods
export const useAdditionalFilmsStore = defineStore('additionalFilms', {
  state: () => ({
    additionalFilms: [],
    film: {
      title: '',
      year: '',
      poster: '',
      director: '',
      id: '',
    },
  }),
  actions: {
    addFilm(title, year, poster, director) {

      const defaultPoster = imgNotFound;
      if(poster === undefined){
        poster = defaultPoster
      }

      this.film = {
        title: title,
        year: year,
        poster: poster,
        director: director,
        id: +new Date(),
      }
      // Get all additional films from local storage
      this.additionalFilms = JSON.parse(localStorage.getItem('additionalFilms')) || []
      this.additionalFilms.push(this.film)
      //Put film into local storage
      localStorage.setItem('additionalFilms', JSON.stringify(this.additionalFilms))
    },

    //The method by which we get movies from local storage
    getAdditionalFilmsFromLocalStorage() {
      const storedAdditionalFilms = localStorage.getItem('additionalFilms')
      if (storedAdditionalFilms) {
        this.additionalFilms = JSON.parse(storedAdditionalFilms)
      }
    },
  },
})
