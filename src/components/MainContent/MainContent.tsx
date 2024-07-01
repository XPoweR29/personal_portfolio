"use client";

import App from "@/app/page";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";
import Services from "@/app/services/page";
import { ContentMap } from "@/types/types";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface Props {
	className?: string;
	children: ReactNode;
}

const contentMap: ContentMap = {
	"/": <App />,
	"/about": <About />,
	"/services": <Services />,
	"/projects": <Projects />,
	"/contact": <Contact />,
};

export const MainContent = ({ className, children: page }: Props) => {
	const pathname = usePathname();
	const [changingPage, setChangingPage] = useState(false);
	const [prevPathname, setPrevPathname] = useState("");
	const [prevPage, setPrevPage] = useState<React.ReactNode>(null);

	useEffect(() => {
		if (pathname !== prevPathname) {
			setPrevPage(contentMap[prevPathname]);
			setPrevPathname(pathname);
		}

		setChangingPage(true);
		const timer = setTimeout(() => {
			setChangingPage(false);
		}, 700);

		return () => clearTimeout(timer);
	}, [pathname, prevPathname]);

	return (
		<main className={className}>
			{changingPage ? (
					<div className="testContainer">
						<div className={`${"page"} ${"contentEnter"}`}>{page}</div>
						<div className="prevPage">{prevPage}</div>
					</div>
				) : (
					<div className={"page"}>{changingPage ? null : page}</div>
				)}
		</main>
	);
};
