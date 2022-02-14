import React from 'react'


const Info = () => {
  return (
    <div className='info'>
        <h1 className='name'>Laura Smith</h1>
        <h4 className='title'>Frontend Developer</h4>
        <h6 className='url'>laurasmith.website</h6>
        <div className='button-group'>
            <a className='email-button button'><i className="fa fa-envelope  button-icon"></i>Email</a>

            <a className='linkedin-button button'><i className="fa fa-linkedin-square button-icon"></i>LinkedIn</a>
        </div>
    </div>
  )
}

export default Info