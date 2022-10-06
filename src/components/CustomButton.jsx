import React from "react";

const AddButton = (props) => {
	return (
		<div>
			{props.loading ? (
				<button id={props.id} onClick={props.onClick} className="btn btn-sm btn-square loading btn-primary w-full text-white font-Roboto mt-2 rounded-[20px] md:h-10"></button>
			) : (
				<button id={props.id} onClick={props.onClick} className="btn btn-sm bg-[#2d3360] w-full text-white font-Roboto mt-2 rounded-[20px] md:h-10 ">
					{props.title}
				</button>
			)}
		</div>
	);
};

const AddButton2 = (props) => {
	return (
		<button id={props.id} onClick={props.onClick} className="btn btn-sm btn-outline w-full text-primary font-Roboto mt-2 rounded-[20px] md:h-10">
			{props.title}
		</button>
	);
};

export { AddButton2, AddButton };
