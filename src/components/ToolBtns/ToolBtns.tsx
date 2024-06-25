import { Icon } from "@iconify/react";
import styles from "./ToolBtns.module.scss";

interface Props {
    className?: string;
}

export const ToolBtns = ({className}: Props) => {
    return (
        <div className={`${styles.toolBtns} ${className}`}>
            <button><Icon icon="tabler:moon-filled" /></button>
            <button><Icon icon="weui:setting-filled" /></button>
        </div>
    );
};
