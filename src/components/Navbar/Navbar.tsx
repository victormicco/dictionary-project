"use client";

import { FiBook } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import Toggle from "../Toggle/Toggle";

export default function Navbar() {
	return (
		<nav className="">
			<div className="flex ">
				<a className="flex items-center text-5xl pl-11 lg:w-10/12 pr-10 lg:text-7xl">
					<FiBook />
				</a>

				<ul className="flex justify-end flex-row w-4/6 lg:p-5">
					<li>
						<a className="block py-2 pl-3 pr-4 mt-2  rounded  md:hover:bg-transparent md:border-0  md:p-0     md:dark:hover:bg-transparent lg:w-20 lg:">
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
