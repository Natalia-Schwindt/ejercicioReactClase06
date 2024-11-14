import { elements } from '../dataBase/carrousel'
import { useState } from 'react';

const CarrouselImage = () => {
    console.log(elements[0]);

    const [index, setIndex] = useState(0)

    const next = ()=> {
        if(index + 1 < elements.length){
        setIndex((prev) => prev + 1)
        } else {
            setIndex(0)
        }
    }

    const prev = ()=>{
        if(index === 0){
            setIndex(elements.length - 1)
        } else {
            setIndex((prev) => prev - 1)
        }
    }

  return (
    <div>
      <h3>Carrousel de imágenes</h3>
      <figure>
        <img src={elements[index].src} alt={elements[index].alt} />
      </figure>
      <button onClick={prev}>-</button>
      <button onClick={next}>+</button>
    </div>
  )
}

    // const nextImage = () => {setCurrentIndex((prev) => prev +1 <  elements.length ? (prev + 1) : (0)); };
  
    // Función para retroceder a la imagen anterior
    //const prevImage = () => {
      //setCurrentIndex((prev) =>
        //prev === 0 ? elements.length - 1 : prev - 1
      //);
    //};

export default CarrouselImage
