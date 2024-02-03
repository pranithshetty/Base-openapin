import React, { useEffect, useState } from "react";

const tagOptions = [
	"Technology",
	"Fashion",
	"Food",
	"Travel",
	"Sports",
	"Music",
	"Art",
	"Health",
	"Education",
	"Finance",
];
const Table = ({ data, error, headers }) => {
	const [tags, setTags] = useState([]);
	const handleChange = (e) => {
		console.log(e.target.value);
		// setTags(e.target.value);
	};
	// console.log(
	// 	data.slice(1).map((item, i) => {
	// 		return item.slice(3, -1).map((itm, i) => {
	// 			return itm.split(",");
	// 		});
	// 	})
	// );

	return (
		<div className="">
			{data ? (
				<div className="p-2 m-2">
					{error ? (
						error
					) : (
						<table className="border-separate border-spacing-x-20 border-spacing-y-4 bg-slate-100 rounded-lg">
							<thead className="">
								<tr>
									<th>Id</th>
									{headers.slice(1, -2).map((key) => (
										<th key={key}>
											{key[0].toUpperCase().concat(key.slice(1))}
										</th>
									))}
									<th>Add Tags</th>
									<th>Selected tags</th>
								</tr>
							</thead>

							<tbody className="">
								{data.slice(1).map((individualExcelData, index) => (
									<tr key={index + "i"} className="items-center">
										<td>{"0" + (index + 1)}</td>
										{individualExcelData.slice(1, -2).map((key, idx) => (
											<td key={key + "i" + idx}>{key}</td>
										))}
										<td>
											<select
												name="Add tags"
												id="tags"
												defaultValue="Select tags"
												className="border-none"
												onChange={handleChange}
											>
												<option className="" disabled hidden>
													Select tags
												</option>
												{[...new Set(tagOptions)].map((tag, idx) => {
													return (
														<option value={tag} key={tag + "" + idx}>
															{tag}
														</option>
													);
												})}
												<option value=""></option>
											</select>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			) : (
				<div></div> //no file uploaded
			)}
		</div>
	);
};

export default Table;
