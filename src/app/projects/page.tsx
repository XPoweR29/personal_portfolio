"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Projects.module.scss";
import atom from "../../../public/assets/projects_atom.webp";
import adona_mockup from "../../../public/assets/mockup_adona.png";
import kwatery_mockup from "../../../public/assets/mockup_kwatery.png";
import portfolio_mockup from "../../../public/assets/mockup_portfolio.png";
import { rubikGlitch } from "../fonts";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { useBreakpoints } from "@/hooks/useBreakpoints";

const Projects = () => {
	const { breakpoint } = useBreakpoints();

	return (
		<section className={styles.projects}>
			<Wrapper className={styles.wrapper}>
				<img src={atom.src} alt="" className={styles.atom} />
				{breakpoint.sm && <img src={atom.src} alt="" className={styles.atom} />}
				<h1 className={styles.heading}>
					<span className={rubikGlitch.className}>P</span>rojects
				</h1>

				<p className={styles.text}>
					You can explore the various web development projects I have worked on,
					showcasing my skills and experience in creating functional and
					visually appealing web applications.
				</p>

				<div className={styles.cardsContainer}>
					<ProjectCard
						mockupImg={adona_mockup.src}
						title="Orientl Restaurnat Website"
						techStack="React | TypeScript | Firebase | Sass"
						details="It is a collaborative project with a real client, featuring an admin panel, Firebase-based authentication, and robust form handling with validation."
						demoUrl="http://www.adona.net.pl/"
						gitHubUrl="https://github.com/XPoweR29/adona-oriental/tree/main"
					/>

					<ProjectCard
						mockupImg={kwatery_mockup.src}
						title="Room Rental Website"
						techStack="React | TypeScript | Sass"
						details="A real project developed for a client. The website includes multiple subpages, handles form submissions, and is optimized for key search terms to enhance visibility."
						demoUrl="https://www.kwateryuzosi.pl/"
						gitHubUrl="https://github.com/XPoweR29/beskidzka-kwatera"
					/>

					<ProjectCard
						mockupImg={portfolio_mockup.src}
						title="Web Developer Personal Portfolio"
						techStack="NextJS | TypeScript | Sass"
						details="My Personal Portfolio website, built using NextJS showcases my projects and CV. Designed to highlight my skills and experience. For development efficiency and code quality, I also integrated Husky for pre-commit hooks."
						demoUrl="#"
						gitHubUrl="https://github.com/XPoweR29/personal_portfolio"
					/>

				</div>
			</Wrapper>
		</section>
	);
};

export default Projects;
