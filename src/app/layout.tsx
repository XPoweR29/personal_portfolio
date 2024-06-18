import type { Metadata } from "next";
import "./globals.scss";
import { ContextProvider } from "@/context/AppContext";
import { ResponsiveSideBar } from "@/components/ResponsiveSideBar/ReponsiveSideBar";
import { MainContent } from "@/components/MainContent/MainContent";
import { poppins } from "./fonts";

export const metadata: Metadata = {
	title: "Personal Portfolio",
	description: "WebDeveloper portfolio",
};

//IMPROVE: Implement dark/light theme at right...
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} ${"layout"}`}>
				<ContextProvider>
					<ResponsiveSideBar />
					<MainContent className="mainContent">{children}</MainContent>
				</ContextProvider>
			</body>
		</html>
	);
}
