import { ReactNode } from "react";
import styles from "./MainBtn.module.scss";

interface Props {
	children: ReactNode;
	filled?: boolean;
	className?: string;
	type?: "submit" | "button" | "reset" | undefined;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MainBtn = ({children, filled, className, type, disabled, onClick}: Props) => {
    return (
        <button onClick={onClick} className={`${className} ${styles.btn} ${filled?styles["btn--filled"]:""}`} type={type} disabled={disabled}>
            {children}
        </button>
    );
}
