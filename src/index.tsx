import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/*' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);