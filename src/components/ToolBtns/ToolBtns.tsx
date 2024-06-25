import { Icon } from "@iconify/react";
import { useContext } from "react";
import styles from "./ToolBtns.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

interface Props {
	className?: string;
}

export const ToolBtns = ({ className }: Props) => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className={`${styles.toolBtns} ${className}`}>
			<button onClick={toggleTheme}>
				<Icon icon={theme === "light" ? "tabler:moon-filled" : "bxs:sun"} />
			</button>

			<button>
				<Icon icon="weui:setting-filled" />
			</button>
		</div>
	);
};
