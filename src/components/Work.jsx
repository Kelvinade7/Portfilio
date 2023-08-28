import React from 'react'
import sign from '../images/sign.png'
import port from '../images/portfolio.png'
import dine from '../images/diner.png'
import ong from '../images/ong.png'
import { Card } from 'react-bootstrap'

const Work = () => {
  return (
    <div id='work'>
       <center><h2 style={{color:'white'}} className='m-h'>Work</h2></center>
       <p style={{color:'red'}} className='a-p'>Some of my works</p> 
       <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-xs-12'>
            <Card className='wc'>
              <Card.Img src={sign} alt='img' className='cardi-img'/>
              <Card.Header className='card-h'>Sign Up Pages</Card.Header>
              <div className='wc-links'>
              <Card.Link ><a href='https://chopper-byy7.vercel.app/' target='_blank' className='wc-link'>View</a></Card.Link>
              <Card.Link ><a href='https://github.com/Kelvinade7/chopper' target='_blank' className='wc-link'>Codes</a></Card.Link>
              </div>
            </Card>
          </div>
          <div className='col-lg-4 col-md-6 col-xs-12'>
            <Card className='wc'>
              <Card.Img src={port} alt='img' className='cardi-img'/>
              <Card.Header className='card-h'> Business Portfolios</Card.Header>
              <div className='wc-links'>
              <Card.Link className='wc-link'><a href='https://tg-tech.vercel.app/' target='_blank' className='wc-link'>View</a></Card.Link>
              <Card.Link className='wc-link'><a href='https://github.com/Kelvinade7/TGTech' className='wc-link' >Codes</a></Card.Link>

              </div>
            </Card>
          </div>
          <div className='col-lg-4 col-md-6 col-xs-12'>
            <Card className='wc'>
              <Card.Img src={dine} alt='img' className='cardi-img'/>
              <Card.Header className='card-h'>Firms Pages</Card.Header>
             <div className='wc-links'>
             <Card.Link className='wc-link'><a href='https://diner-kelvinade7.vercel.app/' target='_blank' className='wc-link'>View</a></Card.Link>
              <Card.Link className='wc-link'><a href='https://github.com/Kelvinade7/diner' target='_blank' className='wc-link'>Codes</a></Card.Link>
             </div>
            </Card>
          </div>
          <div className='col-lg-4 col-md-6 col-xs-12'>
            <Card className='wc'>
              <Card.Img className='cardi-img' alt='img' src={ong}/>
              <Card.Header className='card-h'>PC Websites</Card.Header>
              <div className='wc-links'>
              <Card.Link className='wc-link'><a href='https://on-god-kelvinade7.vercel.app/' target='_blank' className='wc-link'>View</a></Card.Link>
              <Card.Link className='wc-link'><a href='https://github.com/Kelvinade7/onGod' target='_blank' className='wc-link'>Codes</a></Card.Link>
              </div>
            </Card>

          </div>
        </div>


       </div>
    </div>
  )
}

export default Work