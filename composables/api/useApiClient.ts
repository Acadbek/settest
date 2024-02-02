import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BACKEND

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

const clearCookie = () => {
  app
}

const errorStatus = {
  400: function () {
    alert('400 error from API, handle in apiClient.js')
  },
  401: function () {
    alert('401 error from API, handle in apiClient.js')
  }
}
