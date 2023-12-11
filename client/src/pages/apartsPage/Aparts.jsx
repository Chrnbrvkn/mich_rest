import { useState, useEffect } from "react"
import { getApart, getApartOneImage } from "../../api/apartsApi";

export default function Aparts() {
  const [aparts, setAparts] = useState([])
  const [imagesAparts, setImagesAparts] = useState([])

  // const fetchHouses = async () => {
  //   try {
  //     const allHouses = await getApart();
  //     setAparts(allHouses)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const fetchImageHouses = async () => {
  //   try {
  //     const imageHouse = await getApartOneImage(1);
  //     setImagesAparts(imageHouse)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchHouses();
  //   fetchImageHouses()
  // }, []);


  return (<>
    {/* {aparts.map(apart => (
      <div>
        {apart.name}
      </div>
    ))}
    {imagesAparts.map( img => {
      <img src={img.url} />
    })} */}
  </>

  )
}