const CardHeader = ({ title, subheader, children, textAlign }) => {
	return (
		<div className="w-full">
			<h3 className="font-semibold text-xl">{title}</h3>
			<h4 className="text-sm">{subheader}</h4>
			<div className="border-t mt-3"></div>
		</div>
	);
};

export const Card = ({ title, children }) => {
	return (
		<>
			<div className="w-full p-5 rounded-md shadow-md border">
				{/* <div className="w-full text-center">
					<h3 className="text-xl">{title}</h3>
				</div> */}
				<CardHeader title={title} subheader={"subtitulo de card"}></CardHeader>
				<div>{children}</div>
			</div>
		</>
	);
};
