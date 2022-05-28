import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Nav } from "../../components/navbar/Nav";
import "./Hotels.css";

export const Hotels = () => {
  return (
    <div>
      <Nav />
      <Header type="list" />
    </div>
  );
};
