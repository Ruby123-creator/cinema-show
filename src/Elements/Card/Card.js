import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({details}) => {
  const Navigate = useNavigate()
  return (
    <div className='cards'>
    <div>
        <div className="image">
           <img src={details.image.medium} alt="" />
        </div>
        <div className="details">
        <div className='show-name'><p>{details.name}</p></div>
             
             <div>
             <span className='rating'>{details.rating.average?details.rating.average:5.2}/10 </span>
             <span>{details.language} Show</span>
             </div>
             <div>
                <button onClick={()=>Navigate(`/show/${details.externals.imdb}`)}>Show Details</button>
             </div>
        </div>
    </div>
    
    </div>
  )
}

export default Card