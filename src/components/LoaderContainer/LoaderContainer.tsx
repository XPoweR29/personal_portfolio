"use client";
import { useContentLoaded } from "@/hooks/useContentLoaded";
import { ReactNode } from "react";
import styles from "./LoaderContainer.module.scss";

interface Props {
	children: ReactNode;
}

export const LoaderContainer = ({ children }: Props) => {
	const isLoaded = useContentLoaded();
	if (!isLoaded)
		return <span className={`${styles.loader} loader`}></span>;
	return <>{children}</>;
};
