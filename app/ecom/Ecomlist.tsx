import { useState } from "react";
import Ecoclick from "./eco";

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return data;
}
async function getDataCategory() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  const data = await res.json();

  return data;
}

const Ecomlist = async () => {
  const dataProduct = await getData();
  const dataCategory = await getDataCategory();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-x-5">
        <Ecoclick key={0} text="all" />
        {dataCategory.map((e: any, i: any) => (
          <Ecoclick key={i} text={e} />
        ))}
      </div>
      <div>
        {dataProduct.map((e: any) => (
          <div key={e.id}>
            <p>{e.title}</p>
            <p>{e.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecomlist;
