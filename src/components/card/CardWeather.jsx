import Image from "next/image";
import { CardMain, Loading } from "@/components";
/// Component CardWeather
// assets
import icon_sol from "@/public/icons/icon_sol.svg";
import icon_sol_nublado from "@/public/icons/icon_sol_nublado.svg";
import icon_sol_lluvia from "@/public/icons/icon_sol_lluvia.svg";
import icon_tormenta from "@/public/icons/icon_tormenta.svg";
import icon_lluvia from "@/public/icons/icon_lluvia.svg";
import icon_luna from "@/public/icons/icon_luna.svg";
import icon_luna_nublado from "@/public/icons/icon_luna_nublado.svg";

const icons = {
	Clear: icon_sol,
	Clouds: icon_sol_nublado,
	Rain: icon_lluvia,
	Drizzle: icon_sol_lluvia,
	Mist: icon_sol_nublado,
};

export const CardWeather = ({
	country,
	province,
	image,
	temperature,
	temp_min,
	temp_max,
	description,
}) => {
	return (
		<>
			<div className="w-full">
				<CardMain>
					<div className="xs:flex xs:flex-col-reverse xs:justify-center  sm:w-full sm:flex sm:flex-row sm:justify-between">
						{/* column */}
						<div className="xs:w-full sm:w-1/2">
							<div className="h-full grid grid-cols-1 content-center text-center space-y-4">
								<h2 className="text-xl font-bold">
									{province}, {country}
								</h2>
								<h3 className="text-5xl">{temperature} °C</h3>
								<h4 className="text-base">
									Max: {temp_max}° / Min: {temp_min}°
								</h4>
								<h5 className="text-base capitalize">{description}</h5>
							</div>
						</div>
						{/* column */}
						<div className="xs:w-full sm:w-1/2">
							<div className="h-full grid grid-cols-1 justify-items-center content-center">
								<Image
									src={icons[image]}
									width={200}
									height={200}
									alt={image}
								/>
							</div>
						</div>
					</div>
				</CardMain>
			</div>
		</>
	);
};
