import React from 'react'

const DefaultButton = ({action, text, type}) => {
  try{
    return (
      <>
        <div className={`btn-holder ${type === "outline" ? "outline" : ""}`} onClick={action}>
          <p className='btn-content'>
            {text}
          </p>
        </div>
      </>
    )
  } catch{
    return (
      <>
        {""}
      </>
    )
  }
}

export default DefaultButton