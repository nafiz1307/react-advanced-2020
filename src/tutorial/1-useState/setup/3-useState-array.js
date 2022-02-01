import React from "react";
import { data } from "../../../data";
import { useEffect, useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem=(id)=>{
    let newPeople = people.filter((person)=>person.id!==id)
    setPeople(newPeople)
  }

  return (
    <div>
      {people.map((person) => {
        const{id,name}=person
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={()=>removeItem(id)}> Remove </button>
        </div>
      })}
      {/* <button className="btn" onClick={()=>setPeople([])}>Clear Items</button> */}
    </div>
  );
};

export default UseStateArray;
