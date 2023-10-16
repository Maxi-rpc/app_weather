const CardHeader = ({ title, subheader }) => {
	return (
		<div className="w-full">
			<h3 className="font-semibold text-xl">{title}</h3>
			<h4 className="text-sm">{subheader}</h4>
			<div className="border-t mt-3"></div>
		</div>
	);
};

export const Card = () => {
	return (
		<>
			<div className="w-full p-5 rounded-md shadow-md border">
				<div className="w-full text-center">
					<h3 className="font-semibold text-xl">Card title</h3>
					<h4 className="text-sm">Subtitulo del clima</h4>
				</div>
				<div className="border-t mt-3"></div>
				<div>
					grados actuales
				</div>
			</div>
		</>
	);
};
