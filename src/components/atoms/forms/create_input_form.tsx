"use client";

import { FormFieldType } from "@/interfaces/form";
import clsx from "clsx";
import React from "react";
import { BasicDropdown } from "../dropdown";

type Props = {};

const CreateInputForm = (props: Props) => {
	const options = Object.keys(FormFieldType).map((v) => v.toLowerCase().split("_").join(" "));
	const [selectedValue, setSelectedValue] = React.useState<string>(options[0]);
	const checkedOptions = [FormFieldType.CHECKBOX, FormFieldType.RADIO];
	const filteredOptions = options.slice(0, 3);
	const remainingOptions = options.slice(3);

	const handleSelect = (item: string) => {
		const val = options.find((val) => val === item);
		setSelectedValue(val || options[0]);
	};

	return (
		<div className="bg-white sm:p-6 rounded-lg shadow-lg min-h-20 w-full duration-300">
			<h1 className="">Select your preferred options type:</h1>
			<div className="flex items-center gap-4 mt-3">
				<div className="flex items-center gap-4 overflow-hidden">
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
					values={remainingOptions}
					title={remainingOptions.find((v) => v === selectedValue) || remainingOptions[0]}
					titleClassName={clsx(
						"whitespace-nowrap",
						remainingOptions.find((v) => v === selectedValue)
							? "!text-white bg-primary hover:!bg-primary"
							: "text-[#1e1e1e] bg-gray-300 hover:bg-gray-300",
					)}
					optionClassName="text-[#7E7E7E]"
					onSelect={(item) => handleSelect(item)}
				/>
			</div>
		</div>
	);
};

export default CreateInputForm;

//
const PreferredOptionLabel = ({ option, selected, onSelect, type }: PreferredOptionLabelProps) => {
	return (
		<label
			onClick={() => onSelect(option)}
			className={clsx(
				"flex gap-4 items-center p-2 rounded-lg px-6 select-none cursor-pointer",
				selected ? "bg-primary text-white" : "bg-gray-300 text-[#1e1e1e]",
			)}>
			<input type={type || "hidden"} readOnly disabled />
			<p className="capitalize">{option.split("_").join(" ")}</p>
		</label>
	);
};
type PreferredOptionLabelProps = { option: string; selected: boolean; type?: string; onSelect(item: string): void };
