"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface Props {
	className?: string;
	children: ReactNode;
};

export const MainContent = ({ className, children: page }: Props) => {
	const pathname = usePathname();
	const [changingPage, setChangingPage] = useState(false);

	useEffect(() => {
		setChangingPage(true);
		const timer = setTimeout(() => {
			setChangingPage(false);
		}, 700);

		return () => clearTimeout(timer);
	}, [pathname]);
	//FIXME: Implement proper <Loader/>
	return (
		<main className={className}>
			<main className={className}>
				{changingPage ? (
					<div className={`${"page"} ${"contentEnter"}`}>{page}</div>
				) : (
					<div className={"page"}>{changingPage ? "...LOADING..." : page}</div>
				)}
			</main>
		</main>
	);
};
