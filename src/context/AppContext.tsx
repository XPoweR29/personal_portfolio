"use client"
import { Breakpoints } from "@/types/breakpoints";
import { ReactNode, createContext, useEffect, useState } from "react";

type AppContextType = {
	breakpoint: Breakpoints;
};

export const AppContext = createContext<AppContextType | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [breakpoint, setBreakpoint] = useState<Breakpoints>({
		sm: false,
		md: false,
		lg: false,
		xl: false,
		xxl: false,
	});

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint({
				sm: window.innerWidth >= 576,
				md: window.innerWidth >= 768,
				lg: window.innerWidth >= 992,
				xl: window.innerWidth >= 1200,
				xxl: window.innerWidth >= 1400,
			});
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		window.history.scrollRestoration = "manual";

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// declare type for all these vars in AppContextType!
	const contextValues = {
		breakpoint,
	}

	return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
