import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./App.module.scss";
import { SideBar } from "@/components/SideBar/SideBar";
import { ContextProvider } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${styles.layout}`}>
				<ContextProvider>
					<aside className={styles.sideBar}>
						<SideBar />
					</aside>
					<main className={styles.mainContent}>{children}</main>
				</ContextProvider>
			</body>
		</html>
	);
}
