import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Test1 from './components/middleSection/content/Test1'
import Test2 from './components/middleSection/content/Test2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/*' element={<App />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  </BrowserRouter>
);