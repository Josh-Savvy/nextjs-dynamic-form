"use client";

import React, { useEffect } from "react";
import SelectOptionsType from "@/components/organisms/create-mentorship-form/SelectOptionsType";
import { Input, Toggle } from "../inputs";
import { useFormContext } from "@/context/mentorship-form.context";
import FormFieldOptionInput from "@/components/organisms/create-mentorship-form/FormFieldOptionInput";

const Form = () => {
	const { currentFormField, updateCurrentFormField, updateCurrentFormFieldOptions, removeOption, addOption } =
		useFormContext();

	return (
		<div className="bg-white p-3 sm:p-6 rounded-xl shadow-xl min-h-20 w-full duration-300 flex flex-col gap-4">
			<SelectOptionsType onSelect={(val) => updateCurrentFormField("type", val)} />
			<Input
				placeholder={"Enter name of field"}
				className="text-[14px]"
				value={currentFormField.name}
				onChange={({ target: { value } }) => updateCurrentFormField("name", value)}
			/>
			<div className="flex items-center justify-between w-full">
				<p className="text-sm tracking-tight">Is required?</p>
				<Toggle
					state={currentFormField.required ? "active" : "inactive"}
					onToggle={() => updateCurrentFormField("required", !currentFormField.required)}
				/>
			</div>
			<div className="space-y-3">
				{currentFormField.options.map((option, index) => (
					<span key={index} className="w-full flex items-center gap-2">
						<div className="flex-grow">
							<FormFieldOptionInput
								value={option}
								type={currentFormField.type}
								onChange={({ target: { value } }) => updateCurrentFormFieldOptions(index, value)}
							/>
						</div>
						<div onClick={() => removeOption(index)} className="text-2xl select-none cursor-pointer">
							&times;
						</div>
					</span>
				))}
			</div>
			<div className="flex items-center gap-3">
				<button
					type="button"
					onClick={addOption}
					className="bg-[#F7F7F7] p-2 px-3 select-none cursor-pointer rounded-3xl text-[14px]">
					Add Option
				</button>
				{!currentFormField.options.includes("Others") && (
					<>
						<button type="button" className="">
							or
						</button>
						<span
							onClick={() => updateCurrentFormField("options", "Others")}
							className="bg-[#F7F7F7] p-2 px-3 select-none cursor-pointer rounded-3xl text-[14px]">
							Add others
						</span>
					</>
				)}
			</div>
		</div>
	);
};

const CreateInputForm = React.memo(Form);
export default CreateInputForm;
