import React from 'react'
import { WORLDHEXAGONMAP } from '../WORLDHEXAGONMAP'
import "../overlay/Overlay.css"


function Overlay(props) {
 const mainStyle={
    

 }

  return (
    <div className='overlay'>
    {props.children}
        <div className='overlay-mid'>
           <WORLDHEXAGONMAP/>
        </div>
    </div>
  )
}

export default Overlay

