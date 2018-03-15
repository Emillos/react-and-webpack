import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component{
  render(){
    return(
      <div id='catContent'>
        <div>I love</div>
        <div>Leonard</div>
        <div>Cohen</div>
        <img src='https://img.wennermedia.com/920-width/rs-leonard-cohen-2c24a166-affc-4250-a4a5-a8fd0a52a730.jpg' />
      </div>
    )
  }
}

render(<App />, document.getElementById('content'));