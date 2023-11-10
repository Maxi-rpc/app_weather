// material icon
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

// project
import { Divider, ButtonIcon } from "@/components";

/// Component CardWeather

const redes = [
	{
		name: "github",
		icon: <GitHubIcon />,
		url: "https://github.com/Maxi-rpc",
	},
	{
		name: "linkedin",
		icon: <LinkedInIcon />,
		url: "https://www.linkedin.com/in/maximiliano-g-miranda/",
	},
	{
		name: "repo",
		icon: <CodeIcon />,
		url: "https://github.com/Maxi-rpc/app_weather",
	},
];

const Icons_socials = () => {
	return redes.map((red, index) => (
		<ButtonIcon key={index} icon={red.icon} url={red.url} />
	));
};

export const Footer = () => {
	return (
		<>
			<div className="w-full p-5 flex justify-center">
				<div className="w-6/12">
					<div className="w-full text-center font-light">
						<p>Todos los derechos reservados. Dev - Maxi-rpc</p>
					</div>
					<Divider />
					<div className="w-full">
						<div className="flex justify-center">
							<Icons_socials />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
