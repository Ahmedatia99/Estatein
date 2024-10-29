import React from "react";
import DefineCompo from "../../atoms/DefineCompo";
import QuestionCard from "./QuestionCard";
import { Element } from "react-scroll";
export default function Questions() {
  return (
    <Element name="questions">
      <section className="container mx-auto pt-20">
        <DefineCompo
          title="Frequently Asked Questions"
          description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          value={false}
          stars={true}
        />
      </section>
      <section>
        <QuestionCard />
      </section>
    </Element>
  );
}
