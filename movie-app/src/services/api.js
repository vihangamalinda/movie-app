const API_KEY="4a67aa7580343149c1981977a80f20c7"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data= await response.json()
    return data.results
}

export const searchMovies = async (name) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(name)}`)
    const data = await response.json()
    return data.results
}