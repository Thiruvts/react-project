import React from 'react';
import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState("Earn");
    function handlename(){
        const names = ['Earn','Grow',"Give"]
        const int = Math.floor(Math.random()*3);
        setName(names[int]) ;
      }
    /*const handleClick = (e) =>{
        console.log(e)
    }
    const handleClick2 = (name) =>{
        console.log(`Thanks for the subscribe ${name}`)
    }

  function name(){
    console.log("thiru")
  }*/

    /*const [count, setCount] = useState(99);
    //const [name, setName] = useState(()=>name());

    function incrementFunction(){
        //setCount((count) => {return count + 1});
        setCount(prevcount => prevcount + 1);
    }
    function decrementFunction(){
      //setCount((count) => {return count + 1});
      setCount(prevcount => prevcount - 1);
    }*/
  return (
    <main>
        {/* <p onDoubleClick={()=> handleClick2('thiru')}>Lets {handlename()} Money</p>
        <button onClick={(e) => handleClick(e)}>Subscribe</button> */}

        <p>Lets {name} Money</p>
        <button onClick={handlename}>Subscribe</button>
        {/*<button onClick={decrementFunction()}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction()}>+</button>*/}
    </main>
  ) 
}

export default Content