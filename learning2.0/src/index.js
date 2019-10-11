import React from 'react'
import ReactDOM from 'react-dom'
import Computer from './monitor.png'
import Book from './book.png'
import LinkedIn from './linkedin.png'
import GitHub from './github.png'
import Email from './mail.png'
import './Hook.css'

const Experience = ({go="https://cornell.edu", text="Cornell"}) => {
  return (
    <a className="expLink" href={go}>@{text}</a>
  )
}

const Link = ({go="https://github.com/chansen424", icon=GitHub}) => {
  return (
    <a href={go}><img alt="Book" src={icon}/></a>
  )
}

const Summary = (props) => {
  return (
    <div className="leftLine">
      <p className="summary">
        Currently developing <Experience go="https://cornelldti.org" text="CornellDTI"/>. 
        Formerly Full Stack Intern <Experience go="https://startuptree.co" text="StartupTree" />. 
        Check me out below.
      </p>
      <Link />
      <Link go="https://linkedin.com/in/christopherphansen" icon={LinkedIn} />
      <Link go="mailto:cph64@cornell.edu?subject=Website Inquiry" icon={Email}/>
    </div>
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
            Developer
            <br />
            & Bookworm.
          </h1>
          <Summary />
          {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/good-ware" title="Freepik">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
      </div>
    </div>
  )
}

const Right = (props) => {
  return (
    <div style={{backgroundColor: props.color}} className="split right">
      <div className="centered">
        <Summary />
      </div>
    </div>
  )
}

const Page = (props) => {
  return (
    <div>
      <Left />
      <Right color="orange"/>
      <Right color="#ffcc00"/>
    </div>
  )
}


ReactDOM.render(<Page />, document.getElementById('root'))
