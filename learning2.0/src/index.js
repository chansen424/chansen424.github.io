import React from 'react'
import ReactDOM from 'react-dom'
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

const Page = (props) => {
  return (
    <div>
      <Left />
      <div className="scroll split right">

        <Right color="#91f8ff" title="About Me" img={Bookshelf} 
        tag="Computer Science Student at Cornell &#128187;&#127891;"
        summary="Hi, I'm Christopher Hansen! I am currently pursuing a career in 
          web development, I collect books &#128218;, and I love punk rock music &#127928;!" />

        <Right color="#e34840" title="Design & Tech Initiative" img={DTI} 
          tag="Creating Technology for Community Impact"
          summary="Currently developing for Carriage, a ride scheduling 
            &#128663; application to help disabled &#9855; students navigate campus." />

        <Right color="#fff" title="Full Stack" img={StartupTree} 
        tag="Fostering the University Entrepreneurship Ecosystem"
        summary="Worked alongside designer, product manager, and other 
          programmers to help young entrepreneurs grow their businesses and themselves." />

        <Right color="#000" tcolor="#fff" title="Current Member" img={ASCII}
        tag="C:\\Cornell\\Cybersecurity_Club>&#9646;"
        summary="Meeting place to share knowledge about computer security and ethical hacking." />

      </div>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))
