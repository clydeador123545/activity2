import logo from './logo.svg';
import './App.css';
import Pagenotfound from './Components/pagenotfound'
import Header from './Components/Header'
import SadEmoji from './Components/img/image.png'
import React, { useState } from 'react';


function App() {
  const [showPageNotFound, setShowPageNotFound] = useState(true);
  const handleLinkClick = () =>{
    setShowPageNotFound(false);
  }
  return (
    <div className='body'>
      <Header onLinkClick={handleLinkClick}/>
      {showPageNotFound && <Pagenotfound img={SadEmoji} />}
    </div>
  );
}

export default App;
