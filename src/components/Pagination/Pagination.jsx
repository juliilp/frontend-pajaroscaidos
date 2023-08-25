import React from "react";

const Pagination = ({ cardsPerPage, allCards, pagination }) => {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(allCards / cardsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <div>
        {pageNumber &&
          pageNumber.map((a) => {
            return (
              <div key={a}>
                <button onClick={() => pagination(a)} href="number page">
                  {a}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
