import React from "react";
import NavBar from "./NavBar";
import Sidemenu from "./Sidemenu";
import FileUpload from "./FileUpload";
// import { auth } from "../config/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	// const [user] = useAuthState(auth);
	// const navigate = useNavigate();
	// const signUserOut = async () => {
	// 	await signOut(auth);
	// 	navigate("/");
	// };
	return (
		<div className="">
			<div className="">
				{/* {user && (
					<>
						<p> {user?.displayName} </p>
						<img src={user?.photoURL || ""} width="20" height="20" />
						<button onClick={signUserOut}> Log Out</button>
					</>
				)} */}
				<NavBar />
				<div className="grid grid-cols-5 gap-3">
					<Sidemenu />
					<div className="col-span-4">
						<FileUpload />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
