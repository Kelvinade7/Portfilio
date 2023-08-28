import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import boot from '../images/bootstrap.png'
import js from '../images/javascript.png'
import re from '../images/react.png'
import gi from '../images/github.png'
import {Card} from 'react-bootstrap'
const Skills = () => {
  return (
    <div id='skills'>
        <center><h2 style={{color:'white'}} className='m-h'>Skills</h2></center>
        <p style={{color:'red'}} className='a-p'>This are the languages i'm experienced in </p> 
         <div class='container'>
            <div class='row'>
              <div class='col-lg-4 col-md-6 col-xs-12'>
                <Card className='cardi'>
                  <Card.Img src={html} className='card-img'/>
                  <Card.Title className='card-h'>
                    <h3>HTML</h3>
                  </Card.Title>
                  <Card.Text className='card-p'>
                    <p>Highly Experienced</p>
                  </Card.Text>
                </Card>
              </div>
              <div class='col-lg-4 col-md-6 col-xs-12'>
                <Card className='cardi'>
                  <Card.Img src={css} className='card-img'/>
                  <Card.Title className='card-h'>
                  <h3>CSS</h3>
                  </Card.Title>
                  <Card.Text className='card-p'>
                    <p>Highly Experienced</p>
                  </Card.Text>
                </Card>
              </div>
              <div class='col-lg-4 col-md-6 col-xs-12'>
                <Card className='cardi'>
                  <Card.Img src={js} className='card-img'/>
                  <Card.Title className='card-h'>
                    <h3>JAVASCRIPT</h3>
                  </Card.Title>
                  <Card.Text className='card-p'>
                    <p>Experienced</p>
                  </Card.Text>
                </Card>
              </div>
              <div class='col-lg-4 col-md-6 col-xs-12'>
                <Card className='cardi'>
                  <Card.Img src={boot} className='card-img'/>
                  <Card.Title className='card-h'>
                    <h3>BOOTSTRAP</h3>
                  </Card.Title>
                  <Card.Text className='card-p'>
                    <p>Experienced</p>
                  </Card.Text>
                </Card>
              </div>
              <div class='col-lg-4 col-md-6 col-xs-12'>
                <Card className='cardi'>
                  <Card.Img src={re} className='card-img'/>
                  <Card.Title className='card-h'>
                    <h3>REACT</h3>
                  </Card.Title>
                  <Card.Text className='card-p'>
                    <p>EXtremly Experienced</p>
                  </Card.Text>
                </Card>
              </div>
              <div class='col-lg-4 col-md-6 col-xs-12'>
                <Card className='cardi'>
                  <Card.Img src={gi} className='card-img'/>
                  <Card.Title className='card-h'>
                    <h3>GITHUB</h3>
                    </Card.Title>
                  <Card.Text className='card-p'>
                    <p>Experienced</p>
                  </Card.Text>
                </Card>
              </div>
             
            </div>
            
         </div>
         <p className='a-p'style={{color:'white',marginTop:'20px'}}>A little bit experienced with
         Express,Nodejs,Mongoose and React Native</p>
    </div>
  )
}

export default Skills