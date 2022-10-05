import './content.scss'

const fakeinfo = [
  {
    info1: 'ofienfowine',
    info2: 'deijubf',
    info3: 'mdpoefop',
  },
  {
    info1: 'ofienfowine',
    info2: 'deijubf',
    info3: 'mdpoefop',
  },
  {
    info1: 'ofienfowine',
    info2: 'deijubf',
    info3: 'mdpoefop',
  },
]

const Test1 = () => {
  return (
    <div className='content-grid-container'>
      {fakeinfo.map((info, index) => {
        return (

          <div key={index} className='content-grid-item'>
            <p>{info.info1}</p>
            <p>{info.info2}</p>
            <p>{info.info3}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Test1