import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="header_footer_wrapper">
          <img className="logo_header" src="./img/logo.png" alt="логотип" />
          <div className="navigation">
            <a href="#">О компании</a>
            <a href="#">Деятельность</a>
            <a href="#">Покупателям</a>
            <a href="#">Поставщикам</a>
            <a href="#">Инвесторам</a>
          </div>
          <div className="information">
            <div className="mail_adress">
              metal_228@list.ru
            </div>
            <div className="telephone_number">
              +7 (952)750 28 12
            </div>
          </div>
          <div className="burger_menu">
            <div className="burger-part"></div>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
          </div>
        </div>
      </header>
      <div className="offer">
        <div className="offer_wrapper">
          <div className="offer_text">
            <h1>Вместе с нами металлургия<br />становится безупречной!</h1>
            <div className="offer_list">
              <div className="el">
                <img src="./img/offer1.png" alt="offer_img" />
                <div className="el_text">Повышение качества продукции</div>
              </div>
              <div className="el">
                <img src="./img/offer2.png" alt="offer_img" />
                <div className="el_text">Внедрение экологически чистых технологий</div>
              </div>
              <div className="el">
                <img src="./img/offer3.png" alt="offer_img" />
                <div className="el_text">Увеличение производственных мощностей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="title">Оборудорвание и сотрудники</div>
        <div className="main_item">
          <div className="material">
            <div className="text_material">Материально-техническая база металлургического предприятия включает в себя
              различные производственные помещения, оборудование и инструменты. На предприятии может быть цех по
              переплавке металлов, где проводится плавка сырья, а также цех по прокатке, где происходит обработка
              и формирование металла в нужные изделия.</div>
            <div className="img_material"></div>
          </div>
          <div className="personal">
            <div className="card_personal">
              <div className="img_personal1"></div>
              <div className="text_personal">Галина Петровна
                <br />
                <b>Директор</b>
              </div>
            </div>
            <div className="card_personal">
              <div className="img_personal2"></div>
              <div className="text_personal">Августин Ганиев
                <br />
                <b>Бригадир</b>
              </div>
            </div>
            <div className="card_personal">
              <div className="img_personal3"></div>
              <div className="text_personal">Герман Донской
                <br />
                <b>Главный инженер</b>
              </div>
            </div>
            <div className="card_personal">
              <div className="img_personal4"></div>
              <div className="text_personal">Дмитрий Никей
                <br />
                <b>Аналитик</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        Продажи
      </div>
      <div className='main'>
        <div className="bl1">
          Сеть наших заводов расположилась по всей России и охватывает около 33 городов
          <img className='img_ru' src="../src/assets/img/2.png" alt="" />
        </div>
        <div className="bl2">
          <div className="qw1">Только за 2023 год наш комбинат продал:</div>
          <div className="qw2">21 356 852 шт.</div>
          <div className="qw3">1,3 млн $</div>
        </div>
      </div>
    </>
  )
}

export default App
