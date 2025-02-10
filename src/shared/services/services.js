import { api } from "./api/axios"

class Services {
  
async getGenres() {
    try {
      const response = await api.get('/genres')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async getMovies(filters) {
    try {
      const response = await api.post('/sortMovies', filters)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async setMovies(id, status) {
    try {
        const movie_tmdb_id = id
      const response = await api.post(`/movies/${movie_tmdb_id}/${status}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  async getMoviesList() {
    try {
      const response = await api.get('/movies')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

}

export default new Services()