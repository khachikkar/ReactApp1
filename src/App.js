import logo from './logo.svg';
import './App.css';
import Cart from './Cart/cart';
import Prod from './Product/product';
import React, { useState } from 'react';


function App() {
let data = [{has:true, name:"aziz"},{has:false, name:"baziz"},{has:true, name:"gaziz"},]
const [value, setValue]= useState(0)
const increment = () => {
  setValue(value+1)
}
  return (
    <div className="App">
      
      <Cart value={value}/>
      {data.map((item)=><Prod mess={item} increment={increment}/>)}

    </div>
  );
}

export default App;