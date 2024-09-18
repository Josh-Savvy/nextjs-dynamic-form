import { FIELD_ICONS } from "@/components/organisms/create-mentorship-form/FormFieldOptionInput";
import { FormField } from "@/interfaces/form";
import React from "react";
import { TrashIcon } from "../icons";

type Props = { question: FormField; onDelete?(): void };

const QuestionPreviewCard = ({ question, onDelete }: Props) => {
	return (
		<div className="bg-white p-3 sm:p-6 rounded-xl shadow-xl min-h-20 w-full duration-300 flex flex-col gap-4">
			<span className="relative flex items-start justify-between">
				<h1 className="text-[16px] tracking-tight">{question.name}</h1>
				{question.required && <p className="text-red-500 text-lg">*</p>}
			</span>
			<div className="flex flex-col gap-4 items-start">
				{question.options.map((option, index) => (
					<div className="flex gap-1 items-center" key={index}>
						<span>{FIELD_ICONS[question.type]}</span>
						<p className="text-[16px] tracking-tight">{option}</p>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-4 items-end justify-end">
				<button type="button" className="group" onClick={onDelete}>
					<TrashIcon size={20} className="group-hover:fill-red-600" />
				</button>
			</div>
		</div>
	);
};

export default QuestionPreviewCard;
