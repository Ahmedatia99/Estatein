import React from "react";
import FindProperty from "./atoms/FindProperty";
import HotelCard from "../atoms/HotelCard"
export default function PropertiesLayout() {
  return (
    <main className="">
      <FindProperty />
      <HotelCard />
    </main>
  );
}
