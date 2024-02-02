import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const signUserOut = async () => {
		await signOut(auth);
		navigate("/");
	};
	return (
		<div className="navbar">
			<div className="user">
				{user && (
					<>
						<p> {user?.displayName} </p>
						<img src={user?.photoURL || ""} width="20" height="20" />
						<button onClick={signUserOut}> Log Out</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
