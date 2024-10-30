import React from "react";
import DefineCompo from "../../atoms/DefineCompo";
import HotelFeature from "./HotelFeature";
export default function Feature() {
  return (
    <main className="container mx-auto">
      <section className="pt-20 ">
        <DefineCompo
          action={"View All Properties"}
          value={true}
          title="Featudefinred Properties"
          stars={true}
          path="/prototype"
          variants="secondary"
          description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information."
        />
        <HotelFeature />
      </section>
    </main>
  );
}
