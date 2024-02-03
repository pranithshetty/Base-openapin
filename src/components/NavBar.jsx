import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-and-company.svg";
import NotiBell from "../assets/notibell.png";

const NavBar = () => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const signUserOut = async () => {
		await signOut(auth);
		navigate("/");
	};
	return (
		<nav className="flex w-full max-w-7xl mx-auto my-5 px-4">
			<div className="cursor-pointer" onClick={signUserOut}>
				<img src={Logo} alt="logo" />
			</div>
			<div className="ml-20">
				<h1 className="font-bold text-xl">Upload CSV</h1>
			</div>
			<div className="ml-auto mr-5">
				<img src={NotiBell} alt="notibell" />
			</div>
			<div>
				{user && (
					<>
						{/* <p> {user?.displayName} </p> */}
						<img
							src={user?.photoURL || ""}
							width="30"
							height="30"
							className="rounded-full"
						/>
						{/* <button onClick={signUserOut}> Log Out</button> */}
					</>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
