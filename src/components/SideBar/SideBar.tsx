"use client";

import Link from "next/link";
import styles from "./SideBar.module.scss";
import { useNavLinks } from "@/hooks/useNavLinks";
import { ToolBtns } from "../ToolBtns/ToolBtns";

interface Props {
	className?: string;
	toggleSidebar?: () => void;
}

export const SideBar = ({className, toggleSidebar}: Props) => {
	const navLinks = useNavLinks();

	return (
		<aside className={className}>
			<nav className={styles.nav}>
				{navLinks.map(({ href, label, active }) => (
					<Link
						key={href}
						href={href}
						onClick={toggleSidebar}
						className={`${styles["nav__link"]} 
					${active && styles["nav__link--active"]}`}>
						{label}
					</Link>
				))}
			</nav>

			<ToolBtns/>

		</aside>
	);
};
