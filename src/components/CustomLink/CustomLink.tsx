"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props extends LinkProps {
	children: ReactNode;
	href: string;
	className?: string;
	toggleSidebar?: () => void;
	mainContentRef?: React.RefObject<HTMLDivElement>;
	download?: boolean;
}

function hold(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const CustomLink = ({ children, href, className, toggleSidebar, download, ...props }: Props) => {
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
		<Link href={href} {...props} onClick={handleClick} download={download} className={className}>
			{children}
		</Link>
	);
};
