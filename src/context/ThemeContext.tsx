"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextType {
	theme: string;
	toggleTheme: () => void;
	palleteOpen: boolean;
	setPalleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
	mainColor: string;
	changeMainColor: (color: string) => void; // eslint-disable-line no-unused-vars
}

export const ThemeContext = createContext<ContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<string>("light");
	const [palleteOpen, setPalleteOpen] = useState<boolean>(false);
	const [mainColor, setMainColor] = useState<string>("#378cd1");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
		}

		const sotredMainColor = localStorage.getItem("main-color");
		if (sotredMainColor) {
			setMainColor(sotredMainColor);
		}
	}, []);

	useEffect(() => {
		document.body.classList.add(theme);
	}, [theme]);

	useEffect(() => {
		document.documentElement.style.setProperty("--main-color", mainColor);
	}, [mainColor]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.body.classList.remove("light", "dark");
		document.body.classList.add(newTheme);
	};

	const changeMainColor = (color: string) => {
		setMainColor(color);
		localStorage.setItem("main-color", color);
		setPalleteOpen(false);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
				palleteOpen,
				setPalleteOpen,
				mainColor,
				changeMainColor,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
