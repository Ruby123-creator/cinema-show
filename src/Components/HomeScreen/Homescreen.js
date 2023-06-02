import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../Elements/Card/Card'
import './homescreen.css';
const Homescreen = () => {
    const [shows ,setShows] = useState([])
    useEffect(()=>{
        
        const fetchData = async()=>{
            try {
                const res = await axios.get('https://api.tvmaze.com/search/shows?q=all')
                console.log(res)
            setShows(res.data)
            } catch (error) {
                console.log(error.message)
            }
            
        }
        fetchData();
    },[])
  return (
    <div>
      <div style={{textAlign:'center' ,margin:'20px 0'}}><h1>Welcome To Cinema-show</h1></div>
    <div className='show-screen'>
         {
            shows.map((item ,index)=>{
                return(
                    <Card key={index} details ={item.show}/>
                )
            }
            )
         }
    </div>
    </div>
  )
}

export default Homescreen