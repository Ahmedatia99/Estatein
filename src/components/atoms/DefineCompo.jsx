import React from "react";
import { Button } from "./Button/Button.tsx";
import classNames from "classnames";

export default function DefineCompo(props) {
  return (
    <div className="flex justify-between flex-wrap items-center">
      <div>
        <h2
          className={classNames(
            ` font-semibold text-textcook ${
              props.value
                ? "laptop:text-4xl mobile:text-2xl mb-3"
                : "laptop:text-xl mobile:text-base mb-1"
            }`
          )}
        >
          {props.title}
        </h2>

        <p
          className={classNames(
            `text-spantext laptop:text-base mobile:text-sm mb-1 ${
              props.value ? "laptop:max-w-2xl tablet:max-w-lg" : "max-w-4xl"
            }`
          )}
        >
          {props.description}
        </p>
      </div>
      <div className={classNames(`${props.value ? " " : "hidden"}`)}>
        <Button
          variant="second"
          action="View All"
          paddingname="  mobile:py-3   mobile:px-4 mr-0 my-0 mobile:my-5 "
        />
      </div>
    </div>
  );
}
