import './sidebar.scss'

const fakeTab: string[] = ['1','2','3']

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {
        fakeTab.map(e => {
          return (
            <div>{e}</div>
          )
        })
      }
    </div>
  )
}

export default Sidebar