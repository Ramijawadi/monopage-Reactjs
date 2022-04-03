import React from 'react'
import Feature from './Feature'


function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
       <img src={props.image}  alt=''/>
 </div>
   <div className='s-b-text'>
   <h2>{props.title}</h2>
   <p>Rami jawadi is a mern stack developper</p>   
   </div>    
 </div>
  )
}

export default FeatureBox