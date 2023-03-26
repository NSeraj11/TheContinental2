import React from 'react'
import styled from 'styled-components';
import HotelFront from '../assets/images/Continental-Front.png'
import Pets from '../assets/images/pets.jpeg'
import Wifi from '../assets/images/wifi.jpeg'
import CS from '../assets/images/car-service.jpeg'
import RS from '../assets/images/room-service.jpeg'

function Home() {
  return (
    <Main>
      <img src={HotelFront} />
      <h3>Experience the Difference</h3>
      <div className='circle-container'>
        <div className='circle-feature'>
          <img src={Pets} alt="" />
          <h5>All Pets Welcome</h5>
        </div>
        <div className='circle-feature'>
          <img src={Wifi} alt="" />
          <h5>Free Hotel Wifi</h5>
        </div>
        <div className='circle-feature'>
          <img src={CS} alt="" />
          <h5>Car and Shuttle Service</h5>
        </div>
        <div className='circle-feature'>
          <img src={RS} alt="" />
          <h5>24/7 Room Service</h5>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
    width:100%;
    
    img{
      height:500px;
      max-width:400px;
      margin-top:10px;
      position:relative;
      left:35%;

      @media(max-width:700px){
        left:50px;
      }
    }

    h3{
      color:white;
      padding:15px;
      text-align:center;
      background:#040439;
      margin-bottom:0;
    }

    .circle-container{
      display:flex;
      background:#040439;
      margin-top:0;

    
      .circle-feature{
        margin-right:25%;

        @media(max-width:700px){
          margin-right:25px;
      }

        img{
          height:60px;
          width:60px;
          border-radius:15px;
        }

        h5{
          font-size:12px;
          position:relative;
          top:-15px;
          left:25px;
          color:white;

          @media(max-width:700px){
            font-size:10px;
            left:50px;

      }
        }
      }
    }
`;

export default Home