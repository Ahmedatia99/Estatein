import { HTMLAttributes } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  action?: React.ReactNode; // Supports either a string or a React component
  displays?: "true" | "false";
  paddingname?: string;
  path: string;
}

export const Button = ({
  action,
  path,
  variant = "primary",
  paddingname,
}: ButtonProps) => {
  const variants = {
    primary:
      "before:ease relative overflow-hidden bg-purple shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-10 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-secon-500 hover:before:-translate-x-56",
    secondary: "bg-senior text-white border-stroke border-2",
    greedy: "bg-litewhite text-textcook",
    common: "bg-junior text-white",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg transition-all text-sm mr-3`,
        variants
      )}
    >
      <Link className={classNames(paddingname)} to={path}>
        {typeof action === "string" ? action : action}
      </Link>
    </button>
  );
};
