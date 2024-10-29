import { HTMLAttributes } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondry ";
  action: string;
  displays?: "true" | "false";
  paddingname?: string;
}

export const Button = ({
  action,
  path,
  variant = "primary",
  paddingname,
}: ButtonProps) => {
  const variants = {
    primary:
      "  before:ease relative overflow-hidden bg-purple shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-10 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-secon-500 hover:before:-translate-x-56",
    secondry: "bg-senior text-white border-stroke border-2",
    greedy: "bg-litewhite text-textcook",
    common: "bg-junior text-white",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg transition-all text-sm mr-3`
      )}
    >
      <Link className={classNames(``, paddingname, variants)} to={path}>
        {action}
      </Link>
    </button>
  );
};
