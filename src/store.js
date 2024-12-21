import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('films', {
  state: () => ({
    url: 'http://www.omdbapi.com/?apikey=895736cc&',
    films: [],
    filmName: null,
    img_not_found: new URL('@/assets/image/img_not_found.jpg', import.meta.url).href,
  }),
  actions: {

    getFilmsFromLocalStorage () {
      const storedFilms = localStorage.getItem('films')
      if (storedFilms) {
        this.films = JSON.parse(storedFilms)
      }
    },
    film_search(filmName) {
      fetch(`${this.url}s=${filmName}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            // Для кожного знайденого фільму робимо запит за деталями
            const filmDetailsPromises = data.Search.map((film) =>
              fetch(`${this.url}i=${film.imdbID}`)
                .then((res) => res.json())
                .then((filmDetails) => {
                  // Якщо постера немає, використовуємо стандартний
                  if (filmDetails.Poster === 'N/A') {
                    filmDetails.Poster = this.img_not_found
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

            // Чекаємо завершення всіх запитів
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
      this.film = {
        title: title,
        year: year,
        poster: poster,
        director: director,
        id: +new Date(),
      }
      this.additionalFilms = JSON.parse(localStorage.getItem('additionalFilms')) || []
      this.additionalFilms.push(this.film)

      localStorage.setItem('additionalFilms', JSON.stringify(this.additionalFilms))
    },

    getAdditionalFilmsFromLocalStorage() {
      const storedAdditionalFilms = localStorage.getItem('additionalFilms')
      if (storedAdditionalFilms) {
        this.additionalFilms = JSON.parse(storedAdditionalFilms)
      }
    },




  },
})
