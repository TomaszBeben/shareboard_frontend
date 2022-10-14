import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset, TuserData } from '../../store/authSlice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { AppDispatch } from '../../store/store'

const Login = () => {

  type Tcredentials = {
    email: string,
    password: string,
  }

  const [formData, setFormData] = useState<Tcredentials>({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: TinitialState) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  //loading screen if 'loading'
  if (isLoading) {
    return (
      <h1>LOADING...</h1>
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Please login to your account</p>

      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              id='email'
              name='email'
              placeholder='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              id='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <button type='submit'>LogIn</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login