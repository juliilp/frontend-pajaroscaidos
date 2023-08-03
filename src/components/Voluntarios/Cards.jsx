import React from "react";
import { Card } from "./_Card";

const Cards = ({ currentCards }) => {
  return (
    <div>
      {currentCards.map((user) => (
        <Card
          key={user.id}
          name={user.first_name}
          avatar={user.avatar}
          description={user.description}
        />
      ))}
    </div>
  );
};

export default Cards;
