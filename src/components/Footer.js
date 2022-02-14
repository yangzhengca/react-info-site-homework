import React from 'react'
import twitter from "./images/Twitter-Icon.png"
import facebook from "./images/Facebook-Icon.png"
import github from "./images/GitHub-Icon.png"
import instagram from "./images/Instagram-Icon.png"

const Footer = () => {
  return (
    // <div className='footer'>
    //   <a className='social-icon twitter'><i className='fa fa-twitter-square'></i></a>
    //   <a className='social-icon facebook'><i className='fa fa-facebook-square'></i></a>
    //   <a className='social-icon instagram'><i className='fa fa-github'></i></a>
    //   <a><i className='fa fa-github-square' ></i></a>
    // </div>
    <div className='footer'>
    <a className='social-icon twitter'><img src={twitter}></img></a>
    <a className='social-icon facebook'><img src={facebook}></img></a>
    <a className='social-icon instagram'><img src={instagram}></img></a>
    <a className='social-icon github'><img src={github}></img></a>
    
  </div>
  )
}

export default Footer