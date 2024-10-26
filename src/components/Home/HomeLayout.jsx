import React from "react";
import Header from "./atom/Header";
import Featureprop from "./atom/Featureprop";
import Feature from "./atom/Feature";
import Comments from "./atom/Comments";
import Questions from "./atom/Questions";
import CTA from "../atoms/CTA";
export default function HomeLayout() {
  return (
    <main>
      <section className="px-5">
        <Header />
        <Featureprop />
        <Feature />
        <Comments />
        <Questions />
        <CTA />
      </section>
    </main>
  );
}
