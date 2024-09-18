import { CheckboxSelectIcon, RadioSelectIcon } from "@/components/atoms/icons";
import { Input } from "@/components/atoms/inputs";
import { FormFieldType } from "@/interfaces/form";
import React from "react";

type Props = { value?: any; type: FormFieldType; onChange?: React.ChangeEventHandler<HTMLInputElement> };

const FormFieldOptionInput = ({ value, type, onChange }: Props) => {
	return (
		<div className="flex items-center gap-2 w-full">
			<Input
				leftIcon={<span>{FIELD_ICONS[type]}</span>}
				value={value}
				onChange={onChange}
				containerProps={{ className: "w-full" }}
				className="text-[14px]"
			/>
		</div>
	);
};

export default FormFieldOptionInput;

const FIELD_ICONS: Record<FormFieldType, React.ReactNode> = {
	radio: <RadioSelectIcon />,
	checkbox: <CheckboxSelectIcon />,
	phone: <></>,
	file: <></>,
	text: <></>,
	url: <></>,
	date: <></>,
	email: <></>,
	multi_select_dropdown: <></>,
	single_select_dropdown: <></>,
};
