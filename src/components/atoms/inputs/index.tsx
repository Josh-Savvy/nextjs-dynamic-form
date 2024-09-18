import clsx from "clsx";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
	leftIcon?: React.ReactNode;
}

export const Input = ({ containerProps, leftIcon, placeholder, ...props }: InputProps) => {
	return (
		<div
			{...containerProps}
			className={clsx(
				"rounded-lg flex items-center focus-within:border-primary border-2 duration-300",
				containerProps?.className,
				leftIcon ? "gap-1 pl-3" : "",
			)}>
			{leftIcon}
			<input
				{...props}
				className={clsx(
					"bg-transparent p-3 w-full h-full focus:!ring-0 focus:outline-none outline-0 ring-0 font-[400] placeholder:text-[#7e7e7e]",
					props.className,
				)}
				type={props.type}
				placeholder={placeholder}
			/>
		</div>
	);
};

export const Toggle = ({ onToggle, state }: { onToggle?(value: boolean): void; state?: "active" | "inactive" }) => {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				checked={state === "active"}
				value=""
				className="sr-only peer"
				onChange={() => {
					if (onToggle) onToggle(state === "active");
				}}
			/>
			<div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none border rounded-full peer peer-checked:after:translate-x-2/3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-primary peer-checked:bg-primary" />
		</label>
	);
};
