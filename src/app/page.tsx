import Wrapper from "@/components/Wrapper/Wrapper";
import { MainBtn } from "@/components/MainBtn/MainBtn";
import { SocialBtn } from "@/components/SocialBtn/SocialBtn";
import { Icon } from "@iconify/react";
import photo_2 from "../assets/photo_2.png";
import atomic from "../assets/atomic.png";
import styles from "./Home.module.scss";

const App = () => {
	return (
		//FIXME: Add proper buttons action.
		<div className={styles.home}>
			<Wrapper className={styles.wrapper}>
				<img className={styles.atomic} src={atomic.src} alt="" />

				<h1 className={styles.heading}>
					Hello, my name is <span>Paweł.</span> <br /> I'm a{" "}
					<span>Web Developer</span>
				</h1>
				<p className={styles.text}>
					I create and optimize web applications, ensuring top performance and
					seamless user experiences. Seeking opportunities to innovate and grow
					in the IT field.
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

				<img className={styles.photo} alt="personal photo" src={photo_2.src}/>
			</Wrapper>
		</div>
	);
};

export default App;
