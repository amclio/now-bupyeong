import axios from 'axios'

export const api = axios.create({
  baseURL: '/',
})

export const getPlace = () => api.get('/api/places').then((res) => res.data)
export const getPlaceById = (id) =>
  api.get(`/api/places/${id}`).then((res) => res.data)
