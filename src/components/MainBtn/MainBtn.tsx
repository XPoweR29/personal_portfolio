import { ReactNode } from "react";
import styles from "./MainBtn.module.scss";

interface Props {
	children: ReactNode;
	filled?: boolean;
	className?: string;
	type?: "submit" | "button" | "reset" | undefined;
}

export const MainBtn = ({children, filled, className, type}: Props) => {
    return (
        <button className={`${className} ${styles.btn} ${filled?styles["btn--filled"]:""}`} type={type}>
            {children}
        </button>
    );
}
