import React from 'react'
import styled from 'styled-components'
import snails from '../assets/images/escargot.jpeg'
import squid from '../assets/images/squid.jpeg'
import duck from '../assets/images/duck.jpeg'
import pissaladiere from '../assets/images/pissaladiere.jpeg'
import gougere from '../assets/images/gougere.jpeg'
import steak from '../assets/images/steak.jpeg'
import confit from '../assets/images/confit.jpeg'
import fos from '../assets/images/fos.jpeg'
import Bouillabaisse from '../assets/images/Bouillabaisse.jpeg'
import beef from '../assets/images/beef.jpeg'
import cremebrulee from '../assets/images/cremebrulee.jpeg'
import galette from '../assets/images/galette.jpeg'
import flan from '../assets/images/flan.jpeg'



function Menu() {


  return (
    <Container>
        <div className='menu-group'>
            <h3>Apartifs</h3>
            <div className='menu-item'>
                <img className="menu-item-image" src={snails} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Escargots a la Bourguignonne</span>
                        <span className="menu-item-price">$8.00</span>
                    </h4>
                    <p className="menu-item-description">Snails in garlic-herb butter </p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={squid} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Provençal Stuffed Squid</span>
                        <span className="menu-item-price">$7.50</span>
                    </h4>
                    <p className="menu-item-description">Fresh squid stuffed with herbs,chard, and bread crumbs</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={duck} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Duck Pâté en Croûte</span>
                        <span className="menu-item-price">$10.00</span>
                    </h4>
                    <p className="menu-item-description">A stuffed dish that will have you fighting away others at your table</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={pissaladiere} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Pissaladière</span>
                        <span className="menu-item-price">$10.00</span>
                    </h4>
                    <p className="menu-item-description">Flavorful dish consisting of a trifecta of anchovies,olives, and carmelized onions</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={gougere} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Gougères</span>
                        <span className="menu-item-price">$9.00</span>
                    </h4>
                    <p className="menu-item-description">One of our countries best snacks, chickpea fries</p>
                </div>
            </div>      
        </div>

        <div className='menu-group'>
            <h3>Entrées principales</h3>
            <div className='menu-item'>
                <img className="menu-item-image" src={steak} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Steak Frites</span>
                        <span className="menu-item-price">$18.00</span>
                    </h4>
                    <p className="menu-item-description">A simple yet delicous recipe served with fries</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={confit} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Chicken Confit</span>
                        <span className="menu-item-price">$26.00</span>
                    </h4>
                    <p className="menu-item-description">Seasoned with herbs and then cooked with olive oil</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={fos} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">French Onion Soup</span>
                        <span className="menu-item-price">$20.00</span>
                    </h4>
                    <p className="menu-item-description">Perfect on a chilly day, dive on in</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={Bouillabaisse} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Bouillabaisse</span>
                        <span className="menu-item-price">$28.00</span>
                    </h4>
                    <p className="menu-item-description">fish soup is infused with saffron, orange, thyme and chilli</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={beef} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Boeuf Bourguignon</span>
                        <span className="menu-item-price">$20.00</span>
                    </h4>
                    <p className="menu-item-description">A great stew consisting of meat and vegetables</p>
                </div>
            </div>      
        </div>
    
        <div className='menu-group'>
            <h3>la Dessert</h3>
            <div className='menu-item'>
                <img className="menu-item-image" src={cremebrulee} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Creme Brulee</span>
                        <span className="menu-item-price">$12.00</span>
                    </h4>
                    <p className="menu-item-description">Classic french dessert</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={galette} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Assorted Pastry slice</span>
                        <span className="menu-item-price">$6.00</span>
                    </h4>
                    <p className="menu-item-description">Choose from one of our delicous assorted pastries, served with coffee or tea</p>
                </div>
            </div>
            <div className='menu-item'>
                <img className="menu-item-image" src={flan} alt="snails" />
                <div className="menu-item-text">
                    <h4 className="menu-item-heading">
                        <span className="menu-item-name">Flan</span>
                        <span className="menu-item-price">$8.00</span>
                    </h4>
                    <p className="menu-item-description">Served by the slice, have 1, or 4! Served with coffee or tea</p>
                </div>
            </div>  
        </div>
    </Container>
  )
}

const Container = styled.div`
    width:100%;

    div.menu-group{
        display: grid;
        gap: 1em;
        padding: 1em 0;

        .menu-item{
            display:flex;
            border:1px solid lightgrey;

            img{
                width:80px;
                height:80px;
                margin-right:1.5em;
                position:relative;
                top:10px;
            }

            .menu-item-text{
                flex-grow:1;
                    h4{
                        display: flex;

                        .menu-item-price{
                            position:relative;
                            left:800px;
                        }
                    }
                }
            }
        }
    }
`;

export default Menu