import React, {useState} from "react";

function Item({ name, category }) {

  const [add, setAdd] = useState(false);

  function handleAdd(){

    setAdd((add) => !add)

  }

  const className = add ? "in-cart" : "" ;
  const btnName = add ? "Remove From Cart" : "Add to Cart"


  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{btnName}</button>
    </li>
  );
}

export default Item;
