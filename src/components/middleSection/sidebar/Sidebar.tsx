import { Link } from 'react-router-dom'

import './sidebar.scss'

const fakeTab = [
  {
    name: 'test1',
    link:  'test1'
  },
  {
    name: 'test2',
    link: 'test2'
  }
]

const Sidebar = () => {

  return (
    <div className='sidebar'>
      {
        fakeTab.map(e => {
          return (
            <div key={e.link}>
              <Link to={e.link}>
              {e.name}
            </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Sidebar