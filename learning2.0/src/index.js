import React from 'react'
import ReactDOM from 'react-dom'
import './Hook.css'

const Summary = (props) => {
  return (
    <p className="summary">I am a curious man.</p>
  )
}

const Left = (props) => {
  return (
    <div className="split left">
      <div className="centered">
        <h1 className="hook">
          Developer.
          <br />
          Bookworm.
        </h1>
        <Summary />
      </div>
    </div>
  )
}

const Right = (props) => {
  return (
    <div className="split right">
      <div className="centered">
        
      </div>
    </div>
  )
}

const Page = (props) => {
  return (
    <div>
      <Left />
      <Right />
    </div>
  )
}


ReactDOM.render(<Page />, document.getElementById('root'))
