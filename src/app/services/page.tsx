import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Services.module.scss";
import sphere from "../../../public/assets/sphere.webp";
import { rubikGlitch } from "../fonts";
import { ServiceItem } from "@/components/ServiceItem/ServiceItem";
import { Service } from "@/types/types";

const servicesMockup: Service[] = [
	{
		icon: "mdi:responsive",
		title: "Web Development",
		text: "I create responsive and modern websites using the latest technologies. I provide fast and efficient web applications.",
	},
	{
		icon: "material-symbols:developer-mode-tv-outline-rounded",
		title: "Frontent",
		text: "I create attractive and interactive user interfaces using such techlologies as HTML, CSS, JS, React.",
	},
	{
		icon: "mdi:server",
		title: "Backend",
		text: "I build robust and scalable backends using Node.js, Express and databases such as MongoDB and SQL.",
	},
	{
		icon: "eos-icons:service",
		title: "Freelance",
		text: "I carry out orders for customized web projects.",
	},
	{
		icon: "fluent:globe-search-24-filled",
		title: "SEO",
		text: "I optimize websites for search engines, increasing visibility and position in search results.",
	},
	{
		icon: "fluent:window-dev-tools-16-filled",
		title: "Support",
		text: "I provide technical support and regular updates to keep your applications running smoothly.",
	},
];

const Services = () => {
	return (
		<section className={styles.services}>

			<div className={styles.imgContainer}>
				<img src={sphere.src} alt="" className={styles.sphereImg} />
			</div>

			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					<span className={rubikGlitch.className}>S</span>ervices
				</h1>
				<p className={styles.text}>
					Here you'll find an overview of the services I offer as a web
					developer. From creating dynamic websites to maintaining and
					optimizing web applications, these are the areas where I have
					practical experience and skills.
				</p>

				<div className={styles.servicesContainer}>
					{servicesMockup.map(({ icon, text, title }) => (
						<ServiceItem icon={icon} text={text} title={title} key={title} />
					))}
				</div>
			</Wrapper>
		</section>
	);
};

export default Services;
