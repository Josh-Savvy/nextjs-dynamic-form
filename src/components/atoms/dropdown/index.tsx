// &&

"use client";
import clsx from "clsx";
import React from "react";
import { ChevronDown } from "../icons";

interface Props<T> {
	title?: T;
	values: T[];
	onSelect?: (value: T) => void;
	titleClassName?: string;
	containerClassName?: string;
	optionClassName?: string;
}

export const BasicDropdown = <T,>({
	title,
	containerClassName,
	titleClassName,
	values,
	onSelect,
	optionClassName,
}: Props<T>) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
	};

	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className={clsx("relative inline-block text-left z-50", containerClassName)} ref={dropdownRef}>
			<button
				onClick={() => setIsOpen((p) => !p)}
				type="button"
				className={clsx(
					"inline-flex gap-4 items-center w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary capitalize",
					titleClassName,
				)}>
				<p className="">
					{typeof title == "string"
						? title.length > 20
							? title.slice(0, 20) + "..."
							: title
						: "Select an option"}
				</p>
				{/* <ChevronDown height={"14"} width={"10"} className="!stroke-white" /> */}
				<ChevronDown height={"14"} width={"10"} />
			</button>

			{isOpen && (
				<div className="absolute right-0 z-10 mt-2 w-full max-h-60 overflow-y-auto sm:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="p-1">
						{values.length > 0 ? (
							values.map((value, index) => (
								<button
									type="button"
									key={index}
									onClick={() => {
										if (onSelect) onSelect(value);
										setIsOpen(false);
									}}
									className={clsx(
										"block w-full px-4 py-2 text-left text-sm text-[#1e1e1e] hover:bg-gray-100 cursor-pointer select-none capitalize",
										optionClassName,
									)}>
									{String(value)}
								</button>
							))
						) : (
							<span className="block px-4 py-2 text-sm text-gray-500">No options available</span>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
