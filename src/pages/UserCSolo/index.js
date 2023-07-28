import React from 'react'
import UserHeader from '../components/userHeader'
import { CiSearch } from 'react-icons/ci'
import CourseCard from '../../components/HomePage/CourseCard'
import './index.scss'
import Footer from '../../components/Footer'

const UserCSolo = () => {
    const numberOfCourseCards = 5;
  return (
    <div className='userCsolo' data-aos="fade-down-right">
        <UserHeader/>
        <div className='search container'>
            <div className='search__left'>
                <span>Сейчас репетиторы в онлайне готовые тебе помочь уже сейчас!</span>
                <h1>Найди своего репетитора уже сейчас!</h1>
            </div>
            <div className='search__right'>
                <label htmlFor='search'>
                    Введите предмет по которому вам нужно помощь специалиста
                    
                </label>
                <div className='search__input'>
                    <input type='search' name='search' placeholder='Предмет*' className='search__field'/>
                    <CiSearch size={18}/>
                </div>
            </div>
        </div>

        <div className="items container">
            {Array.from({ length: numberOfCourseCards }).map((_, index) => (
              <CourseCard key={index} />
            ))}
        </div>

        <div className='searchAll container'>
            <div className='searchAll__left'>
                <h1>Найди своего репетитора по поиску</h1>
                <span>И мы тебе подберем лучших специалистов!</span>
            </div>
            <div className='searchAll__right'>
                <label htmlFor='search'>
                    Введите предмет по которому вам нужно помощь специалиста
                    
                </label>
                <div className='search__input'>
                    <input type='search' name='search' placeholder='Предмет*' className='search__field'/>
                    <CiSearch size={18}/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default UserCSolo