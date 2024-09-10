import { Icon } from "@iconify/react/dist/iconify.js";
import background from "../../../public/assets/background.webp";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from "./ProjectCard.module.scss";

interface Props {
    mockupImg: string;
    title: string;
    techStack: string;
    details: string;
    demoUrl: string;
    gitHubUrl: string;
};

export const ProjectCard = ({mockupImg, title, techStack, details, demoUrl, gitHubUrl}: Props) => {
	const { theme } = useContext(ThemeContext)!;

	return (
		<div className={styles.card}>
			<img
				src={background.src}
				alt=""
				className={styles.background}
				style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
			/>
			<img
				src={mockupImg}
				alt="Miniatura projektu"
				className={styles.thumbnail}
			/>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.tech}>{techStack}</p>

			<div className={styles.details}>
				<h2>{techStack}</h2>
				<p>{details}</p>

				<div className={styles.links}>
					<a href={demoUrl} className={styles.demo} target="_blank" rel="noopener noreferrer">
						<Icon icon="mynaui:arrow-up" />
					</a>
					<a href={gitHubUrl} className={styles.github} target="_blank" rel="noopener noreferrer">
						<Icon icon="mingcute:github-fill" />
					</a>
				</div>
			</div>
		</div>
	);
};
