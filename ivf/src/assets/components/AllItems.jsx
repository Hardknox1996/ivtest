import React, { useEffect, useState } from "react";
import { Item } from "./Item";



export const AllItems = (props) => {
  let products = props.productsList
  return (
    <div className="listofitems">
      {products.map((p, idx) => {
        return <Item data={p} key={idx} />;
      })}
      {/* <Item/>
      <Item/>
      <Item/> */}
    </div>
  );
};
