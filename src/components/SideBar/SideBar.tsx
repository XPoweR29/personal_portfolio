"use client";

import Link from "next/link";
import styles from "./SideBar.module.scss";
import { useNavLinks } from "@/hooks/useNavLinks";
import { MutableRefObject, useContext } from "react";
import { AppContext } from "@/context/AppContext";

interface Props {
	className?: string;
	reference?: MutableRefObject<HTMLElement | null>;
}

export const SideBar = ({className}: Props) => {
	const {setIsSideBarOpen} = useContext(AppContext)!;
	const navLinks = useNavLinks();

	return (
		<aside className={className}>
			<nav className={styles.nav}>
				{navLinks.map(({ href, label, active }) => (
					<Link
						key={href}
						href={href}
						onClick={()=>setIsSideBarOpen(false)}
						className={`${styles["nav__link"]} 
					${active && styles["nav__link--active"]}`}>
						{label}
					</Link>
				))}
			</nav>
		</aside>
	);
};
