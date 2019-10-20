import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Computer from './monitor.png'
import Book from './book.png'
import LinkedIn from './linkedin.png'
import GitHub from './github.png'
import Email from './mail.png'
import Bookshelf from './bookshelf.png'
import StartupTree from './startuptree-tree.png'
import ASCII from './ascii.jpg'
import DTI from './dti.png'
import './Hook.css'

const Experience = ({go="https://cornell.edu", text="Cornell"}) => {
  return (
    <a className="expLink" href={go} target="_blank" rel="noopener noreferrer">@{text}</a>
  )
}

const Link = ({go="https://github.com/chansen424", icon=GitHub}) => {
  return (
    <a href={go}><img alt="Logo" src={icon}/></a>
  )
}

const Summary = (props) => {
  return (
    <div className="leftLine">
      <p className="summary">
        Currently developing <Experience go="https://cornelldti.org" text="CornellDTI"/>. 
        Member <Experience go="https://chc.cs.cornell.edu" text="CHC" />.  
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
      <div className="leftCenter">
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

const Right = ({color="#fff", title="Title", img, tcolor="#000", summary, tag}) => {
  return (
    <div style={{backgroundColor: color}} className="in">
      <div className="centered">
        <div className="leftLine">
          <img className="showcase" alt="showcase" src={img} />
          <h1 style={{color: tcolor}}>{title}</h1>
          <p style={{color: tcolor, marginBottom: 10}} className="summary">{tag}</p>
          <p style={{color: tcolor}} className="summary">{summary}</p>
        </div>
      </div>
    </div>
  )
}

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt: String.fromCodePoint(9646)
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.blink(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  blink() {
    this.setState((state) => ({
      prompt: state.prompt === "" ? String.fromCodePoint(9646) : ""
    }))
  }

  render() {
    const template = `C:\\Cornell\\Cybersecurity_Club>${this.state.prompt}`
    return (
      <Right color="#000" tcolor="#fff" title="Current Member" img={ASCII}
      tag={template}
      summary="Meeting place to share knowledge about computer security and ethical hacking." />
    )
  }
}

const panels = [
  {
    color: "#91f8ff",
    title: "About Me",
    img: Bookshelf,
    tag: `Computer Science Student at Cornell ${String.fromCodePoint(128187)}${String.fromCodePoint(127891)}`,
    summary: `Hi, I'm Christopher Hansen! I am currently pursuing a career in web development, I collect books ${String.fromCodePoint(128218)}, and I love punk rock music ${String.fromCodePoint(127928)}!`
  },
  {
    color:"#e34840",
    title: "Design & Tech Initiative",
    img: DTI,
    tag: "Creating Technology for Community Impact",
    summary: `Currently developing for Carriage, a ride scheduling ${String.fromCodePoint(128663)} application to help disabled ${String.fromCodePoint(9855)} students navigate campus.`
  },
  {
    color: "#fff",
    title: "Full Stack",
    img: StartupTree,
    tag: "Fostering the University Entrepreneurship Ecosystem",
    summary: `Worked alongside designer, product manager, and other programmers to help young entrepreneurs grow their businesses and themselves.`
  }
]

const Page = (props) => {
  return (
    <div>
      <Left />
      <div className="scroll split right">

        {panels.map((elem) => 
          <Right key={elem.title} color={elem.color} title={elem.title} img={elem.img}
            tag={elem.tag} summary={elem.summary} />
        )}

        <Terminal />

      </div>
    </div>
  )
}

ReactDOM.render(<BrowserRouter basename={window.location.pathname || ''}><Route exact path="/" component={Page} /></BrowserRouter>, document.getElementById('root'))
