"use client";
import { Toggle } from "@/components/atoms/inputs";
import { useFormContext } from "@/context/mentorship-form.context";
import React from "react";

const FormCriteria = () => {
	const { currentFormField, updateCurrentFormField } = useFormContext();
	return (
		<>
			<div className="space-y-3">
				<div className="bg-[#F8F9FC] border border-[#EDEDED] p-4 rounded-xl space-y-2">
					<div className="flex items-center justify-between">
						<h1 className="text-xl tracking-tight">Is mentor acceptance criterion?</h1>
						<Toggle
							state={currentFormField.for_mentor_acceptance ? "active" : "inactive"}
							onToggle={() =>
								updateCurrentFormField("for_mentor_acceptance", !currentFormField.for_mentor_acceptance)
							}
						/>
					</div>
					<p className="text-sm tracking-tight">
						Criteria used by the system to determine eligibility for mentorship in a cohort session based on
						the information provided in the form field
					</p>
				</div>
				<div className="bg-[#F8F9FC] border border-[#EDEDED] p-4 rounded-xl space-y-2">
					<div className="flex items-center justify-between">
						<h1 className="text-xl tracking-tight">Is matching criterion?</h1>
						<Toggle
							state={currentFormField.for_matching ? "active" : "inactive"}
							onToggle={() => updateCurrentFormField("for_matching", !currentFormField.for_matching)}
						/>
					</div>
					<p className="text-sm tracking-tight">
						The system will utilize the designated form field to match mentors for a cohort session
					</p>
				</div>
			</div>
		
        </>
	);
};

export default FormCriteria;
