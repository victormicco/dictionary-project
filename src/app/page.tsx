import Navbar from "../components/Navbar/Navbar";
import { Dictionary } from "@/components/Dictionary/Dictionary";

export default function App() {
	return (
		<div className="container bg-primary text-primary h-full w-full  ">
			<Navbar />
			<Dictionary />
		</div>
	);
}
