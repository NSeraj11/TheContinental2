import React from 'react'
import styled from 'styled-components'
import DC from '../assets/images/dc-banner.jpeg'
import Monument from '../assets/images/monument-1.jpeg'
import Museum from '../assets/images/museum-1.jpeg'
import Restaurant from '../assets/images/restaurant.jpeg'
import Zoo from '../assets/images/zoo.jpeg'
import Arena from '../assets/images/arena.jpeg'

function Area() {
  return (
    <Main>
      <div className='area-container'>
        <div className='left'>
        <h3>Restaurants</h3>
                <ul>
                    <li><a href="">Founding Farmers DC</a></li>
                    <br />
                    <li><a href="">Benihana</a></li>
                    <br />
                    <li><a href="">Le Diplomate</a></li>
                    <br />
                    <li><a href="">The Capitol Grille</a></li>
                </ul>
        </div>
        <div className='center'>
          <img src={DC} alt="" />
        </div>
        <div className='right'>
        <h3>Fun</h3>
                <ul>
                    <li><a href="">African American History and Culture Museum</a></li>
                    <br />
                    <li><a href="">National Museum of Asian Art</a></li>
                    <br />
                    <li><a href="">National Muesum of American Indian</a></li>
                    <br />
                    <li><a href="">Smithsonian Museum</a></li>
                    <br />
                    <li><a href="">National Mall</a></li>
                </ul>
        </div>
      </div>
      <div className='activities-container'>
        <div className='activities'>
         <div class="image-container">
            <img src={Monument} alt="" />
          </div>
          <div class="text-container">
            <h3>Visit the Monuments!</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
            <p> Quaerat iure mollitia cumque!</p>
            <button>Learn More</button>
          </div> 
        </div>
      </div>

      <div className='activities-container'>
        <div className='activities'>
         <div class="image-container">
            <img src={Museum} alt="" />
          </div>
          <div class="text-container">
            <h3>Visit the Museums!</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
            <p> Quaerat iure mollitia cumque!</p>
            <button>Learn More</button>
          </div> 
        </div>
      </div>

      <div className='activities-container'>
        <div className='activities'>
         <div class="image-container">
            <img src={Restaurant} alt="" />
          </div>
          <div class="text-container">
            <h3>Visit the Restaurants!</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
            <p> Quaerat iure mollitia cumque!</p>
            <button>Learn More</button>
          </div> 
        </div>
      </div>

      <div className='activities-container'>
        <div className='activities'>
         <div class="image-container">
            <img src={Zoo} alt="" />
          </div>
          <div class="text-container">
            <h3>Visit the Zoo!</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
            <p> Quaerat iure mollitia cumque!</p>
            <button>Learn More</button>
          </div> 
        </div>
      </div>

      <div className='activities-container'>
        <div className='activities'>
         <div class="image-container">
            <img src={Arena} alt="" />
          </div>
          <div class="text-container">
            <h3>Visit the Arena!</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
            <p> Quaerat iure mollitia cumque!</p>
            <button>Learn More</button>
          </div> 
        </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
    width:100%;   
    .area-container{
        display:flex;

        @media(max-width:700px){
          display:block;
        }

        .left{
          position:relative;
          left:40px;

          @media(max-width:700px){
            left:90px;
          }

          h3{
            position:relative;
            left:55px;
          }

          ul{
            list-style-type:none;

            li a{
              text-decoration:none;
              color:black;
            }
          }
        }


        .center img{
          height:400px;
          margin-top:10px;
          width:600px;
          position:relative;
          left:130px;

          @media(max-width:700px){
            height:200px;
            width:300px;
          }
        }

        .right{
          position:relative;
          left:130px;

          @media(max-width:700px){
            left:90px;
          }

          h3{
            position:relative;
            left:150px;

            @media(max-width:700px){
            left:50px;
          }
          }

          ul{
            list-style-type:none;

            li a{
              text-decoration:none;
              color:black;
            }
          }
        }
    }

    .activities-container{
      background-color:white;
      width:60%;
      position:relative;
      left:20%;
      border-radius:20px;
      height:200px;
      margin:20px;
      display:flex;

      @media(max-width:700px){
        background-color:transparent;
        margin-bottom:150px;
      }



      .image-container img{
        height: 200px;
        width:300px;
        border-radius:20px;

        @media(max-width:700px){
          
        }
      }

      .text-container{
        position:relative;
        left:350px;
        top:-200px;

        h3{
          @media(max-width:700px){
            position:relative;
            left:-290px;
            top:200px;
          }
        }

        p{
          @media(max-width:700px){
            color:#EBEBEB;
            
          }
        }

        button{
          @media(max-width:700px){
            border:none;
            color:#EBEBEB;
          }
        }


      }
    }
`
export default Area;