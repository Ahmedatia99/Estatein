import React from "react";

export default function SelectProp() {
  return (
    <section className="grid tablet:grid-cols-5 mobile:grid-cols-1 tablet:gap-5 mobile:gap-3 mx-5 py-3 bg-junior rounded-xl">
      {Array.from({ length: 5 }).map((_, index) => (
        <form className=" px-3 w-full mx-auto" key={index}>
          <select
            id="countries"
            className=" bg-senior border border-stroke  text-sm rounded-lg  w-full p-3 "
          >
            <option defaultValue="location">Location </option>
          </select>
        </form>
      ))}
    </section>
  );
}
