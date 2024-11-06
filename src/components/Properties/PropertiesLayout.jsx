import React from "react";
import FindProperty from "./atoms/FindProperty";
import HotelCard from "../atoms/HotelCard";
import SearchProp from "./atoms/SearchProp";
export default function PropertiesLayout() {
  return (
    <main className="">
      <FindProperty />
      <SearchProp />
      <HotelCard />
    </main>
  );
}
