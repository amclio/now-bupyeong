import axios from 'axios'

export const api = axios.create({
  baseURL: '/',
})

export const getPlace = () => api.get('/api/place').then((res) => res.data)
export const getPlaceById = (id) =>
  api.get('/api/place', { params: { id } }).then((res) => res.data)
