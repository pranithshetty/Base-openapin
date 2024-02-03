import React from "react";

const LoginForm = ({ signInWithGoogle }) => {
	return (
		<div className="py-28 px-28">
			<h1 className="text-4xl font-bold py-2 my-1 mx-2">Sign In</h1>
			<p className="text-sm py-2  my-1 mx-2">Sign in to your account</p>
			<div className="flex py-1 gap-3 m-2 justify-start">
				<button
					className="bg-slate-50 w-full p-2 rounded-lg"
					onClick={signInWithGoogle}
				>
					Sign in with Google
				</button>
				<button className="bg-slate-50 w-full p-2 rounded-lg" disabled>
					Sign in with Apple
				</button>
			</div>
			<div className="">
				<form className="bg-slate-50 p-2 m-2 gap-2 rounded-2xl">
					<div className="p-2 m-1">
						<label className="my-2 pb-3" htmlFor="email">
							Email Address
						</label>
						<input
							className="bg-slate-200 rounded-md p-1 border-transparent w-full"
							type="text"
						/>
					</div>
					<div className="p-2 m-1">
						<label htmlFor="password">Password</label>
						<br />
						<input
							className="bg-slate-200 rounded-md p-1 border-transparent w-full"
							type="password"
						/>
					</div>
					<a href="#" className="pl-2 ml-2 text-blue-600">
						Forgot password?
					</a>
					<br />
					<div className="p-2 m-2">
						<button className="bg-[#605BFF] text-slate-100 p-2 w-full rounded-lg">
							Sign In
						</button>
					</div>
				</form>
				<p className="p-2 m-2">
					Don't have an account?{" "}
					<a className="text-blue-600" href="#">
						Register here
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
