import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  
  return (
    <Main>
        <h2>The Continental</h2>
        <Book to={"/booking"}>Book Now</Book>
        <nav>
            <Sections to={"/"}>Home</Sections>
            <Sections to={"/area"}>Area and Activities</Sections>
            <Sections to={"/rooms"}>Rooms</Sections>
            <Sections to={"/menu"}>la Trilogie</Sections>
        </nav>
    </Main>
  )
}

const Main = styled.div`
    width:100%;

    h2{
        color:#040439
    }

    nav{
        background:#040439;
        padding:10px;

    }
`;

const Book = styled(NavLink)`
    background:#040439;
    color: #EBEBEB;
    position:relative;
    height:20px;
    float:right;
    text-decoration:none;
    top:-40px;
    padding:5px;
    right:5px;
    border-radius:20px;

    @media(max-width:425px){
        position:relative;
        right:10px;
    }
`;

const Sections = styled(NavLink)`
    color:white;
    margin-right:50px;
    font-size:20px;
    text-decoration:none;
    position:relative;

    @media(max-width:700px){
            font-size:16px;
            display:flex;
        }
`;

export default Navbar