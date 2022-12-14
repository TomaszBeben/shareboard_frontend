import axios from 'axios'

const API_URL = '/api/users/'

//Register user
const register = async(userData: any) => {
  const response = await axios.post(API_URL, userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//login user
const login = async(userData: any) => {
  const response = await axios.post(API_URL + 'login', userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

//logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authFetch = {
  register,
  logout,
  login,
}

export default authFetch

