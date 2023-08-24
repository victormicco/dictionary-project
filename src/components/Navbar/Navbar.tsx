"use client";

import { FiBook } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import Toggle from "../Toggle/Toggle";

export default function Navbar() {
	return (
		<nav className=" align-bottom flex justify-between pb-2">
			<a className=" text-gray-500 text-5xl pl-14 flex pt-6 mt-2 pb-2">
				<FiBook />
			</a>

			<ul className="flex pr-14 pb-6 justify-end align-bottom pt-5 items-center">
				<li className="mr-6 pt-2">
					<Toggle />
				</li>

				<li className="mr-6 pr-12">
					<a className="text-gray-500 text-5xl  ">
						<MdOutlineDarkMode />
					</a>
				</li>
			</ul>
		</nav>
	);
}
