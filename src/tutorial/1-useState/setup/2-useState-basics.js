import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState("hello World");
  // console.log(useState(value))

  const[text,setText]=useState("Click Button")
  const handleChange =()=>{
    if(text==='Click Button'){
      setText("'This Button Has been Clicked'");
    }else{
      setText("Click Button")
    }
  }
  return (
    <div>
      <h1>{text}</h1>
      <button className="btn" onClick={handleChange}>
        {text}
      </button>
    </div>
  );
};

export default UseStateBasics;
