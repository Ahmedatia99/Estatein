import React from "react";
import DefineCompo from "../../atoms/DefineCompo";
import CommentCard from "../../atoms/CommentCard";

export default function Comments() {
  return (
    <main>
      <section className="container mx-auto pt-20">
        <DefineCompo
          title="What Our Clients Say"
          description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          value={true}
          stars={true}
          variants="secondry"
          action={"View All Testimonials"}
        />
      </section>
      <section className="pt-8">
        <CommentCard />
      </section>
    </main>
  );
}
