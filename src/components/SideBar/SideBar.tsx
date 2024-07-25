"use client";

import styles from "./SideBar.module.scss";
import { useNavLinks } from "@/hooks/useNavLinks";
import { ToolBtns } from "../ToolBtns/ToolBtns";
import { ColorPallete } from "../ColorPallete/ColorPallete";
import { CustomLink } from "../CustomLink/CustomLink";

interface Props {
	className?: string;
	toggleSidebar?: () => void;
}

export const SideBar = ({className, toggleSidebar}: Props) => {
	const navLinks = useNavLinks();

	return (
		<aside className={className}>
			<nav className={styles.nav}>
				{navLinks.map(({ href, label, active, icon }) => (
					<CustomLink
						key={href}
						href={href}
						icon={icon}
						toggleSidebar={toggleSidebar}
						className={`${styles["nav__link"]} 
					${active && styles["nav__link--active"]}`}>
						{label}
					</CustomLink>
				))}
			</nav>

			<ToolBtns />
			<ColorPallete
				colors={["#ff4336", "#c7ac16", "#269483", "#378cd1", "#b44fb1"]}
			/>
		</aside>
	);
};
