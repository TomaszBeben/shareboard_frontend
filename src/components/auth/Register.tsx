import { AnyAction, Dispatch} from '@reduxjs/toolkit'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset, TuserData } from '../../store/authSlice'
import { AppDispatch } from '../../store/store'

const Register = () => {

  type Tcredentials = {
    name: string,
    email: string,
    password: string,
    password2: string,
  }

  const [formData, setFormData] = useState<Tcredentials>({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: TinitialState) => state.auth
  )

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

    if(isSuccess || user) {
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

    if (password !== password2) {
      console.log('Password do not match')
    }else{
      const userData: TuserData = {
        name, email, password
      }

      dispatch(register(userData))
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <p>Please create an account</p>

      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              id='name'
              name='name'
              placeholder='name'
              value={name}
              onChange={onChange}
            />
          </div>
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
            <input
              type="text"
              id='password2'
              name='password2'
              placeholder='confirm password'
              value={password2}
              onChange={onChange}
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register