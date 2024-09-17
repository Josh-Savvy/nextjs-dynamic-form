"use client";
import { Form, FormFieldEnabledFor, FormFieldType, type FormField } from "@/interfaces/form";
import clsx from "clsx";
import React, { useId } from "react";
import CreateInputForm from "./create_input_form";

const MentorshipForm = () => {
	const id = useId();
	const [state, setState] = React.useState<Form>({
		id,
		name: "Mentorship Application Form",
		fields: [],
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleChange = (name: keyof FormField) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setState((p) => {
			const updated = { ...p };
			const updateIndex = p.fields.find((f) => f.name);
			return updated;
		});
	};

	return (
		<form onSubmit={handleSubmit} className="inline-flex item-center justify-center flex-col gap-5 w-full">
			<h1 className="md:text-3xl text-center font-[700]">Create customized signup forms</h1>
			<p className="text-sm text-center">Be in control of data required for users to sign up</p>
			<div className="w-full max-w-[65%] mx-auto">
				{state.fields.map((field, index) => {
					return (
						<div key={index} className="">
							<input name={field.label} value={field.name} onChange={handleChange("name")} />
						</div>
					);
				})}
				<CreateInputForm />
			</div>
		</form>
	);
};

export default MentorshipForm;
