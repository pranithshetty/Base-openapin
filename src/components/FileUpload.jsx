import React from "react";
import ExcelLogo from "../assets/excel logo.svg";
import Table from "./Table";
import Papa from "papaparse";
import { useState } from "react";
const allowedExtensions = ["csv"];
const FileUpload = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [file, setFile] = useState("");
	const [headers, setHeaders] = useState([]);

	const handleFileChange = (e) => {
		setError("");
		if (e.target.files.length) {
			const inputFile = e.target.files[0];
			const fileExtension = inputFile?.type.split("/")[1];
			if (!allowedExtensions.includes(fileExtension)) {
				setError("Please input a csv file");
				return;
			}
			setFile(inputFile);
		}
	};
	const handleParse = () => {
		//console.log(file);
		if (!file) return alert("Enter a valid file");
		Papa.parse(file, {
			complete: function (results) {
				//console.log("Finished:", results);
				setData(results.data);
				setHeaders(results.data[0]);
			},
		});
	};

	return (
		<>
			<div className="flex justify-center items-center mt-10">
				<div className="flex items-center justify-center">
					<div className="flex flex-col items-center justify-center pt-5 pb-6 px-3 h-[350px] w-[500px] border-2 border-gray-300 border-dashed rounded-lg">
						<img src={ExcelLogo} alt="excel logo" />
						{file == "" ? (
							<p className="mb-2 text-sm text-gray-500">
								<span className="font-semibold">
									Drop your excel sheet here or
								</span>
								<label
									className="ml-1 text-blue-600 cursor-pointer"
									htmlFor="dropzone-file"
								>
									Browse
									<input
										id="dropzone-file"
										type="file"
										className="hidden"
										onChange={handleFileChange}
									/>
								</label>
							</p>
						) : (
							<>
								<span className="font-semibold mb-2 text-sm text-gray-500">
									{file.name}
								</span>
								<span
									className="text-red-600 cursor-pointer"
									onClick={() => {
										setFile("");
										setData([]);
										setHeaders([]);
									}}
								>
									Remove
								</span>
							</>
						)}
						<button
							className={
								file !== ""
									? "bg-[#605BFF] p-2 m-2 mt-5 w-full rounded-lg text-slate-100 font-semibold"
									: "bg-[#a09cfe] p-2 m-2 mt-5 w-full rounded-lg text-slate-100 font-semibold"
							}
							onClick={handleParse}
							disabled={file == ""}
						>
							Upload
						</button>
					</div>
				</div>
			</div>
			{data && headers[0] && (
				<Table data={data} error={error} headers={headers} />
			)}
		</>
	);
};

export default FileUpload;
