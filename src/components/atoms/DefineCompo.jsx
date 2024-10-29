import React from "react";
import { Button } from "./Button/Button.tsx";
import classNames from "classnames";
import { LuSparkle } from "react-icons/lu";

export default function DefineCompo(props) {
  return (
    <div className="">
      <div className={classNames({ hidden: !props.stars })}>
        <div className=" flex items-center mb-3 ">
          <LuSparkle className="tablet:text-3xl mobile:text-2xl text-ruby" />
          <LuSparkle className="tablet:text-2xl mobile:text-xl text-[#333]" />
          <LuSparkle className="tablet:text-xl mobile:text-lg text-[#333]" />
        </div>
      </div>
      <div className="flex labtop:justify-between tablet:justify-between mobile:justify-center laptop:flex-wrap tablet:flex-nowrap mobile:flex-wrap items-center">
        <div>
          <h2
            className={classNames(
              ` font-semibold text-textcook ${
                props.value
                  ? "laptop:text-4xl tablet:text-3xl mobile:text-xl mb-4"
                  : "laptop:text-4xl tablet:text-3xl mobile:text-xl mb-1"
              }`
            )}
          >
            {props.title}
          </h2>

          <p
            className={classNames(
              `text-tasting labtop:text-base tablet:text-sm mobile:text-sm mb-4 ${
                props.value
                  ? "laptop:max-w-4xl tablet:max-w-lg mobile:max-w-auto"
                  : "max-w-2xl"
              }`
            )}
          >
            {props.description}
          </p>
        </div>
        <div className={classNames(`${props.value ? " " : "hidden"}`)}>
          <Button
            variant={props.variants}
            action={props.action}
            paddingname="laptop:px-8 laptop:py-4 tablet:px-5 tablet:py-3 mobile:px-8 mobile:py-4 mr-0"
            path={props.path}
          />
        </div>
      </div>
    </div>
  );
}
