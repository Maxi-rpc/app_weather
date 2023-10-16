export const Header = ({ children }) => {
	return (
		<>
			<div className="w-full p-5 rounded-md shadow-md border">
				<div className="w-full text-center">
					<h1 className="text-xl capitalize">{children}</h1>
				</div>
			</div>
		</>
	);
};
