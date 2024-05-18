import React from "react";
import Header from "./atom/Header";
import Featureprop from "./atom/Featureprop"
import Feature from "./atom/Feature"
export default function HomeLayout() {
  return (
    <main>
      <section className="px-5">
        <Header />
        <Featureprop />
        <Feature />
      </section>
    </main>
  );
}
