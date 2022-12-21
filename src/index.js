import React from 'react';
import ReactDOM from 'react-dom/client'

import ChildComponenent from './lessons/ChildComponenent';
import './index.css'


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

        if(!this.state.isToogle){ //For Dark Theme
            document.querySelector('button').style.backgroundColor='black';
            document.querySelector('button').style.color='white';
            document.querySelector('.container h2').style.color='white'; 
            document.querySelector('.container h2').style.backgroundColor='#1c1c1c'; 


            document.querySelector('body').style.backgroundColor='#07073e';
            document.querySelector('.container').style.backgroundColor='black';
            document.querySelector('.container').style.color='white';
            document.querySelector('button').style.border='.5px solid white';

          
        }

        else{ //For light Theme 

            document.querySelector('button').style.backgroundColor='white';
            document.querySelector('button').style.color='black';

            document.querySelector('body').style.backgroundColor='#6d6db6';
            document.querySelector('.container').style.backgroundColor='white';
            document.querySelector('.container').style.color='black'; 
            document.querySelector('.container h2').style.color='black'; 
            document.querySelector('.container h2').style.backgroundColor='#eee'; 


            
        }
    
    }

  render() {
    return (
      <div className='container'>
        <ChildComponenent isToogleOn = {this.state.isToogle} /> 
        <button onClick={this.ToogleOnClick}>
            {(this.state.isToogle)? 'Light': 'Dark'}
        </button>
      </div>


    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toogle />);






// import './index.css';
// import ParentComponent from './lessons/ParentComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<ParentComponent />)