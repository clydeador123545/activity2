import React, { useState } from 'react';
import '../style/home.css'

function Home(){
    const [count, setCount ] = useState(0);
    

    return(
        <div className="body">
            <p className='count'>{count}</p>
            <button onClick={() => setCount (count + 1)}>Click me</button>
            <button onClick={() => setCount (prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount (prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCount (count => 0)}>reset</button>
        </div>
    );
}

export default Home
