import React from 'react'
import styled from 'styled-components'
import RoomD from '../assets/images/room-deluxe.jpeg'
import RoomP from '../assets/images/room-premier.jpeg'

function Rooms() {
  return (
    <Main>
      <div className='room-preview-container'>
        <div className='premier'>
          <img src={RoomP} />
          <h3>Book Our Deluxe Room</h3>
          <h6>Size: 320 - 440 sq.ft., 29.7 - 40.8 metres</h6>
          <p>Dining, working, or relaxing, the Deluxe Room provides home comfort with class, set against the backdrop of downtown Washington DC.</p>
          <p> Featuring a King-size bed, marble bathroom, walk-in shower, and in-mirror TV, select Deluxe rooms even boast an oversized tub to unwind in</p>
          <div class="button-container">
              <button class="reserve-room-btn">Book Room</button>
          </div>
        </div>
        <div className='deluxe'>
          <img src={RoomD} alt="" />
          <h3>Book Our Premier Room</h3>
          <h6>Size: 300 - 320 sq.ft., 27.8 - 29.7 metres</h6>
          <p>For work, rest, or play, the Premier Room offers a home away from home with a touch of class in the heart of Washington DC.</p>
          <p>Equipped with everything you and your family might need, this luxurious hotel room features a King-size bed, a well-appointed workspace, and access to our Peloton-equipped fitness center.</p>
          <div class="button-container">
              <button class="reserve-room-btn">Book Room</button>
          </div>
        </div>
      </div>
      <div className='amenities-header'>
        <h2>Amenities</h2>
        <h5>(Available in both our Deluxe and Premier rooms)</h5>
      </div>
      <div className='amenities-container'>
        <div className='amenities'>
          <ul>
            <li>Complimentary Wi-Fi</li>
            <li>Complimentary filtered bottle water</li>
            <li>iPad for in-room requests</li>
          </ul>
        </div>
        <div className='amenities'>
          <ul>
            <li>Twice-daily housekeeping</li>
            <li>Digital in-room temperature control</li>
            <li>Custom scented bath accessories</li>
          </ul>
        </div>
        <div className='amenities'>
          <ul>
            <li>Complimentary local and long distance calls</li>
            <li>Complimentary show shine</li>
          </ul>
        </div>
        <div className='amenities'>
          <ul>
            <li>Fully stocked refreshment center</li>
            <li>In-mirror bathroom televisions</li>
            <li>Dog friendly</li>
          </ul>
        </div>
      </div>
    </Main>
  )
}

const Main = styled.div`
    width:100%;
    .room-preview-container{
      display:flex;

      @media(max-width:700px){
        display:block;
      }


      img{
        height:300px;
        width:500px;
      }

      .button-container{

        .reserve-room-btn{
          padding:20px;
          background-color: #040439;
          color:white;
          border:none;
          border-radius: 30px;

          @media(max-width:700px){
            margin-bottom:20px;
          }

        }
      }
    }

    .amenities-header{
      text-align:center;
    }

    .amenities-container{
        display:flex;

        @media(max-width:700px){
          display:block;
        }

      .amenities{
      display:flex;
      background-color: #040439;
      width:25%;
      margin:15px;
      border-radius: 50px;

      @media(max-width:700px){
        width:90%;
      }

        ul{
            list-style-type: none;

            li{
                padding:10px;
                color:white;
            }
        }
      }
    }
`;

export default Rooms