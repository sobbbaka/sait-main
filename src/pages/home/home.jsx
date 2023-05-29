import React from 'react'
import './style_home.scss'

const HomePage = () => {


  return (
    <div className={'home'}>
      <div className={'home__header'}>
        <div class="privet">
          <span>Добро пожаловать!</span>
        </div>
        <div class="text_priveta">
          <span>Мы рады приветствовать вас в магазине LetThereBeLight, где вы найдете лучшее освещение для своего дома, офиса или любого другого места.<br></br>
            Наши лампы - это надежное и стильное решение для освещения.<br></br>

            Мы стремимся предоставлять только качественные продукты, чтобы вы могли наслаждаться ярким и эффективным светом. <br></br>
            Благодарим за визит и надеемся, что вы найдете у нас все, что вам нужно!<br></br>

          </span>
          <div class="nasha">
            <span>Наша</span>
          </div>
          <div class="prodyk">
            <span>Продукция</span>
          </div>
          <div class="slider-container">
            <div class="slider">
              <div class="slides">
                <div id="slides__1" class="slide">
                  <div class="slide__text">
                    <img src="scrol1.svg" />
                  </div>
                  <a class="slide__prev" href="#slides__4"></a>
                  <a class="slide__next" href="#slides__2" title="Next"></a>
                </div>
                <div id="slides__2" class="slide">
                  <div class="slide__text">
                    <img src="scrol2.svg" />
                  </div>
                  <a class="slide__prev" href="#slides__1" title="Prev"></a>
                  <a class="slide__next" href="#slides__3" title="Next"></a>
                </div>
                <div id="slides__3" class="slide">
                  <div class="slide__text">
                    <img src="scrol3.svg" />
                  </div>
                  <a class="slide__prev" href="#slides__2" title="Prev"></a>
                  <a class="slide__next" href="#slides__4"></a>
                </div>
              </div>
              <div class="slider__nav">
                <a class="slider__navlink" href="#slides__1"></a>
                <a class="slider__navlink" href="#slides__2"></a>
                <a class="slider__navlink" href="#slides__3"></a>
              </div>
            </div>
          </div>
          <div class="container_slider_css">
            <img class="photo_slider_css" src="auto_scrol1.svg" />
            <img class="photo_slider_css" src="auto_scrol2.svg" />
            <img class="photo_slider_css" src="auto_scrol3.svg" />
          </div>
          <div class="xit">
            <span>Хит продаж</span>
          </div>
          <div class="card1">
            <div class="card1__top">
              <a href="#" class="card1__image">
                <img
                  src="tovar1_xit.svg"
                  alt="Apple IPhone 14 PRO Max Gold"
                />
              </a>
              <div class="card1__label">-10%</div>
            </div>
            <div class="card1__bottom">
              <div class="card1__prices">
                <div class="card1__price card1__price--discount">500</div>
                <div class="card1__price card1__price--common">700</div>
              </div>
              <a href="#" class="card1__title">
                Светодиодный гибкий неон 0816 12V blue LN203
              </a>
              <button class="card1__add">В корзину</button>
            </div>
          </div>
          <div class="card2">
            <div class="card2__top">
              <a href="#" class="card2__image">
                <img
                  src="tovar2_xit.svg"
                  alt="Apple IPhone 14 PRO Max Gold"
                />
              </a>
            </div>
            <div class="card2__bottom">
              <div class="card2__prices">
                <div class="card2__price card2__price--discount">25 000</div>
                <div class="card2__price card2__price--common">25 000</div>
              </div>
              <a href="#" class="card2__title">
                Подвесная люстра в стиле Gyro Crystal Chandelier by Timothy черные кристаллы
              </a>
              <button class="card2__add">В корзину</button>
            </div>
          </div>
          <div class="card3">
            <div class="card3__top">
              <a href="#" class="card3__image">
                <img
                  src="tovar3_xit.svg"
                  alt="Apple IPhone 14 PRO Max Gold"
                />
              </a>
              <div class="card3__label">-50%</div>
            </div>
            <div class="card3__bottom">
              <div class="card3__prices">
                <div class="card3__price card3__price--discount">300</div>
                <div class="card3__price card3__price--common">600</div>
              </div>
              <a href="#" class="card3__title">
                Светильник настольный ЭРА N-102-E27-40W-BK
              </a>
              <button class="card3__add">В корзину</button>
            </div>
          </div>
          <div class="proizv">
            <span>Производители</span>
          </div>
          <div class="proizv_img1">
            <img src="proizv_img1.svg" />
          </div>
          <div class="proizv_img2">
            <img src="proizv_img2.svg" />
          </div>
          <div class="proizv_img3">
            <img src="proizv_img3.svg" />
          </div>
          <div class="niz">
            <img src="niz.svg" />
          </div>
          <div class="youtube">
            <a href="https://www.youtube.com/@guddofui">
              <img src="youtube.svg" />
            </a>
          </div>
          <div class="vk">
            <a href="https://vk.com/bladefuryjuggernaut">
              <img src="vk.svg" />
            </a>
          </div>
          <div class="tekst_sverhu_kartinki_niz1">
            <span>Новости</span>
          </div>
          <div class="tekst_sverhu_kartinki_niz2">
            <span>Магазины</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
