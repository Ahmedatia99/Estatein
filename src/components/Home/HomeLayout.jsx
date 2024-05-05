import React from "react";
import Header from "./atom/Header";
import Featureprop from "./atom/Featureprop"
export default function HomeLayout() {
  return (
    <main>
      <section className="px-5">
        <Header />
        <Featureprop />
      </section>
    </main>
  );
}
