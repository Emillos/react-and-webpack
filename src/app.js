import React, { Component } from 'react'
import { render } from 'react-dom'
import './style.less'

class App extends Component{
  render(){
    return(
      <div id='cohen'>
        <div>Leonard Cohen</div>
      </div>
    )
  }
}

render(<App />, document.getElementById('content'));
