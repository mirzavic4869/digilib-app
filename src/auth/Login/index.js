import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddButton } from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Home from "../../pages/Home";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = {
			password,
			username,
		};

		let requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};
		await fetch(`http://159.223.57.121:8080/auth/do-login`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				const { code, message } = result;

				if (code === 200) {
					localStorage.setItem("username", JSON.stringify(username));
					localStorage.setItem("password", JSON.stringify(password));
				}
				alert(message);
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<div className="min-h-screen flex justify-center flex-col items-center bg-base-100">
				<div className="hidden md:block my-10"></div>
				<div className="h-1/2 ">
					<div className="mb-10">
						<h1 className="text-[#2d3360] font-Roboto font-extrabold text-5xl md:text-6xl">Welcome!</h1>
						<h4 className="text-black/50 font-Roboto text-2xl italic md:text-3xl">Sign in to continue</h4>
					</div>

					{/* form login */}
					<form onSubmit={(e) => handleSubmit(e)}>
						<CustomInput id="input-username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
						<CustomInput id="input-password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

						<div className="mt-2 w-full">
							<AddButton id="btn-login" title="sign in" />
						</div>
					</form>

					{/* under text */}
					<div className="flex mt-4 font-Roboto font-normal md:text-lg lg:justify-center lg:text-xl">
						<h5 className="text-black ">Don`t have account?</h5>

						<a id="to-register" className="text-primary ml-2">
							Register
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
