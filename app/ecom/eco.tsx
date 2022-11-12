"use client";

import React, { useState } from "react";

interface PageProps {
  text: string;
  key?: number;
}

const Ecoclick = ({ text }: PageProps) => {
  const [klik, setKlik] = useState("");
  const btnClick = (e: any) => {
    setKlik(e);
    console.log(klik);
  };

  return (
    <button onClick={(e: any) => btnClick(e.target.innerHTML)}>{text}</button>
  );
};

export default Ecoclick;
