"use client";
import { useState } from "react";
import { CardMain } from "@/components";
/// Component FormSearch
export const FormSearch = ({ action }) => {
	const [newCountry, setNewCountry] = useState("");
	const [newProvince, setNewProvince] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newCountry, newProvince);
		action(newCountry, newProvince);
	};

	return (
		<>
			<CardMain>
				<form className="flex justify-center space-x-6 w-full">
					<div className="w-1/3">
						<div className="mt-2">
							<input
								id="country"
								name="country"
								type="text"
								placeholder="Country"
								required
								value={newCountry}
								onChange={(e) => setNewCountry(e.target.value)}
								className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="w-1/3">
						<div className="mt-2">
							<input
								id="province"
								name="province"
								type="text"
								placeholder="Province"
								required
								value={newProvince}
								onChange={(e) => setNewProvince(e.target.value)}
								className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="w-1/3">
						<div className="mt-2">
							<button
								type="submit"
								onClick={handleSubmit}
								className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
							>
								Search
							</button>
						</div>
					</div>
				</form>
			</CardMain>
		</>
	);
};
