import React from "react";
import CreateInputForm from "./create_input_form";

const MentorshipForm = () => {
	return (
		<div className="inline-flex item-center justify-center flex-col gap-5 w-full">
			<h1 className="md:text-3xl text-center font-[700]">Create customized signup forms</h1>
			<p className="text-sm text-center">Be in control of data required for users to sign up</p>
			<div className="w-full sm:max-w-[65%] mx-auto">
				{/* <div className="">
					{state.fields.map((field, index) => {
						return (
							<div key={index} className="">
								<input name={field.label} value={field.name} onChange={handleChange("name")} />
							</div>
						);
					})}
				</div> */}
				<br />
				<CreateInputForm />
			</div>
		</div>
	);
};

export default MentorshipForm;
