import React from 'react'
import './showdetails.css'

import ModalOpen from '../Modal/ModalOpen'
const Showdetails = ({drama}) => {

    
  return (
    <div className='container'>
        <div className='movie-info'>
          <div className="movie-heading">
          <div className='title'>
              <h1>
                {drama.name}
              </h1>
              <p>
                {drama.premiered.split('-')[0]}•{drama.network?.country.code?drama.network.country.code:'India'}•{drama.type}
              </p>
              </div>
              <div>
                <div>

                </div>
                <div>

                </div>
              </div>
          </div>
          <div className='movie-details'>
              <div className="movie-rating">
                <p>IMDB RATING</p>
                <div>
                    <span></span>
                    <span><p>{drama.rating.average?drama.rating.average:'5.2'}/10 Rating</p><p>{drama.weight}k views</p></span>
                </div>
              </div>
          </div>
       </div>
       <div className='about-movie'>
        <div>
            <img src={drama.image.medium} alt="" />
            

        </div>
        <div className='info'>
            <h2>Book Your Seat</h2>
            <div>
            Genres: 
            {
                drama.genres.map((item)=>(
                    <span>{item}{","}</span>
                ))
            }
            </div>
            <div>
            Language:{drama.language}
            </div>
            {
              drama.status==='running'? <div>scheduled:{drama.schedule.time}P.M on {drama.schedule.days?.map((day)=>(<span>{day}{' '}</span>))}</div>:''
            }
           
            <div>Status:{drama.status}</div>
            <div className='movie-ticket'>
         <ModalOpen moviename={drama.name}/>
       </div>
        </div>
       </div>
       <div className='description'>
           <div>
            {drama.summary}
           </div>
        </div>
       
       <div>
       <p> More Links</p>
        <a href={drama.url} target='blank'>Current Episode
</a>
<br />
<a href={drama._links.previousepisode.href} target='blank'>Previous Episodes</a>
       </div>
        </div>
  )
}

export default Showdetails