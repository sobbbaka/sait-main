import React from 'react'
import './style_head.scss'

export const HeaderPage = () => {
  return (
    <div className={'header'}>
      <div className={'background'}>
        <div class="background">
          <img src="back.svg" />
        </div>
      </div>
      <div class={'header__logo'}>
        <img src={'shapka.svg'} />
        <div class="tekst_sverhu_kartinki_1">
          <span>Осветите свой дом с нашими качественными лампочками!</span>
        </div>
        <div class="buttom1">
          <a href="src\pages\kontakt\kontakt.jsx">
            <button class="btn">Контакты</button>
          </a>
        </div>
        <div class="buttom2">
          <button class="btn">О компании</button>
        </div>
        <div class="buttom3">
          <button class="btn">Каталог</button>
        </div>
        <div class="buttom4">
          <button class="btn">Сотрудничество</button>
        </div>
      </div>
    </div>
  )
}
