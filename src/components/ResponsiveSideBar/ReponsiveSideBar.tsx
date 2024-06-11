"use client";
import { useContext, useEffect, useState } from "react";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { SideBar } from "../SideBar/SideBar";
import { BurgerBtn } from "../BurgerBtn/BurgerBtn";
import { AppContext } from "@/context/AppContext";
import styles from "./ResponsiveSideBar.module.scss";

export const ResponsiveSideBar = () => {
	const { isSideBarOpen, setIsSideBarOpen } = useContext(AppContext)!;
	const { breakpoint } = useBreakpoints();
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		if (!isSideBarOpen && isClosing) {
			const timer = setTimeout(() => {
				setIsClosing(false);
			}, 500);

			return () => clearTimeout(timer);
		}
        return undefined;
	}, [isSideBarOpen, isClosing]);

	const handleToggle = () => {
		if (isSideBarOpen) {
			setIsClosing(true);
		}
		setIsSideBarOpen(!isSideBarOpen);
	};

    //FIXME: Too fast clicking causes problems with button.
	return (
		<>
			{breakpoint.md ? (
				<SideBar className={styles.sidebar} />
			) : (
				<>
					<BurgerBtn toggleSideBar={handleToggle} />
					{(
						<SideBar className={`${styles.sidebar} ${isSideBarOpen && !isClosing ? styles.opened : isClosing ? styles.closing : ""}`} />
					)}
				</>
			)}
		</>
	);
};
