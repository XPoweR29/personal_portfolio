import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./ServiceItem.module.scss";

interface Props {
    title: string;
    text: string;
    icon: string;
}

export const ServiceItem = ({icon, text, title}: Props) => {
	return (
		<div className={styles.serviceItem}>
			<Icon icon={icon} className={styles.icon} />
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>
                {text}
			</p>
		</div>
	);
};
