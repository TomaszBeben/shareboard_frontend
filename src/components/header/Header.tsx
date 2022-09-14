import './header.scss'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='logo-wrapper'>
        <h1>Header</h1>
      </div>
      <div className='header-nav-wrapper'>
        <Link to='login'>Login</Link>
        <Link to='register'>Register</Link>
        <button>USER</button>
      </div>
    </div>
  )
}

export default Header