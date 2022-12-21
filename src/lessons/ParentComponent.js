
import ChildComponent from './ChildComponenent' 

import React, { Component } from 'react'

class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h1> HI I am Samrat</h1>
        <ChildComponent eventName={'ICT Awards by ICT Frame'}/>
      </div>
    )
  }
}

export default ParentComponent


// Design this passing state in the prop