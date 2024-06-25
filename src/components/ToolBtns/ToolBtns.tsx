import { Icon } from "@iconify/react";
import { useContext } from "react";
import styles from "./ToolBtns.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

interface Props {
	className?: string;
}

export const ToolBtns = ({ className }: Props) => {
	const { theme, toggleTheme, palleteOpen, setPalleteOpen } =
		useContext(ThemeContext)!;

	const handlePallete = () => {
		setPalleteOpen((isOpen) => !isOpen);
	};

	return (
		<div className={`${styles.toolBtns} ${className}`}>
			<button className={styles.toggleBtn} onClick={toggleTheme}>
				<div className={`${styles.iconsContainer} ${styles[theme]}`}>
					<div className={styles.icon}>
						<Icon icon={"tabler:moon-filled"} />
					</div>
					<div className={styles.icon}>
						<Icon icon={"bxs:sun"} />
					</div>
				</div>
			</button>

			<button className={styles.colorBtn} onClick={handlePallete}>
				<Icon
					icon="weui:setting-filled"
					className={`${styles.icon} ${palleteOpen && styles.rotated}`}
				/>
			</button>
		</div>
	);
};
