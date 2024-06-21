import { useState, useEffect } from "react";

export const useContentLoaded = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleLoad = () => {
			setIsLoaded(true);
		};

        if(document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        };

        return () => window.removeEventListener("load", handleLoad)
	}, []);

    return isLoaded;
};

