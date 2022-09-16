import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
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