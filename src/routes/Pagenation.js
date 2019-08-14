import React, { useEffect, useState, useReducer } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
const totalCount = 200;
const unit = 5;
let start = 0;

// const makePage = (seed = 0) => {
//   console.log("seed: ", seed);
//   let items = [];
//   let current = seed * unit;
//   console.log("current: ", seed);
//   for (let number = 1; number <= unit; number++) {
//     if (current > totalCount) break;
//     items.push(
//       <PaginationItem key={current + number}>
//         <PaginationLink href="#">{current + number}</PaginationLink>
//       </PaginationItem>
//     );
//   }
//   return items;
// };

function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "NEXT":
      // console.log("NEXT");
      return { value: state.value + 1 };
    case "PREVIOUS":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Pagenation = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const [items, setItems] = useState([]);
  return (
    <div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            href="#"
            onClick={
              state.value > 0 ? () => dispatch({ type: "PREVIOUS" }) : null
            }
          />
        </PaginationItem>
        {items}
        <PaginationItem>
          <PaginationLink
            next
            href="#"
            onClick={
              state.value < totalCount / unit
                ? () => dispatch({ type: "NEXT" })
                : null
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            href="#"
            // onClick={() => setSeed(Math.ceil(totalCount / 5) - 1)}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default Pagenation;
