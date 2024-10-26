import { HTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondry ";
  action: string;
  displays?: "true" | "false";
  paddingname?: string;
}

export const Button = ({
  action,
  variant = "primary",
  paddingname,
}: ButtonProps) => {
  const variants = {
    primary: " bg-purple text-white",
    secondry: "bg-senior text-white border-stroke border-2",
    greedy: "bg-litewhite text-textcook",
    common: "bg-junior text-white",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg transition-all text-sm mr-3`,
        variants,
        paddingname
      )}
    >
      {action}
    </button>
  );
};
