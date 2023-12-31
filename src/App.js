import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {advice: ''}

  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
     .then((response) => {
      const {advice} = response.data.slip;
       this.setState({advice});
       
     })
     .catch((error) => {
      console.log(error);
     })

}
//function inside a class is a method does not need const  
  render () {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
  <h1>{advice}</h1>
  <button className='button'onClick={this.fetchAdvice}>
    <span>GIVE ME ADVICE!</span>
  </button>
  </div> </div> )
  }
}

export default App;
