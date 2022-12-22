import React from 'react'

import dark from '../dark.module.css'
import light from '../light.module.css'



function ChildComponent(isToogleOn) {
  console.log(isToogleOn.isToogleOn);
  return (
    <div>
        <h1>The Dark and Light Mode</h1>
        <h2 className={(isToogleOn.isToogleOn)? dark.status : light.status}> 
          {isToogleOn.isToogleOn?'Dark Mode':'Light Mode'} </h2>
        <p> The new modern websites have introduced dark and light mode for different 
            experience in UI. The light mode is the default mode. It seems to have high
             contrast when viewed from environment with low light. So, Dark mode was Introduced.</p>
    </div>
    
  )
}

export default ChildComponent 