import React from "react";
import Card from './Card';

const CardList = ({ robots } ) => {
  if (!true) {
    throw new Error ('noooo!');
  }
  return (
    <div>
      { robots.map((users, i) => {
          return (
            <Card 
              key={i}
              id={robots[i].id} 
              name={robots[i].name} 
              birthdate={robots[i].birthdate} 
              email={robots[i].email}
            />
          );
        })
      }
    </div>  
  );
}

export default CardList;