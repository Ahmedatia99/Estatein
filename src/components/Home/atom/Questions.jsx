import React from "react";
import DefineCompo from "../../atoms/DefineCompo";
import QuestionCard from "./QuestionCard";
export default function Questions() {
  return (
    <main>
      <section className="container mx-auto pt-20">
        <DefineCompo
          title="Frequently Asked Questions"
          description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          value="true"
          action="View All FAQ’s"
          stars={true}
          variants="second"
        />
      </section>
      <section>
        <QuestionCard />
      </section>
    </main>
  );
}
