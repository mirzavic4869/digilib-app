import React from "react";

export default function InputCustom(props) {
	return (
		<div>
			<input
				id={props.id}
				required="required"
				type={props.type}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
				className="input border-none outline-none appearance-none text-black input-sm font-Roboto rounded-[20px] my-1 w-full md:h-10"
			/>
		</div>
	);
}
