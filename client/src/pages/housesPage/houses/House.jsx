import React, { useState, useEffect } from 'react';
import '../../../../public/assets/styles/pagesStyles/house.css'
import HouseSlider from './HouseSlider';


export default function House() {


  // let house = [{
  //   name: "Дом с БАССЕЙНАМИ",
  //   description:
  //     [
  //       "800м от Моря: справа центральный песчаный пляж (с волейбольной площадкой) «2К» «Дельфин», слева самый чистый пляж в бухте галечный пляж «Сады морей»",
  //       "Дом «Гостевой Семейный» — это отдых с комфортом!",
  //       "Два бассейна, сауна, очень уютная зона барбекю, детские качельки, внутренняя и внешняя парковка с видеонаблюдением, скоростной Wi-Fi для удаленной работы и это ещё не всё!",
  //       "Внутренний бассейн 40кв.м. 4х10м глубиной 1,3м, очищается и подогревается компьютером, всегда +29, используется гипоаллергенная химия для нежной кожи детей и мам)",
  //       "В помещении бассейн работает по расписанию: тренировки с 8 до 12, для гостей дома обязательно бесплатные 4 физкультчаса в день: сутра 6-7 и 7-8 и в обед 12-13 и 13-14 (дети только в сопровождении взрослых) наслаждаемся купанием, тренировки с тренером за отдельную плату с 14 до 20:00!",
  //       "Вечером с 20:00 до 23:00 для гостей с длительным проживанием (10 дней и более) подарочная индивидуальная баня с бассейном!"
  //     ],
  //   adress: "ул. Рыбникова, д.23",
  //   picture: "src../public/assets/images/homeCards/home-1.png",
  //   roomCount: 10,
  //   roomCategories: ["Стандарт, ", "Семейный"],
  //   meal: "Общая кухня",
  //   bookingConditions: "Предоплата 20%",
  //   checkoutTime: "Заезд в 15:00, выезд в 12:00",
  //   timeTo: {
  //     sea: "10-13 минут",
  //     market: "6 минут",
  //     cafe: "2 минуты",
  //     busStop: "3 минуты",
  //     cityCenter: "20 минут",
  //     busFree: "20 минут",
  //     icons:
  //       [
  //         "src../public/assets/images/icons/sea.svg",
  //         "src../public/assets/images/icons/shop.svg",
  //         "src../public/assets/images/icons/cafe.svg",
  //         "src../public/assets/images/icons/bus.svg",
  //         "src../public/assets/images/icons/map.svg",
  //       ],
  //     names:
  //       [
  //         'Море',
  //         'Рынок',
  //         'Кафе',
  //         'Автобусная остановка',
  //         'Центр города'
  //       ]
  //   },
  //   services: {
  //     icons: [
  //       "src../public/assets/images/icons/houses-icons/wifi.svg",
  //       "src../public/assets/images/icons/houses-icons/hairdryer.svg",
  //       "src../public/assets/images/icons/houses-icons/pool.svg",
  //       "src../public/assets/images/icons/houses-icons/crib.svg",
  //       "src../public/assets/images/icons/houses-icons/courtyard.svg",
  //       "src../public/assets/images/icons/houses-icons/dishwasher.svg",
  //       "src../public/assets/images/icons/houses-icons/washing.svg",
  //       "src../public/assets/images/icons/houses-icons/dining.svg",
  //       "src../public/assets/images/icons/houses-icons/parking.svg",
  //       "src../public/assets/images/icons/houses-icons/cleaning.svg",
  //       "src../public/assets/images/icons/houses-icons/bedchange.svg",
  //       "src../public/assets/images/icons/houses-icons/kitchen.svg",
  //       "src../public/assets/images/icons/houses-icons/iron.svg",
  //       "src../public/assets/images/icons/houses-icons/grill.svg",
  //       "src../public/assets/images/icons/houses-icons/refrigerator.svg",
  //       "src../public/assets/images/icons/houses-icons/parking.svg",
  //       "src../public/assets/images/icons/houses-icons/laundry.svg"
  //     ],
  //     names: [
  //       'Интернет',
  //       'Фен',
  //       'Бассейн',
  //       'Детская кроватка',
  //       'Двор',
  //       'Посудомоечная машина',
  //       'Стиральная машина',
  //       'Столовая',
  //       'Свободная парковка',
  //       'Уборка в номерах',
  //       'Смена постельного белья',
  //       'Общая кухня',
  //       'Утюг',
  //       'Мангал',
  //       'Холодильник',
  //       'Трансфер',
  //       'Прачечная'
  //     ]
  //   },
  //   rooms: [
  //     "#1: Двухместный романтик",
  //     "#2: Трёхместный стандарт",
  //     "#3: Семейный комфорт",
  //     "#4: Двухместный стандарт",
  //     "#5: Люкс 2+2 с лоджией",
  //     "#6: Люкс 2+2 с лоджией",
  //     "#7: Семейный уют",
  //     "#8: Трёхместный с выходом в сад",
  //     "#9: Семейный эконом",
  //     "#10: Квартирка над бассейном с кухней и без соседей!"
  //   ]
  // }]


  // const aparts = [
  //   {
  //     name: "#1: Двухместный романтик",
  //     places: 2,
  //     photo: "images/house1/apart/room-1.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#2: Трёхместный стандарт",
  //     places: 3,
  //     photo: "src../public/assets/images/house1/apart/room-2.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#3: Семейный комфорт",
  //     places: 5,
  //     photo: "src../public/assets/images/house1/apart/room-3.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#4: Двухместный стандарт",
  //     places: 2,
  //     photo: "src../public/assets/images/house1/apart/room-4.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#5: Люкс 2+2 с лоджией",
  //     places: 4,
  //     photo: "src../public/assets/images/house1/apart/room-5.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#6: Люкс 2+2 с лоджией",
  //     places: 4,
  //     photo: "src../public/assets/images/house1/apart/room-6.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#7: Семейный уют",
  //     places: 4,
  //     photo: "src../public/assets/images/house1/apart/room-7.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#8: Трёхместный с выходом в сад",
  //     places: 3,
  //     photo: "src../public/assets/images/house1/apart/room-8.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#9: Семейный эконом",
  //     places: 6,
  //     photo: "src../public/assets/images/house1/apart/room-9.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   },
  //   {
  //     name: "#10: Квартирка над бассейном с кухней",
  //     places: 3,
  //     photo: "src../public/assets/images/house1/apart/room-10.png",
  //     facilities: {
  //       services: [
  //         "Духспальная кровать",
  //         "Холодильник",
  //         "Интернет",
  //         "Санузел"
  //       ],
  //       icons: ["src../public/assets/images/icons/houses-icons/beddouble.svg", "src../public/assets/images/icons/houses-icons/wifi.svg", "src../public/assets/images/icons/houses-icons/capcap.svg", "src../public/assets/images/icons/houses-icons/refrigerator.svg"]
  //     }
  //   }
  // ]


  return (
    <div className="hous">
      <div className="container">
        <ul className="breadcrumb">
          <li className='breadcrumb__item'>
            <a href="#">
              Главная
            </a>
          </li>
          <li className='breadcrumb__item'>
            <a href="#">Дома</a>
          </li>
          <li className='breadcrumb__item'>
            Дом с бассейнами
          </li>
        </ul>
        <h2>{house[0].name}</h2>
        <p className="house__description-first">
          {house[0].description[0]}
        </p>
        <HouseSlider />
        <a className='adress__link' href="#">{house[0].adress}</a>
        <h6 className="description__title">Описание</h6>
        <p className="house__description">
          {house[0].description[1]}
        </p>
        <p className="house__description">
          {house[0].description[2]}
        </p>
        <div className="house__info">
          <div className='house__info-item'>
            <p className='house__info-item--left'>Количество номеров:</p>
            <p className='house__info-item--right'>{house[0].roomCount}</p>
          </div>
          <div className='house__info-item'>
            <p className='house__info-item--left'>Категории номеров: </p>
            <p className='house__info-item--right'>{house[0].roomCategories}</p>
          </div>
          <div className='house__info-item'>
            <p className='house__info-item--left'>Условия бронирования:</p>
            <p className='house__info-item--right'>{house[0].bookingConditions}</p>
          </div>
          <div className='house__info-item'>
            <p className='house__info-item--left'>Расчетный час:</p>
            <p className='house__info-item--right'>{house[0].checkoutTime}</p>
          </div>
        </div>
        <div className="house__timeto">
          <h6 className="house__timeto-title">
            РАССТОЯНИЯ
          </h6>
          <div className="house__timeto-items">
            <div className="house__timeto-item">
              <div className="house__timeto-item--left">
                <img src={house[0].timeTo.icons[0]} alt="" />
                <p>Море</p>
              </div>
              <p className="house__timeto-item--right">
                {house[0].timeTo.sea}
              </p>
            </div>

            <div className="house__timeto-item">
              <div className="house__timeto-item--left">
                <img src={house[0].timeTo.icons[1]} alt="" />
                <p>Рынок</p>
              </div>
              <p className="house__timeto-item--right">
                {house[0].timeTo.market}
              </p>
            </div>
            <div className="house__timeto-item">
              <div className="house__timeto-item--left">
                <img src={house[0].timeTo.icons[2]} alt="" />
                <p>Кафе</p>
              </div>
              <p className="house__timeto-item--right">
                {house[0].timeTo.cafe}
              </p>
            </div>
            <div className="house__timeto-item">
              <div className="house__timeto-item--left">
                <img src={house[0].timeTo.icons[3]} alt="" />
                <p>Автобусная остановка</p>
              </div>
              <p className="house__timeto-item--right">
                {house[0].timeTo.busStop}
              </p>
            </div>
            <div className="house__timeto-item">
              <div className="house__timeto-item--left">
                <img src={house[0].timeTo.icons[4]} alt="" />
                <p>Центр города</p>
              </div>
              <p className="house__timeto-item--right">
                {house[0].timeTo.cityCenter}
              </p>
            </div>
          </div>
        </div>
        <div className="house__services">
          <h5 className="house__services-title">
            УДОБСТВА И УСЛУГИ
          </h5>
          <div className="house__services-items">
            <div className="house__services-item">
              <img src={house[0].services.icons[0]} alt="" />
              <p>{house[0].services.names[0]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[1]} alt="" />
              <p>{house[0].services.names[1]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[2]} alt="" />
              <p>{house[0].services.names[2]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[3]} alt="" />
              <p>{house[0].services.names[3]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[4]} alt="" />
              <p>{house[0].services.names[4]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[5]} alt="" />
              <p>{house[0].services.names[5]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[6]} alt="" />
              <p>{house[0].services.names[6]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[7]} alt="" />
              <p>{house[0].services.names[7]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[8]} alt="" />
              <p>{house[0].services.names[8]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[9]} alt="" />
              <p>{house[0].services.names[9]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[10]} alt="" />
              <p>{house[0].services.names[10]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[11]} alt="" />
              <p>{house[0].services.names[11]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[12]} alt="" />
              <p>{house[0].services.names[12]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[13]} alt="" />
              <p>{house[0].services.names[13]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[14]} alt="" />
              <p>{house[0].services.names[14]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[15]} alt="" />
              <p>{house[0].services.names[15]}</p>
            </div>
            <div className="house__services-item">
              <img src={house[0].services.icons[16]} alt="" />
              <p>{house[0].services.names[16]}</p>
            </div>
          </div>
        </div>
        <p className="house__description">
          {house[0].description[2]}
        </p>
        <p className="house__description">
          {house[0].description[3]}
        </p>
        <p className="house__description">
          {house[0].description[4]}
        </p>
        <div className="apart__list">
          <ul className="apart__list-items">
            <li className="apart__list-item">
              {/* {for(let i = 0; i < aparts[0].places; i++){
                 <img src="''src../public/assets/images/icons/houses-icons/man.svg" alt="" />
             размножить человечков
             }} */}
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[0].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[1].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[2].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[3].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[4].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[5].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[6].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[7].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[8].name}</a>
            </li>
            <li className="apart__list-item">
              <img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" />
              <a href="#">{aparts[9].name}</a>
            </li>
          </ul>
        </div>

        <div className="apart">
          <h5 className="apart__items-title">
            НОМЕРА
          </h5>
          <div className="apart__items">
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[0].name}</h6>
                <img className='apart__item-img' src={aparts[0].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[1].name}</h6>
                <img className='apart__item-img' src={aparts[1].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[2].name}</h6>
                <img className='apart__item-img' src={aparts[2].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[3].name}</h6>
                <img className='apart__item-img' src={aparts[3].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[4].name}</h6>
                <img className='apart__item-img' src={aparts[4].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[5].name}</h6>
                <img className='apart__item-img' src={aparts[5].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[6].name}</h6>
                <img className='apart__item-img' src={aparts[6].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[7].name}</h6>
                <img className='apart__item-img' src={aparts[7].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[8].name}</h6>
                <img className='apart__item-img' src={aparts[8].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
            <div className="apart__item">
              <div className="apart__item-content">
                <h6 href="#">{aparts[9].name}</h6>
                <img className='apart__item-img' src={aparts[9].photo} alt="" />
                <div className="apart__item-icons">
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[0]} alt="" />
                    <p>{aparts[0].facilities.services[0]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[1]} alt="" />
                    <p>{aparts[0].facilities.services[1]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[2]} alt="" />
                    <p>{aparts[0].facilities.services[2]}</p>
                  </div>
                  <div className="apart__item-icon">
                    <img src={aparts[0].facilities.icons[3]} alt="" />
                    <p>{aparts[0].facilities.services[3]}</p>
                  </div>
                </div>
                <div className="apart__item-man"><img src="../../../../public/assets/images/icons/houses-icons/man.svg" alt="" /></div>
                <div className="apart__item-buttons">
                  <a className='apart__item-btn--left' href="#">Подробнее</a>
                  <a className='apart__item-btn--right' href="#">Забронировать</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
