"use client";
import React from "react";
import CreateInputForm from "./create_input_form";
import Button from "../buttons";
import FormCriteria from "@/components/organisms/create-mentorship-form/FormCriteria";
import { useFormContext } from "@/context/mentorship-form.context";
import QuestionPreviewCard from "../cards/question-preview-card";

const MentorshipForm = () => {
	const {
		form: state,
		currentStep,
		setCurrentStep,
		addCurrentFieldToForm,
		removeQuestion: removeQuestionField,
	} = useFormContext();
	return (
		<div className="inline-flex item-center justify-center flex-col w-full">
			<h1 className="md:text-3xl text-center font-[700]">Create customized signup forms</h1>
			<p className="text-sm text-center">Be in control of data required for users to sign up</p>
			<div className="w-full sm:max-w-[75%] md:max-w-[65%] mx-auto">
				<div className="my-5 mt-8 space-y-4">
					{state.fields.map((field, index) => (
						<QuestionPreviewCard question={field} key={index} onDelete={() => removeQuestionField(index)} />
					))}
				</div>

				<CreateInputForm />
				{currentStep === "1" ? (
					<Button title="Next" className="w-full mt-3" onClick={() => setCurrentStep("2")} />
				) : (
					currentStep === "2" && (
						<>
							<br />
							<FormCriteria />
							<div className="flex items-center gap-3 mt-4">
								<Button title="Clear" variant={"outlined"} className="px-5" />
								<Button title="Add more questions" onClick={addCurrentFieldToForm} />
							</div>
						</>
					)
				)}
			</div>
		</div>
	);
};

export default MentorshipForm;
