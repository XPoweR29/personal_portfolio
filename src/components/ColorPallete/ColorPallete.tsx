import {useContext} from "react";
import styles from "./ColorPallete.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

interface Props {
	colors: string[];
}

export const ColorPallete = ({ colors }: Props) => {
    const {palleteOpen, changeMainColor} = useContext(ThemeContext)!;

	return (
			<div className={`${styles.pallete} ${palleteOpen && styles["pallete--open"]}`}>
				<p>Theme colors</p>

				<div className={styles.container}>
					{colors.map((color, index) => (
						<div
							className={styles.color}
							style={{ backgroundColor: color }}
							key={index}
							onClick={()=>changeMainColor(color)}
							></div>
					))}
				</div>
			</div>
	);
};
