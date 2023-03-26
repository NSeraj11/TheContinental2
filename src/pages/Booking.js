import React,{useRef} from 'react'
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css'
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import emailjs from '@emailjs/browser';


function Booking() {

  const form = useRef();

  const sendEmail = (e) => {
  

  emailjs.sendForm('service_l8gt0pa', 'template_6rgs1n9', form.current, '34uT-EcuAvUdIaDar')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <Main>
        <div className='reservations'>
            <CheckIn />
            <CheckOut />
        </div>
        <div className='contact-form'>
            <h1>Information</h1> 
            <form ref={form} onSubmit={sendEmail}>
                <input className="name-input" placeholder='John Smith' type="text" name="user_name" />
                <input placeholder='JSmith21@email.com' className="email-input" type="email" name="user_email" />
                <textarea placeholder="Any extra information that you would like us to know?" className="message-input" name="message" />
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    </Main>
  )
}

const Main = styled.div`
    width:100%;

    .reservations{
        display:flex;
        justify-content:space-around;

        @media(max-width:700px){
            display:block;
        }
    }

    .contact-form form{
        display:flex;
        flex-direction:column;
        padding:20px;

        input{
            padding:20px;
        }
    }
`;

export default Booking