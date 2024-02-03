import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../pages/LoginForm";

const Login = () => {
	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		await signInWithPopup(auth, provider);
		//console.log(result);
		navigate("/dashboard");
	};

	return (
		<div className="flex justify-evenly">
			<div className="flex-1 bg-[#605BFF]">
				{/* <div className="w-0 h-0 border-t-transparent border-t-[50px] border-r-slate-200 border-r-[75px]  border-b-transparent border-b-[50px]"></div>
				<div className="w-0 h-0 border-[50px] border-transparent border-b-amber-500 border-t-0"></div> */}
			</div>
			<div className="flex-1 bg-slate-100">
				{/* <p> Sign In With Google To Continue </p>
				<button onClick={signInWithGoogle}> Sign In With Google </button> */}
				<LoginForm signInWithGoogle={signInWithGoogle} />
			</div>
		</div>
	);
};

export default Login;
