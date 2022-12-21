import React from 'react'

function ChildComponenent(isToogleOn) {
  console.log(isToogleOn.isToogleOn);
  return (
    <div>
        <h1>The Dark and Light Mode</h1>
        <h2> {isToogleOn.isToogleOn?'Dark Mode':'Light Mode'} </h2>
        <p> The new modern websites have introduced dark and light mode for different 
            experience in UI. The light mode is the default mode. It seems to have high
             contrast when viewed from environment with low light. So, Dark mode was Introduced.</p>
    </div>
    
  )
}

export default ChildComponenent 