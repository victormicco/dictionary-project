"use client";

import { FiBook } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import Toggle from "../Toggle/Toggle";

export default function Navbar() {
	return (
		<nav className="">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:text-base ">
				<a className="flex items-center text-5xl">
					<FiBook />
				</a>

				<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0    ">
					<li>
						<a className="block py-2 pl-3 pr-4 mt-2  rounded  md:hover:bg-transparent md:border-0  md:p-0     md:dark:hover:bg-transparent">
							<Toggle />
						</a>
					</li>
					<li>
						<a className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0  md:p-0     md:dark:hover:bg-transparent text-5xl">
							<MdOutlineDarkMode />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
