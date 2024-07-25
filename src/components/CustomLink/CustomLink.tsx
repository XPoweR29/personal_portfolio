"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./CustomLink.module.scss";

interface Props extends LinkProps {
	children: ReactNode;
	href: string;
	className?: string;
	toggleSidebar?: () => void;
	mainContentRef?: React.RefObject<HTMLDivElement>;
	download?: boolean;
	icon?: string;
}

function hold(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const CustomLink = ({ children, href, className, toggleSidebar, icon, download, ...props }: Props) => {
	const pathname = usePathname();
	const router = useRouter();

	const handleClick = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
        toggleSidebar && toggleSidebar();
        e.preventDefault();
		if(pathname === href) return;

		document.querySelector(".mainContent")?.classList.add("transition");
		await hold(200);
		router.push(href);
		await hold(200);
		document.querySelector(".mainContent")?.classList.remove("transition");
	};

	return (
		<Link href={href} {...props} onClick={handleClick} download={download} className={`${className} ${styles.link}`}>

			{icon && <Icon icon={icon} className={styles.icon}/>} {children}
		</Link>
	);
};
