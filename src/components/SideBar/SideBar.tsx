"use client";

import Link from "next/link";
import styles from "./SideBar.module.scss";
import { useNavLinks } from "@/hooks/useNavLinks";

export const SideBar = () => {
	const navLinks = useNavLinks();

	return (
		<nav className={styles.nav}>
			{navLinks.map(({ href, label, active}) => (
				<Link
					key={href}
					href={href}
					className={`${styles["nav__link"]} 
					${active && styles["nav__link--active"]}`}>
					{label}
				</Link>
			))}
		</nav>
	);
};
