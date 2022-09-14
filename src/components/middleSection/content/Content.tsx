import { Routes, Route } from 'react-router-dom'

import './content.scss'
import DefaultContent from './DefaultContent'
import Test1 from './Test1'
import Test2 from './Test2'

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<DefaultContent/>} />
        <Route path='/test1' element={<Test1/>} />
        <Route path='/test2' element={<Test2/>} />
      </Routes>
    </div>
  )
}

export default Content