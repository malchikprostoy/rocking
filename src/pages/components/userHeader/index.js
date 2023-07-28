import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import './index.scss'
import { NavLink } from 'react-router-dom'

const UserHeader = () => {
  return (
    <div className='container'>
      <div className='userHeader'>
        <NavLink to={"/"} className='logo'>Online Academy</NavLink>
        <div className='nav'>
            <NavLink to={"/userMain"}>Главная</NavLink>
            <NavLink to={"/userCSolo"}>Индивидуальные уроки</NavLink>
            <NavLink to={"/userCGroup"}>Групповые уроки</NavLink>
        </div>
        <div className='user'>
            <a href='#'><CiBellOn size={24}/></a>
            <a href='#'><CiUser size={24}/></a>
        </div>
      </div>
    </div>
  )
}

export default UserHeader