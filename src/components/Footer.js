import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Main>
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <p>Email:continental-contact@gmail.com</p>
            <p>Front Desk:703-444-4444</p>
            <p>Events: 703-422-2222</p>
            <p>La Trilogie: 703-113-1111</p>
        </div>
        <div className="footer-column">
            <h4>More Information</h4>
            <p>Privacy Policy</p>
            <p>About</p>
        </div>
        <div className="footer-column">
            <h4>Sister Properties</h4>
            <br />
            <p>Skypiercer</p>
        </div>
    </Main>
  )
}

const Main = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    position:relative;
    background:black;
    color:white;

    .footer-column{
         @media(max-width:700px){
            padding:10px;
        }
    }
    
`;

export default Footer