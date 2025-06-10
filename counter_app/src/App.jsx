import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  increment=()=>{
    this.setState({count:this.state.count + 1})
  }
  decrement=()=>{
    this.setState({count:this.state.count - 1})
  }
  reset=()=>{
    this.setState({count:this.state.count=0})
  }
render(){
  return(
    <div className='allbtns'>
      <h2>COUNTER APP</h2>
      <div className='child'>
      <button onClick={this.decrement} disabled={this.state.count===0}>-</button>
      <span>{this.state.count}</span>
      <button onClick={this.increment}>+</button>
      <p><button onClick={this.reset}>RESET</button></p>
      </div>
    </div>
  )

}
}

export default App

