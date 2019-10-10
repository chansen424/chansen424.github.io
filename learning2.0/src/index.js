import React from 'react'
import ReactDOM from 'react-dom'
import Computer from './monitor.png'
import Book from './book.png'
import './Hook.css'

const Summary = (props) => {
  return (
    <p className="summary">Computer Science <a href="https://cornell.edu">@Cornell</a></p>
  )
}

const Left = (props) => {
  return (
    <div className="split left">
      <div className="centered">
        <div className="leftLine">
        <img alt="Computer" src={Computer} />
        <img alt="Book" src={Book} />
        <h1 className="hook">
            Developer.
            <br />
            Bookworm.
          </h1>
          <Summary />
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/good-ware" title="Freepik">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
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
