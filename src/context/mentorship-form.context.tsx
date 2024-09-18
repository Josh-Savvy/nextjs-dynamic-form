"use client";
import { type Form, type FormField, FormFieldEnabledFor, FormFieldType, FormFieldTypeKeys } from "@/interfaces/form";
import React, { createContext, useContext, useState } from "react";

interface FormContextType {
	form: Form;
	currentFormField: FormField;
	updateCurrentFormField(fieldName: keyof FormField, value: any): void;
	updateCurrentFormFieldOptions(index: number, value: string): void;
	removeOption(index: number): void;
	addCurrentFieldToForm(): void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const MentorshipFormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [form, setForm] = useState<Form>(initialForm);
	const [currentFormField, setCurrentFormField] = useState<FormField>(emptyFormField);

	const updateCurrentFormField = (field: keyof FormField, val: any) => {
		if (field === "type") val = (FormFieldType as any)[val];
		setCurrentFormField((p) => ({ ...p, [field]: val }));
	};

	const updateCurrentFormFieldOptions = (index: number, val: string) => {
		setCurrentFormField((prev) => {
			const updatedOptions = [...prev.options];
			if (index >= 0 && index < updatedOptions.length) updatedOptions[index] = val;
			else console.error("Index out of bounds");
			return { ...prev, options: updatedOptions };
		});
	};

	const addCurrentFieldToForm = () => {
		// Todo: input validation before merging form field to form
		setForm((prev) => ({ ...prev, fields: prev.fields.concat(currentFormField) }));
		setCurrentFormField(emptyFormField);
	};

	const saveForm = (args: { id?: string; name: string }) => {
		const { name, id } = args;
		setForm((prev) => ({ ...prev, id: id || Date.now().toString(), name }));
		// Todo: save and persist form-data here
	};

	const removeOption = (index: number) => {
		if (currentFormField.options.length > 1)
			setCurrentFormField((prev) => ({ ...prev, options: prev.options.filter((v, i) => i !== index) }));
	};

	const providerValues: FormContextType = {
		form,
		currentFormField,
		updateCurrentFormFieldOptions,
		updateCurrentFormField,
		addCurrentFieldToForm,
		removeOption,
	};

	return <FormContext.Provider value={providerValues}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) throw new Error("useFormContext must be used within a MentorshipFormProvider");
	return context;
};

export const emptyFormField: FormField = {
	name: "",
	label: "",
	type: FormFieldType.RADIO,
	options: ["Option 1", "dkwsjv dwkld"],
	enabled_for: FormFieldEnabledFor.BOTH,
	for_matching: false,
	for_mentor_acceptance: true,
	for_mentor_acceptance_values: [],
	required: false,
};

export const initialForm: Form = {
	id: "",
	name: "",
	fields: [],
};
