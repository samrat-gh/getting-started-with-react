import React from 'react';
import ChildComponent from './ChildComponent';
// import './index.css'
import dark from '../dark.module.css'
import light from '../light.module.css'




class Toogle extends React.Component {
   
    constructor(props) {

        super(props);
        this.state = {isToogle:true}
        this.ToogleOnClick = this.ToogleOnClick.bind(this);
    }

    ToogleOnClick() {
        this.setState (prevState => ({
            isToogle : !prevState.isToogle
        }))

        console.log(this.state.isToogle);
        if(this.state.isToogle) {
          document.querySelector('html').style.backgroundColor='07073e';
        }
        else {
          document.querySelector('html').style.backgroundColor='#6d6db6';
    
        }
        
    }

  render() {
    const myclass = this.state.isToogle;
    console.log(myclass);
    return (
      <div className={(myclass)? dark.bg : light.bg }>
      <div className={(myclass)? dark.container : light.container}>
        <ChildComponent isToogleOn = {this.state.isToogle} /> 

        <button className={(myclass)?dark.btn : light.btn} 
        onClick={this.ToogleOnClick}>
            {(this.state.isToogle)? 'Light': 'Dark'}
        </button>
      </div> </div>

    )
  }
}

export default Toogle