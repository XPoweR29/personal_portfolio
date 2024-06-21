"use client";

import "./globals.scss";
import { ContextProvider } from "@/context/AppContext";
import { ResponsiveSideBar } from "@/components/ResponsiveSideBar/ReponsiveSideBar";
import { MainContent } from "@/components/MainContent/MainContent";
import { poppins } from "./fonts";
import { LoaderContainer } from "@/components/LoaderContainer/LoaderContainer";

//IMPROVE: Implement dark/light theme at right...
export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<title>Personal Portfolio</title>
				<meta name="description" content="WebDeveloper portfolio" />
				<link rel="preload" href="/assets/photo_1.webp" as="image" />
				<link rel="preload" href="/assets/photo_2.png" as="image" />
			</head>

			<body className={`${poppins.className} ${"layout"}`}>
				<LoaderContainer>
					<ContextProvider>
						<ResponsiveSideBar />
						<MainContent className="mainContent">{children}</MainContent>
					</ContextProvider>
				</LoaderContainer>
			</body>
		</html>
	);
}
