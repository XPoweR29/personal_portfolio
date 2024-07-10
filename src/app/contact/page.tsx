import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Contact.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { rubikGlitch } from "../fonts";
import { Form } from "@/components/Form/Form";
import net from "../../../public/assets/net.webp";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<img src={net.src} alt="" className={styles.netImg} />

			<Wrapper className={styles.wrapper}>
				<div className={styles.contentContainer}>
					<h1 className={styles.heading}>
						<span className={rubikGlitch.className}>C</span>ontact
					</h1>
					<h2 className={styles.title}>Reach Out Anytime!</h2>
					<p className={styles.text}>
						Thank you for visiting my portfolio page! I am grateful for your
						time and interest in my projects. If you are looking for an
						ambitious and fast learning web developer who wants to develop his
						skills in a dynamic IT environment, I will be very happy if you give
						me a chance. I encourage you to contact me via the links below or
						the site form. I look forward to working with you!
					</p>

					<div className={styles.linkBox}>
						<a href="tel:+48505264517" className={styles.link}>
							<Icon icon="fluent:phone-24-filled" className={styles.icon} />
							<span>+48 505-265-517</span>
						</a>

						<a href="mailto:pawelzydek29@gmail.com" className={styles.link}>
							<Icon
								icon="material-symbols:mail-sharp"
								className={styles.icon}
							/>
							<span>pawelzydek29@gmail.com</span>
						</a>

						<a
							href="https://www.linkedin.com/in/pawe%C5%82-%C5%BCydek-36a1b1306/"
							className={styles.link}
							target="_blank"
							rel="noopener noreferrer">
							<Icon icon="mdi:linkedin" className={styles.icon} />
							<span>linkedin.com/in/paweł-żydek</span>
						</a>

						<a
							href="https://github.com/XPoweR29"
							className={styles.link}
							target="_blank"
							rel="noopener noreferrer">
							<Icon icon="mingcute:github-fill" className={styles.icon} />
							<span>github.com/XPoweR29</span>
						</a>
					</div>
				</div>

				<Form />
			</Wrapper>
		</section>
	);
};

export default Contact;
