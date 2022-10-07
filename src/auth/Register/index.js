import React, { useState } from "react";
import axios from "axios";
import Login from "../Login";
import { AddButton } from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [profileName, setProfileName] = useState("");
	const [address, setAddress] = useState("");
	const [id, setId] = useState("");
	const [login, setLogin] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		const body = {
			address,
			id,
			password,
			profileName,
			username,
		};
		var requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};
		fetch("http://159.223.57.121:8080/auth/do-register", requestOptions)
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

		setLogin(!login);
	};

	const handleClick = () => {
		setLogin(!login);
	};
	return (
		<>
			{login ? (
				<div className="min-h-screen bg-base-100 flex justify-center flex-col items-center">
					<div className="hidden md:block my-10"></div>
					<div className="h-1/2 ">
						<div className="mb-10">
							<h1 className="text-[#2d3360] font-Roboto font-extrabold text-5xl md:text-6xl">Hi!</h1>
							<h4 className="text-black/50 font-Roboto text-2xl italic md:text-3xl">Create a new account</h4>
						</div>

						{/* form */}
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="lg:min-w-full">
								<CustomInput id="input-username" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
								<CustomInput id="input-password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
								<CustomInput id="input-profile" onChange={(e) => setProfileName(e.target.value)} type="text" placeholder="Profil Name" />
								<CustomInput id="input-address" onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
							</div>
							<div className="mt-2">
								<AddButton id="to-register" title="sign up" />
							</div>
						</form>
						<div className="flex mt-4 lg:pb-10 font-Poppins font-normal md:text-lg lg:justify-center lg:text-xl">
							<h5 className="text-black ">Already have an account?</h5>

							<a onClick={handleClick} id="to-login" className="text-[#6498ff] ml-2">
								Login
							</a>
						</div>
					</div>
				</div>
			) : (
				<Login />
			)}
		</>
	);
};

export default Register;
