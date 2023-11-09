export const CardMain = ({ children }) => {
	return (
		<>
			<div className="flex justify-center xs:p-5 sm:p-5 rounded-md shadow-md sm:space-x-4 background-glass">
				{children}
			</div>
		</>
	);
};
