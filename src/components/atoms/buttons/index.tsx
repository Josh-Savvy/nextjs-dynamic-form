import React from "react";
import clsx from "clsx";

type ButtonVariant = "outlined" | ({} | "");

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	title: string;
	variant?: ButtonVariant;
}

const Button = ({ title, variant, ...props }: Props) => {
	const variantClass =
		variant === "outlined"
			? "border-[1px] border-primary hover:text-white text-primary hover:bg-primary"
			: "bg-primary text-white";
	return (
		<button {...props} className={clsx(variantClass, "p-2 text-sm px-4 rounded-lg", props.className)}>
			{title}
		</button>
	);
};

export default Button;
