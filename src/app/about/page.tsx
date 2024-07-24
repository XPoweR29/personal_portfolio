"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./About.module.scss";
import waves from "../../../public/assets/waves.webp";
import photo_2 from "../../../public/assets/photo_2.png";
import { rubikGlitch } from "../fonts";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { MainBtn } from "@/components/MainBtn/MainBtn";
import { useAttachment } from "@/hooks/useAttachment";

const About = () => {
	const { breakpoint } = useBreakpoints();
	const { handleDownload } = useAttachment();

	return (
		<section className={styles.about}>
			<img className={styles.wavesImg} src={waves.src} alt="" />
			{breakpoint.md && (
				<img className={styles.photo} src={photo_2.src} alt="" />
			)}
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					<span className={rubikGlitch.className}>A</span>bout me
				</h1>
				<p className={styles.text}>
					Hi, I'm Paweł, and I'm an aspiring web developer with a passion for
					programming. I have a solid foundation in various technologies and
					have gained practical skills by developing applications and websites.
					I have experience in teamwork and communication with clients. I'm
					taking my first steps in freelancing and looking for a challenge in
					the dynamic world of IT, where I can develop my skills and passion.
				</p>

				{breakpoint.md && (
					<MainBtn onClick={handleDownload} filled className={styles.cvBtn}>
						Download CV
					</MainBtn>
				)}

				<div className={styles.techStack}>
					<h2 className={styles.title}>Tech Stack</h2>
					<p className={styles.txt}>
						These are the tools and technologies I enjoy working with to build
						my web projects:
					</p>

					<div className={styles.container}>
						<Icon icon="devicon:html5" />
						<Icon icon="vscode-icons:file-type-css" />
						<Icon icon="devicon:javascript" />
						<Icon icon="vscode-icons:file-type-sass" />
						<Icon icon="devicon:typescript" />
						<Icon icon="devicon:react-wordmark" />
						<Icon icon="devicon:nodejs-wordmark" />
						<Icon icon="skill-icons:expressjs-dark" />
						<Icon icon="devicon:mysql-wordmark" />
						<Icon icon="devicon:mongodb-wordmark" />
						<Icon icon="devicon:figma" />
						<Icon icon="devicon:git" />
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default About;
