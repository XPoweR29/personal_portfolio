import { ReactNode } from "react";
import styles from "./SocialBtn.module.scss";

interface Props {
	href: string;
	children: ReactNode;
}

export const SocialBtn = ({ href, children }: Props) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.btn}>
			{children}
		</a>
	);
};
