import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "App Weather",
	description: "By Maxirpc",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<main className="flex min-h-screen md:p-20 xs:p-2 bg-white dark:bg-slate-800 dark:text-white">
					<div className="w-full">{children}</div>
				</main>
			</body>
		</html>
	);
}
