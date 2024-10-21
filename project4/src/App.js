import React from 'react'
import {fruits} from './Fruits'
import Button1 from './Button1';

const items = fruits.map(fruit=>
    <li key={fruit.id} style={
        {color:fruit.local?'Green': 'Red'}}>
        <b>Name:</b>{fruit.name}<br/> 
        <b>Price:</b>{fruit.price}</li>
)


function MyButton(){
    function HandleClick(){
        alert ("You have clicked");
    }
    return (
        <button className='blue' onClick={HandleClick}>Click Here</button>
    )
}



    const user = {
        name:"Abu Saleh Amir",
        imgUrl:"images/hania.jpg",
        imgSize:100
    }

export default function App() {
  return (
    <>
    <div> Welcome to my App</div>
    <MyButton></MyButton>
    <h1>{ user.name}</h1>
    <img src={user.imgUrl} alt="{user.name}" style={{width:'250px'}}/>
    <hr />
    <ul>{items}</ul>
    <Button1/>
    <br/><br/>
    <Button1/>
    </>
  )
}
