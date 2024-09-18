"use client";

import { BasicDropdown } from "@/components/atoms/dropdown";
import { FormFieldType } from "@/interfaces/form";
import clsx from "clsx";
import React from "react";

type Props = { onSelect?(val: any): void; title?: string };

const SelectOptionsType = ({ onSelect, title }: Props) => {
	const _options = Object.keys(FormFieldType);
	const options = Object.keys(FormFieldType).map((v) => v.toLowerCase().split("_").join(" "));
	const [selectedValue, setSelectedValue] = React.useState<string>(options[0]);
	const checkedOptions = [FormFieldType.CHECKBOX, FormFieldType.RADIO];
	const filteredOptions = options.slice(0, 3);
	const remainingOptions = options.slice(3);

	const handleSelect = (item: string) => {
		const valIndex = options.findIndex((val) => val === item);
		setSelectedValue(options[valIndex || 0]);
		if (valIndex !== -1) {
			const _val = _options.find((p, i) => i === valIndex);
			if (onSelect) onSelect(_val);
		}
	};

	return (
		<div>
			<h1 className="tracking-tight text-sm">{title || "Select your preferred options type"}:</h1>
			<div className="hidden md:grid grid-cols-12 items-center gap-4 mt-3">
				<div className="grid grid-cols-3 gap-4 col-span-12 lg:col-span-9 overflow-hidden">
					{filteredOptions.map((opt, i) => (
						<PreferredOptionLabel
							type={checkedOptions.find((val) => val.toLowerCase() === opt)}
							key={i}
							option={opt}
							selected={selectedValue === opt}
							onSelect={(item) => handleSelect(item)}
						/>
					))}
				</div>
				<BasicDropdown
					containerClassName="col-span-12 lg:col-span-3"
					values={remainingOptions}
					title={remainingOptions.find((v) => v === selectedValue) || remainingOptions[0]}
					titleClassName={clsx(
						"whitespace-nowrap text-sm",
						remainingOptions.find((v) => v === selectedValue)
							? "!text-white bg-primary hover:!bg-primary"
							: "text-[#1e1e1e] bg-gray-100 hover:bg-gray-100",
					)}
					optionClassName="text-[#7E7E7E]"
					onSelect={(item) => handleSelect(item)}
				/>
			</div>
			<div className="md:hidden w-full flex items-center gap-4 mt-3">
				<BasicDropdown
					containerClassName="w-full"
					values={options}
					title={options.find((v) => v === selectedValue) || options[0]}
					titleClassName={clsx(
						"whitespace-nowrap text-sm",
						options.find((v) => v === selectedValue)
							? "text-white bg-primary hover:bg-primary"
							: "text-[#1e1e1e] bg-gray-100 hover:bg-gray-100",
					)}
					optionClassName="text-[#7E7E7E] text-sm"
					onSelect={(item) => handleSelect(item)}
				/>
			</div>
		</div>
	);
};

export default SelectOptionsType;

//
const PreferredOptionLabel = ({ option, selected, onSelect, type }: PreferredOptionLabelProps) => {
	return (
		<label
			onClick={() => onSelect(option)}
			className={clsx(
				"flex gap-2 items-center p-2 rounded-lg px-6 select-none cursor-pointer justify-center",
				selected ? "bg-primary text-white" : "bg-gray-100 text-[#1e1e1e]",
			)}>
			<input type={type || "hidden"} readOnly disabled />
			<p className="capitalize text-sm">{option.split("_").join(" ")}</p>
		</label>
	);
};
type PreferredOptionLabelProps = { option: string; selected: boolean; type?: string; onSelect(item: string): void };
