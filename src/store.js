import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('films', {
  state: () => ({
    url: 'http://www.omdbapi.com/?apikey=895736cc&',
    films: [],
    filmName: ''
  }),

  actions: {
    updateFilmName(name) {
      this.filmName = name
    },

    // getFilmsFromLocalStorage() {
    //   return localStorage.getItem('films')
    // },
    film_search(filmName) {
      fetch(`${this.url}s=${filmName}`)
        .then((res) => res.json()) // метод .json() парсить відповідь JSON у літерал об’єкта JS
        .then((data) => {
          if (data.Search) {
            // Для кожного знайденого фільму робимо запит за деталями
            const filmDetailsPromises = data.Search.map((film) =>
              fetch(`${this.url}i=${film.imdbID}`).then((res) => res.json())
            )

            // Чекаємо завершення всіх запитів
            Promise.all(filmDetailsPromises).then((filmDetails) => {
              // Зберігаємо фільми з додатковими деталями
              this.films = filmDetails.map((film) => ({
                title: film.Title,
                year: film.Year,
                poster: film.Poster,
                director: film.Director,
                id: film.imdbID
              }))
              // Зберігаємо результати в localStorage
              localStorage.setItem('films', JSON.stringify(this.films))
            })
          } else {
            console.error('Фільми не знайдено:', data.Error)
            this.films = []
          }
        })
    }
  }
})
