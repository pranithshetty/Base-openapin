import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import PcLeftLogin from "../assets/PcLeftLogin.svg";
//import Socials from "../assets/Socials.svg";
import BrandName from "../assets/BASE.png";
//port BrandLogo from "../assets/BrandLogo.svg";
const Login = () => {
	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		await signInWithPopup(auth, provider);
		//console.log(result);
		navigate("/dashboard");
	};

	return (
		<>
			{/* <img src={BrandLogo} alt="BrandLogo" className=" flex-none  z-10" /> */}

			<div className="flex justify-evenly overscroll-none ">
				<div className="flex-1 relative">
					<img src={PcLeftLogin} alt="PC left" />
					<img
						src={BrandName}
						alt="BrandName"
						className="absolute top-[35%] left-[30%]"
					/>
					{/* <div className="w-0 h-0 border-t-transparent border-t-[50px] border-r-slate-200 border-r-[75px]  border-b-transparent border-b-[50px]"></div>
				<div className="w-0 h-0 border-[50px] border-transparent border-b-amber-500 border-t-0"></div> */}
				</div>

				<div className="flex-1 bg-slate-50">
					{/* <p> Sign In With Google To Continue </p>
				<button onClick={signInWithGoogle}> Sign In With Google </button> */}
					<LoginForm signInWithGoogle={signInWithGoogle} />
				</div>
			</div>
		</>
	);
};

export default Login;
