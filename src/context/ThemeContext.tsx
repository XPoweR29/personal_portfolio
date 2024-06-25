"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextType {
	theme: string;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextType>({
	theme: "light",
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<string>("light");

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
		<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
	);
};
