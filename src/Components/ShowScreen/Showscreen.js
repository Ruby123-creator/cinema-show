import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Showdetails from '../../Elements/ShowDetails/Showdetails';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';

const Showscreen = () => {
    const [drama ,setdrama] = useState(null);
    const [loading ,setloading] = useState(true);
   const {imdb} = useParams()
 const Navigate = useNavigate()
  //  console.log(imdb)
    useEffect(()=>{
       const fetchDetails = async()=>{
        const show = await axios.get(`https://api.tvmaze.com/lookup/shows?imdb=${imdb}`)
        // console.log(show.data)
        setloading(false)
        setdrama(show.data)
       }
       fetchDetails()
    },[imdb])
  return (
    <div>
    <Button style={{margin:'10px 40px'}} onClick={()=>Navigate('/')}>Back To Home</Button>
    <div className='container'>
    {
        !loading?<Showdetails drama={drama}/>:<div className='center-of-screen'><Spinner variant='danger' animation='border'/></div>
    }
       
    </div>
    </div>
  )
}

export default Showscreen