import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import cardUi from "../../assets/Card UI.png"
import cornerVector from "../../assets/Corner Vectors.png"

const DefaultCard = ({width, height, action, iconSrc, text}) => {
  return (
    <>
      <div className='card-holder'>
        <img src={cardUi} className='card-ui' />
        <img src={cornerVector} className='corner-vector' />
        <div className='content'>
          <img src={iconSrc} />
          <p>
            {text}
          </p>
          <button className='circle-icon' onClick={action}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default DefaultCard