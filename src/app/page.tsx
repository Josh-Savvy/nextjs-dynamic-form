import { MentorshipFormProvider } from "@/context/mentorship-form.context";
import MentorshipForm from "../components/atoms/forms/mentorship_form";
import Navbar from "@/components/ui/layout/nav";

export default function Home() {
	return (
		<main className="max-w-[90vw] sm:max-w-[80vw] py-10 mx-auto">
			<Navbar />
			<MentorshipFormProvider>
				<section className="pt-16">
					<MentorshipForm />
				</section>
			</MentorshipFormProvider>
		</main>
	);
}
