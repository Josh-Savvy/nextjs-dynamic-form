import React from "react";
import clsx from "clsx";

type ButtonVariant = "outlined" | ({} | "");

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	title: string;
	variant?: ButtonVariant;
}

const Button = ({ title, variant, ...props }: Props) => {
	const variantClass =
		variant === "outlined" ? "border-2 border-primary hover:text-white text-primary hover:bg-primary" : "";
	return (
		<button {...props} className={clsx(variantClass, "rounded-lg", props.className)}>
			{title}
		</button>
	);
};

export default Button;
