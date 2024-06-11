import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import styles from "./BurgerBtn.module.scss";

interface Props {
	toggleSideBar: () => void;
}

export const BurgerBtn = ({toggleSideBar}: Props) => {
	const { isSideBarOpen } = useContext(AppContext)!;

	return (
		<button className={`hamburger hamburger--arrow ${isSideBarOpen&&"is-active"} ${styles.burgerBtn}`} type="button" onClick={toggleSideBar}>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
	);
};
