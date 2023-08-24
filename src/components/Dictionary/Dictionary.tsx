"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import type { ApiResponse } from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

export function Dictionary() {
	const [word, setWord] = useState("");
	const [results, setResults] = useState<ApiResponse>();
	const [fetchNotFound, setFetchNotFound] = useState(false);
	const { theme } = useTheme();

	const searchWord = async () => {
		try {
			await fetch(
				"https://api.dictionaryapi.dev/api/v2/entries/en/" + word
			).then(async (response) => {
				setFetchNotFound(response.ok);
				if (!response.ok) {
					return toast.error("Invalid word or search area empty", {
						position: "top-left",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
				}
				setResults(await response.json());
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=" w-full flex flex-col">
			<div className="container justify-center flex">
				<input
					type="text"
					value={word}
					onChange={(e) => setWord(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
					placeholder="Search a thing..."
					className=" w-10/12 text-start pl-5 text-black bg-gray-200 border-none outline-none rounded-lg  py-4 shadow-sm"
				/>
				<button
					type="submit"
					className="-mx-16 text-purple-700 text-xl"
					onClick={searchWord}
					onKeyDown={(e) => {
						if (e.key == "Enter") {
							searchWord();
						}
					}}
				>
					<AiOutlineSearch />
				</button>
			</div>
			<div className="my-3 pl-48">
				<div className="flex flex-row items-center text-lg font-bold font-serif">
					<p className=" text-6xl font-serif">{word}</p>
				</div>
				{fetchNotFound && (
					<>
						{results?.[0].meanings.slice(0, 1).map((meaning) => (
							<div key={meaning.partOfSpeech}>
								<span className="font-bold p">{meaning.partOfSpeech}</span>
								<hr className="w-10/12 " />

								<p className={"text-zinc-700"}>Meanings</p>
								<ul className="list-disc px-10 text-gray-800 text-sm space-y-2 ">
									{meaning.definitions.slice(0, 4).map((definition) => (
										<li
											key={definition.definition}
											className={`${
												theme === "dark"
													? "text-white marker:text-purple-700"
													: "text-zinc-900 marker:text-purple-700"
											}`}
										>
											{definition.definition}
										</li>
									))}
								</ul>
							</div>
						))}

						<p className=" font-extralight pt-7 pr-3 pl-5 ">
							Synonyms{" "}
							{results?.[0].meanings?.[0].synonyms?.map((synonym, index) => (
								<span key={index} className=" text-purple-700 pr-3 pl-5 pt-4">
									{synonym}
								</span>
							))}
						</p>
					</>
				)}
			</div>
		</div>
	);
}
