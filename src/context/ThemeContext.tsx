"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextType {
	theme: string;
	toggleTheme: () => void;
    palleteOpen: boolean;
    setPalleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<string>("light");
	const [palleteOpen, setPalleteOpen] = useState<boolean>(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
		};
	}, []);

	useEffect(() => {
		document.body.classList.add(theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.remove("light", "dark");
        document.body.classList.add(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, palleteOpen, setPalleteOpen }}>{children}</ThemeContext.Provider>
	);
};
