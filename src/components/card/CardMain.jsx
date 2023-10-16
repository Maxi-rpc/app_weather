export const CardMain = ({ children }) => {
	return (
		<>
			<div className="flex p-5 rounded-md shadow-md space-x-4 border">
				{children}
			</div>
		</>
	);
};
