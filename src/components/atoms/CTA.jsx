import React from "react";
import DefineCompo from "./DefineCompo";
import "../../assets/style/main.css";

export default function CTA() {
  return (
    <main className=" cta border-t border-b border-stroke mt-20 ">
      <section className="laptop:py-20 tablet:py-12 mobile:py-10 container mx-auto  ">
        <DefineCompo
          title="Start Your Real Estate Journey Today"
          description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
          action="Explore Properties"
          stars={false}
          value={true}
          variants="primary"
        />
      </section>
    </main>
  );
}
