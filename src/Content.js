import React from 'react';
import { useState } from 'react';

const Content = () => {
    function handlename(){
        const names = ['Earn','Grow',"Give"]
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    /*const handleClick = (e) =>{
        console.log(e)
    }
    const handleClick2 = (name) =>{
        console.log(`Thanks for the subscribe ${name}`)
    }*/

    const [count, setCount] = useState(0);
    function incrementFunction(){
        setCount((count) => {return count + 1});
        setCount((count) => {return count + 1});
        setCount((count) => {return count + 1});
    }
  return (
    <main>
        {/* <p onDoubleClick={()=> handleClick2('thiru')}>Lets {handlename()} Money</p>
        <button onClick={(e) => handleClick(e)}>Subscribe</button> */}

        <p>Lets Earn Money</p>
        <button>Subscribe</button>
        <button>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction()}>+</button>
    </main>
  ) 
}

export default Content