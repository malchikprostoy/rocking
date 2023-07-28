import React from 'react'
import './index.scss'
import why1 from '../../../assets/img/1.png'
import why2 from '../../../assets/img/2.png'
import why3 from '../../../assets/img/3.png'
import why4 from '../../../assets/img/4.png'

const Why = () => {
  return (
    <div className='why'>
        <h1>Почему мы?</h1>
        <span>У нас вы сможете:</span>
        <div className='why__items'>
            <div className='why__item'>
                <img src={why1} alt=''/>
                <div className='item__text'>
                    <span>Английский с нуля</span>
                    <p>У нас вы сможете изучить англ с нуля до TOEFL</p>
                </div>
            </div>
            <div className='why__item'>
                <img src={why2} alt=''/>
                <div className='item__text'>
                    <span>Подготовка </span>
                    <p>Вы сможете подготовиться к ОРТ, НЦТ и гос.экзаменам</p>
                </div>
            </div>
            <div className='why__item'>
                <img src={why3} alt=''/>
                <div className='item__text'>
                    <span>Успеваемость</span>
                    <p>Вы сможете подтянуть успеваемость по всем школьным предметам</p>
                </div>    
            </div>
            <div className='why__item'>
                <img src={why4} alt=''/>
                <div className='item__text'>
                    <span>Д/З</span>
                    <p>Сможете выполнять домашние задания на продленке</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why