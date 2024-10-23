import React from "react";
import { Button } from "./Button/Button.tsx";
import classNames from "classnames";
import { LuSparkle } from "react-icons/lu";

export default function DefineCompo(props) {
  return (
    <div className="">
      <div className="flex items-center mb-3">
        <LuSparkle className="tablet:text-3xl mobile:text-2xl text-ruby" />
        <LuSparkle className="tablet:text-2xl mobile:text-xl text-[#333]"/>
        <LuSparkle className="tablet:text-xl mobile:text-lg text-[#333]"/>
      </div>
      <div className="flex justify-between flex-wrap items-center">
        <div>
          <h2
            className={classNames(
              ` font-semibold text-textcook ${
                props.value ? "tablet:text-4xl mobile:text-2xl mb-4" : " mb-1"
              }`
            )}
          >
            {props.title}
          </h2>

          <p
            className={classNames(
              `text-tasting tablet:text-base mobile:text-sm mb-1 ${
                props.value ? "max-w-4xl" : "max-w-4xl"
              }`
            )}
          >
            {props.description}
          </p>
        </div>
        <div className={classNames(`${props.value ? " " : "hidden"}`)}>
          <Button
            variant="second"
            action={props.action}
            paddingname="px-6 py-3"
          />
        </div>
      </div>
    </div>
  );
}
