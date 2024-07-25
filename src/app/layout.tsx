import "./globals.scss";
import { ContextProvider } from "@/context/AppContext";
import { ResponsiveSideBar } from "@/components/ResponsiveSideBar/ReponsiveSideBar";
import { MainContent } from "@/components/MainContent/MainContent";
import { poppins } from "./fonts";
import { LoaderContainer } from "@/components/LoaderContainer/LoaderContainer";
import { ThemeProvider } from "@/context/ThemeContext";
import {Toaster} from "react-hot-toast";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {

	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" sizes="any" type="image/png"/>
				<meta name="description" content="Hello, my name is Paweł. I\'m a Web Developer. I create and optimize web applications, ensuring top performance and seamless user experiences." />
				<link rel="preload" href="/assets/photo_1.webp" as="image" />
				<link rel="preload" href="/assets/photo_2.png" as="image" />
				<title>Paweł Żydek | Personal Portfolio</title>
			</head>

			<ThemeProvider>
				<body className={`${poppins.className} ${"layout"}`}>
					<LoaderContainer>
						<ContextProvider>
							<ResponsiveSideBar />
							<MainContent className="mainContent">{children}</MainContent>
							<Toaster />
						</ContextProvider>
					</LoaderContainer>
				</body>
			</ThemeProvider>
		</html>
	);
}
