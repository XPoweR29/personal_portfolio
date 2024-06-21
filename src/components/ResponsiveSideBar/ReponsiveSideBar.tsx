"use client";
import { useContext, useEffect, useState } from "react";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { SideBar } from "../SideBar/SideBar";
import { BurgerBtn } from "../BurgerBtn/BurgerBtn";
import { AppContext } from "@/context/AppContext";
import styles from "./ResponsiveSideBar.module.scss";
import { LoaderContainer } from "../LoaderContainer/LoaderContainer";

export const ResponsiveSideBar = () => {
	const { isSideBarOpen, setIsSideBarOpen } = useContext(AppContext)!;
	const { breakpoint } = useBreakpoints();
	const [isClosing, setIsClosing] = useState(false);
    const [toggleBlock, setToggleBlock] = useState(false);

	useEffect(() => {
		if (!isSideBarOpen && isClosing) {
			const timer = setTimeout(() => {
				setIsClosing(false);
                setToggleBlock(false);
			}, 300);

			return () => clearTimeout(timer);
		}
        if(isSideBarOpen) setToggleBlock(false);
        return undefined;
	}, [isSideBarOpen, isClosing]);

	const handleToggle = () => {
        if(toggleBlock) return;
        setToggleBlock(true);
		if (isSideBarOpen) {
			setIsClosing(true);
		}
		setIsSideBarOpen(!isSideBarOpen);
	};

	return (
		<LoaderContainer>
			{breakpoint.lg ? (
				<SideBar className={styles.sidebar} />
			) : (
				<>
					<BurgerBtn toggleSideBar={handleToggle} />
					{(
						<SideBar className={`${styles.sidebar} ${isSideBarOpen && !isClosing ? styles.opened : isClosing ? styles.closing : ""}`} toggleSidebar={handleToggle}/>
					)}
				</>
			)}
		</LoaderContainer>
	);
};
