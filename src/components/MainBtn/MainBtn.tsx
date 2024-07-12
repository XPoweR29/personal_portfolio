import { ReactNode } from "react";
import styles from "./MainBtn.module.scss";

interface Props {
	children: ReactNode;
	filled?: boolean;
	className?: string;
	type?: "submit" | "button" | "reset" | undefined;
    disabled?: boolean;
}

export const MainBtn = ({children, filled, className, type, disabled}: Props) => {
    return (
        <button className={`${className} ${styles.btn} ${filled?styles["btn--filled"]:""}`} type={type} disabled={disabled}>
            {children}
        </button>
    );
}
