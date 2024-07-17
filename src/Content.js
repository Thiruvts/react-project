import React from 'react';
import { useState } from 'react';
import { FaTrashRestore } from "react-icons/fa";


const Content = () => {
  /*const [name, setName] = useState("Earn");
    function handlename(){
        const names = ['Earn','Grow',"Give"]
        const int = Math.floor(Math.random()*3);
        setName(names[int]) ;
      }
    const handleClick = (e) =>{
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
      const [items, setItems] = useState(
        [
        {id:1,
        checked: false,
        item: "codeing1"
        },
        {id:2,
        checked: true,
        item: "cricket"
        },
        {id:3,
        checked: true,
        item: "Learn AI"
        }
        
        ])

        const handlecheck = (id) =>{
          const listitem = items.map((item) => item.id===id?{...item, checked:!item.checked} : item)
          setItems(listitem)
        }
        
  return (
    <main>
        {/* <p onDoubleClick={()=> handleClick2('thiru')}>Lets {handlename()} Money</p>
        <button onClick={(e) => handleClick(e)}>Subscribe</button>

        <p>Lets {name} Money</p>
        <button onClick={handlename}>Subscribe</button>
        <button onClick={decrementFunction()}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction()}>+</button>*/}
        <ul>
{items.map((item)=>(
<li className='item' key={item.id}>
<input type="checkbox" onChange={() => handlecheck(item.id)} checked={item.checked} />
<label>{item.item}</label>
<FaTrashRestore 
role = "button" tabIndex="0" />
</li>
))}
 
</ul>


    </main>
  ) 
}

export default Content