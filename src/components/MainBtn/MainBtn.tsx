import { ReactNode } from "react";
import styles from "./MainBtn.module.scss";

interface Props {
    children: ReactNode;
    filled?: boolean;
    className?: string;
}

export const MainBtn = ({children, filled, className}: Props) => {
    return (
        <button className={`${className} ${styles.btn} ${filled?styles["btn--filled"]:""}`}>
            {children}
        </button>
    );
}
