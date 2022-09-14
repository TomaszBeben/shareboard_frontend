import { useState, useEffect } from 'react'

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
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
          <div style={{border: '1px solid red', display: 'flex', justifyContent:'center'}}>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register