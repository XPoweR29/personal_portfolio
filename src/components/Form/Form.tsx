"use client"

import { MainBtn } from "../MainBtn/MainBtn";
import styles from "./Form.module.scss";

export const Form = () => {
    const test = (e: React.FormEvent) => {
			e.preventDefault();
		};

	return (
		<form className={styles.form} onSubmit={test}>
			<input type="text" placeholder="Enter your Name" />
			<input type="email" placeholder="Enter your Email" />
			<input type="text" placeholder="Enter Subject" />
			<textarea placeholder="Enter your Message" />
            <MainBtn className={styles.button} filled type="submit">Submit</MainBtn>
		</form>
	);
};
