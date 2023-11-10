export const ButtonIcon = ({ icon, url }) => {
	return (
		<>
			<div className="mr-3">
				<a
					href={url}
					target="_blank"
					className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 xs:text-xs sm:text-sm font-semibold sm:leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
				>
					{icon}
				</a>
			</div>
		</>
	);
};
