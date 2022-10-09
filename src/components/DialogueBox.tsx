import React from "react";

const DialogueBox = ({ name, text }: { name: string; text: string }) => {
	return (
		<div className="borderimg absolute bottom-0 h-1/6 w-full bg-slate-100 p-2 opacity-95">
			<p className="font-handwritten text-xl font-semibold">{text}</p>
			<div className="borderimg2 relative top-[-110px] left-[-30px] w-[20%] bg-slate-100 text-center opacity-95">
				<p className="relative font-handwritten text-xl font-bold">{name}</p>
			</div>
		</div>
	);
};

export default DialogueBox;