import { Form } from "react-router-dom";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './Aboutus';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import '../style/header.css';
import Aboutus from '../Components/Aboutus'



const Header = ({onLinkClick }) =>{

    const [position, setPosition] = useState({bottom:0, left:12});

    const handleClick = (page) => {
        if (page === 'home'){
            setPosition({bottom: 0, left: 12});
        } else if(page === 'about'){
            
            setPosition({bottom: 0, left: 45.5});
        }else if (page === 'contact'){
            setPosition({bottom: 0, left: 80});
        }else{
            console.log('Unknown link');
        }
    }

    return(
        <Router>
            <nav className="header">
                
                <ul className="nav-links">
                    
                    <li className="home" onClick={onLinkClick}>
                        <Link to='/home' onClick={() => handleClick('home')} >
                            <p>Home</p>
                        </Link>
                        
                    </li>
                    <li className="about-us" onClick={onLinkClick}>
                        <Link to='/about' onClick={() => handleClick('about')}>
                            <p>About us</p>
                        </Link>
                    </li>
                    <li className="contact" onClick={onLinkClick}>
                        <Link to='/contact' onClick={() => handleClick('contact')}>
                            <p>Contact</p>
                        </Link>
                    </li>
                    <div className="underline"
                        style= {{
                            
                            bottom: `${position.bottom}%`,
                            left: `${position.left}%`,
                            
                        }}
                    >
                            
                    </div>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/home" element= {<Home/>}/>
                <Route path="/about" 
                element={
                    <Aboutus 
                        name="Clyde Timothy" 
                        age="20" bio="UI/UX Designer" 
                        likes="69" 
                        following="500"
                        followers="29"
                        link="data:image/jpeg;base64,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"
                    />
                    
                }
                    
                />
                <Route path="/contact" element={<Contact/>} />
            </Routes>

        </Router>
        
    );
}



export default Header