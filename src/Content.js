import React from 'react'

const Content = () => {
    function handlename(){
        const names = ['Earn','Grow',"Give"]
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    const handleClick = (e) =>{
        console.log(e)
    }
    const handleClick2 = (name) =>{
        console.log(`Thanks for the subscribes ${name}`)
    }
  return (
    <main>
        <p onDoubleClick={()=> handleClick2('thiru')}>Lets {handlename()} Money</p>
        <button onClick={(e) => handleClick(e)}>Subscribe</button>
    </main>
  ) 
}

export default Content