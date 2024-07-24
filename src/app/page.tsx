"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import { MainBtn } from "@/components/MainBtn/MainBtn";
import { SocialBtn } from "@/components/SocialBtn/SocialBtn";
import { Icon } from "@iconify/react";
import photo_2 from "../../public/assets/photo_2.png";
import photo_1 from "../..//public/assets/photo_1.webp";
import atomic from "../../public/assets/atomic.png";
import styles from "./Home.module.scss";
import { rubikGlitch } from "./fonts";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { LoaderContainer } from "@/components/LoaderContainer/LoaderContainer";
import { TypeAnimation } from "react-type-animation";

const App = () => {
	const { breakpoint } = useBreakpoints();

	return (
		<LoaderContainer>
			<section className={styles.home}>
				<Wrapper className={styles.wrapper}>
					<img className={styles.atomic} src={atomic.src} alt="" />

					<h1 className={styles.heading}>
						Hello, my name is{" "}
						<strong className={rubikGlitch.className}>Paweł.</strong> <br /> I'm
						a{" "}
						<strong className={rubikGlitch.className}>
							<TypeAnimation
								sequence={[
									"Web Developer.",
									1500,
									"Backend Dev.",
									1500,
									"Freelancer.",
									1500,
								]}
								wrapper="span"
								speed={2}
								repeat={Infinity}
								className={styles.cursor}
							/>
						</strong>
					</h1>
					<p className={styles.text}>
						I create and optimize web applications, ensuring top performance and
						seamless user experiences. Seeking opportunities to innovate and
						grow in the IT field.
					</p>

					<div className={styles.ctaBtns}>
						<MainBtn filled>Download CV</MainBtn>
						<MainBtn>Contact Me</MainBtn>
					</div>

					<div className={styles.socialBtns}>
						<SocialBtn href="https://www.linkedin.com/in/pawe%C5%82-%C5%BCydek-36a1b1306/">
							<Icon icon="flowbite:linkedin-solid" />
						</SocialBtn>
						<SocialBtn href="https://github.com/XPoweR29">
							<Icon icon="mingcute:github-fill" />
						</SocialBtn>
					</div>

					<div className={styles.photoContainer}>
						<img
							className={styles.photo}
							alt="personal photo"
							src={breakpoint.lg ? photo_1.src : photo_2.src}
							loading="lazy"
						/>
					</div>
				</Wrapper>
			</section>
		</LoaderContainer>
	);
};

export default App;
