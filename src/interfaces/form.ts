export enum FormFieldType {
	RADIO = "radio",
	CHECKBOX = "checkbox",
	FILE = "file",
	URL = "url",
	EMAIL = "email",
	Telephone = "phone",
	SINGLE_SELECT_DROPDOWN = "single_select_dropdown",
	MULTIPLE_SELECT_DROPDOWN = "multi_select_dropdown",
	Date = "date",
	SHORT_ANSWER = "short_answer",
	PARAGRAPH = "paragraph",
}

export enum FormFieldEnabledFor {
	MENTOR = "mentor",
	MENTEE = "mentee",
	BOTH = "both",
	NONE = "none",
}

export interface FormField {
	name: string;
	label: string;
	type: FormFieldType;
	options: string[];
	enabled_for: FormFieldEnabledFor;
	for_matching: boolean;
	for_mentor_acceptance: boolean;
	for_mentor_acceptance_values: string[];
	required: boolean;
}

export interface Form {
	id: string;
	name: string;
	fields: FormField[];
}
