import '../../assets/styles/pagesStyles/room.css'
import door from '../../assets/images/room/room-icons/door.svg'
import occupied from '../../assets/images/room/room-icons/occupied.svg'
import stairs from '../../assets/images/room/room-icons/stairs.svg'
import faucet from '../../assets/images/room/room-icons/faucet.svg'
import food from '../../assets/images/room/room-icons/food.svg'
export default function Rooms() {

  return (
    <div className='room'>
      <div className="container">
        <ul className="breadcrumb">
          <li className="breadcrumb__item"><a href="#">Дом с бассейнами</a></li>
          <li className="breadcrumb__item">#1: Двухместный романтик</li>
        </ul>
        <div className="room__main">
          <p className="room__main-title">
            #1: Двухместный романтик
          </p>
          <div className="room__main-content">
            <div className="room__main-left">
              <div className="room__main-slider">

              </div>
              <button className="room__main-btn">
                Забронировать
              </button>
            </div>
            <div className="room__main-right">
              <div className="room__main-inform">
                <div className="room__main-inform--item">
                  <div className="room__main-inform--left">
                    <img src={door} alt="" />
                    <p>Количество комнат</p>
                  </div>
                  <div className="room__main-inform--right">
                    1
                  </div>
                </div>
                <div className="room__main-inform--item">
                  <div className="room__main-inform--left">
                    <img src={occupied} alt="" />
                    <p>Спальные места</p>
                  </div>
                  <div className="room__main-inform--right">
                    2(Двуспальная кровать)
                  </div>
                </div>
                <div className="room__main-inform--item">
                  <div className="room__main-inform--left">
                    <img src={stairs} alt="" />
                    <p>Этаж</p>
                  </div>
                  <div className="room__main-inform--right">
                    3
                  </div>
                </div>
                <div className="room__main-inform--item">
                  <div className="room__main-inform--left">
                    <img src={faucet} alt="" />
                    <p>Санузел</p>
                  </div>
                  <div className="room__main-inform--right">
                    В номере (душ/туалет)
                  </div>
                </div>
                <div className="room__main-inform--item">
                  <div className="room__main-inform--left">
                    <img src={food} alt="" />
                    <p>Питание</p>
                  </div>
                  <div className="room__main-inform--right">
                    Общая кухня
                  </div>
                </div>
              </div>
              <div className="room__main-facilities">
                <p>
                  Удобства
                </p>
                <p>
                  Холодильник  Раковина  Интернет  Сплит/Кондиционер
                  ТВ  Душ/туалет  Полотенца
                </p>
              </div>
              <div className="room__main-price">
                <div className="room__main-price--top">
                  <p>Цены,</p>
                  <p> 2023 год</p>
                </div>
                <div className="room__main-price--bottom">
                  <p>4000р./сутки</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="room__items">
          <div className="room__item">
            <p className="room__item-title">
              #2: Трёхместный стандарт
            </p>
            <div className="room__item-img">

            </div>
            <div className="room__item-inform">
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={stairs} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Этаж
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={faucet} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Санузел
                </div>
              </div>
            </div>
            <div className="room__item-man">
            </div>
            <div className="room__item-buttons">
              <button>
                Подробнее
              </button>
              <button>
                Забронировать
              </button>
            </div>
          </div>

          <div className="room__item">
            <p className="room__item-title">
              #2: Трёхместный стандарт
            </p>
            <div className="room__item-img">

            </div>
            <div className="room__item-inform">
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={stairs} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Этаж
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={faucet} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Санузел
                </div>
              </div>
            </div>
            <div className="room__item-man">
            </div>
            <div className="room__item-buttons">
              <button>
                Подробнее
              </button>
              <button>
                Забронировать
              </button>
            </div>
          </div>

          <div className="room__item">
            <p className="room__item-title">
              #2: Трёхместный стандарт
            </p>
            <div className="room__item-img">

            </div>
            <div className="room__item-inform">
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={stairs} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Этаж
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={faucet} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Санузел
                </div>
              </div>
            </div>
            <div className="room__item-man">
            </div>
            <div className="room__item-buttons">
              <button>
                Подробнее
              </button>
              <button>
                Забронировать
              </button>
            </div>
          </div>

          <div className="room__item">
            <p className="room__item-title">
              #2: Трёхместный стандарт
            </p>
            <div className="room__item-img">

            </div>
            <div className="room__item-inform">
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={stairs} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Этаж
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={faucet} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Санузел
                </div>
              </div>
            </div>
            <div className="room__item-man">
            </div>
            <div className="room__item-buttons">
              <button>
                Подробнее
              </button>
              <button>
                Забронировать
              </button>
            </div>
          </div>

          <div className="room__item">
            <p className="room__item-title">
              #2: Трёхместный стандарт
            </p>
            <div className="room__item-img">

            </div>
            <div className="room__item-inform">
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={occupied} alt="" />
                </div>
                <div className="room__item-inform--right">
                  2(Двуспальная кровать)
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={stairs} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Этаж
                </div>
              </div>
              <div className="room__item-inform--item">
                <div className="room__item-inform--left">
                  <img src={faucet} alt="" />
                </div>
                <div className="room__item-inform--right">
                  Санузел
                </div>
              </div>
            </div>
            <div className="room__item-man">
            </div>
            <div className="room__item-buttons">
              <button>
                Подробнее
              </button>
              <button>
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}