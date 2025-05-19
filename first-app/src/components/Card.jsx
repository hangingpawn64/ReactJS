import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <img src='https://yt3.googleusercontent.com/ytc/AIdro_n00p_ZePoxDQQ9m1fOAv5f6CPy-GyG97eU5hKHI3wX5cM=s900-c-k-c0x00ffffff-no-rj' width={225} />
      <p>{props.description}</p>
    </div>
  )
}

export default Card
