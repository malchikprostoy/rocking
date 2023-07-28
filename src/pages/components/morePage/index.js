import React from 'react'
import './index.scss'
import UserHeader from '../userHeader/index'
import Footer from '../../../components/Footer'
import rep from '../../../assets/img/rep.png'
import {CiYoutube} from 'react-icons/ci'
import { TiClipboard, TiDocumentText } from 'react-icons/ti'
import { CgInfinity } from 'react-icons/cg'
import { PiCertificate } from 'react-icons/pi'
import { GoPerson } from 'react-icons/go'

const MorePage = () => {
  return (
    <div className='more' data-aos="fade-down-right">
      <UserHeader/>
      <div className='reg container'>
        <h1>Онлайн репетитор по математике по 1 - 9 класс, подготовка к НЦТ и ОРТ</h1>
        <span>Курс "Онлайн репетитор по математике" представляет собой комплексное обучениематематике для учащихся 1-9 классов с акцентом на подготовку к национальным централизованным тестированиям (НЦТ) и обязательным региональным тестированиям (ОРТ).
        </span>
        <div className='reg__add'>
          <button>Стать учеником</button>
          <span><GoPerson size={24} style={{margin: "0 8px 0"}}/>12 576  студентов уже проходят курс</span>
          <div className='price'>
            <span>1000₽</span>
            <p>1500₽</p>
          </div>
        </div>
      </div>
      <div className='info container'>
        <div className='info__text'>
          <h1>О курсе</h1>
          <span>Курс "Онлайн репетитор по математике" представляет собой высококачественное и эффективное обучение математике для учащихся 1-9 классов с акцентом на подготовку к национальным централизованным тестированиям (НЦТ) и обязательным региональным тестированиям (ОРТ). Этот курс предоставляет уникальную возможность ученикам улучшить свои знания и навыки в математике, развить аналитическое мышление и успешно справиться с экзаменами.</span>
        </div>
        <div className='info__kurs'>
          <div className='info__kurs-top'>
            <h1>Этот курс содержит:</h1>
            <div className='item'>
              <CiYoutube size={24}/>
              <span>10-15 видео уроков</span>
            </div>
            <div className='item'>
              <TiClipboard size={24}/>
              <span>25 тестов </span>
            </div>
            <div className='item'>
              <TiDocumentText size={24}/>
              <span>50-100 страниц</span>
            </div>
            <div className='item'>
              <CgInfinity size={24}/>
              <span>пожизненный доступ к материалам</span>
            </div>
            <div className='item'>
              <PiCertificate size={24}/>
              <span>сертификат об окончании</span>
            </div>
          </div>
          <div className='info__kurs-bottom'>
            <div className='top'>
              <img src={rep} alt=''/>
              <div className='rep'>
                <span>Максим</span>
                <p>Профессионал</p>
              </div>
            </div>
            <div className='bottom'>
              <div className='items'>
                <span>Репутация</span>
                <p className='span'>5.0</p>
              </div>
              <div className='items'>
                <span>Опыт работы</span>
                <p className='p'>5 лет</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='otziv'>
        
      </div>
      <Footer/>
    </div>
    
  )
}

export default MorePage