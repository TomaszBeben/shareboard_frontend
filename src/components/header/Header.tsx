import './header.scss'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset, logout } from '../../store/authSlice'

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //temporary any type
  const { user } = useSelector((state: any) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className='header-wrapper'>
      <div className='logo-wrapper'>
        <h1>Header</h1>
      </div>
      <div className='header-nav-wrapper'>
        {user ? (
          <>
            <button onClick={onLogout}>
              Logout
            </button>
            <button>USER</button>
          </>
        ) : (
          <>
            <Link to='login'>Login</Link>
            <Link to='register'>Register</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header