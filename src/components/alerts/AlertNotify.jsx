import { AlertMain } from "./AlertMain";

export const AlertNotify = ({ open, setOpen, title, message }) => {
	return (
		<>
			<AlertMain
				open={open}
				setOpen={setOpen}
				title={title ? title : "Alerta"}
				description={message}
			></AlertMain>
		</>
	);
};
