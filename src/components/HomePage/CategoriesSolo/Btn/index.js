import * as React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Btn = () => {
  return (
    <div className='btn'>
        <Link to={'/morePage'}><button>Узнать подробнее</button></Link>
    </div>
  )
}

export default Btn