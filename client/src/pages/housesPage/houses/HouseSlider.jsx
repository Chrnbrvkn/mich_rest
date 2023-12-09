import { useState } from "react";


export default function HouseSlider() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const house = [{
    name: "Дом с бассейнами",
    picture: [
      "''src../public/assets/images/house1/h1.jpeg",
      "''src../public/assets/images/house1/h2.jpeg",
      "''src../public/assets/images/house1/h3.jpeg",
      "''src../public/assets/images/house1/h4.jpeg",
      "''src../public/assets/images/house1/h5.jpeg",
      "''src../public/assets/images/house1/h6.jpeg"
    ]
  }];

  const prevSlide = () => {
    setCurrentIndex((prevSlide) => {
      if (prevSlide === 0) {
        return prevSlide = house[0].picture.length - 1
      }
      return prevSlide - 1
    })
  }
  const nextSlide = () => {
    setCurrentIndex((prevSlide) => {
      if (prevSlide === house[0].picture.length - 1) {
        return prevSlide = 0
      }
      return prevSlide + 1
    })
  }

  return (<>
    <div className='slider__house'>
      <button className='house__slider-prev' onClick={prevSlide}>
        <img src="''src../public/assets/images/icons/houses-icons/arrow-left.svg" alt="" />
      </button>
      <img className="slider__house-front" src={house[0].picture[currentIndex]} />
      <button className='house__slider-next' onClick={nextSlide}>
        <img src="''src../public/assets/images/icons/houses-icons/arrow-right.svg" alt="" />
      </button>
    </div>
    <div className='slider__house-photos'>
      {house[0].picture.map((item, index) =>
        currentIndex !== index ? (
          <img key={index} id={index} className='house_photo' src={item} alt={`Image ${index}`} />
        ) : null
      )}
    </div>
  </>)
}