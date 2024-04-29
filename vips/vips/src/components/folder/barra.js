
import '../folder/barra.css'

import React from 'react'

const Barra = ({nametitle,icon}) => {
  return (
    <div className='barra'>
        <p>{nametitle}</p>
        {icon}='<icon/>'
    </div>
  )
}

export default Barra
