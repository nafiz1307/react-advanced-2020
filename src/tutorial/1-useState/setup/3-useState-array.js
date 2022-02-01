import React from "react";
import { data } from "../../../data";
import { useEffect, useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAll = () => {
    setPeople([]);
  };

  const sortPeople=()=>{
    let tempArray = [...people];
    tempArray.sort((a, b) => {
      let fa = a.name.toLowerCase();
      let fb = b.name.toLocaleLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    console.log(tempArray)
    setPeople(tempArray);
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}> Remove </button>
          </div>
        );
      })}
      {/* <button className="btn" onClick={()=>setPeople([])}>Clear Items</button> */}
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
      <button className="btn" onClick={sortPeople}>
        Sort
      </button>
    </div>
  );
};

export default UseStateArray;
