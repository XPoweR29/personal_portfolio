"use client";

import { FormValues, useForm } from "@/hooks/useForm";
import { MainBtn } from "../MainBtn/MainBtn";
import styles from "./Form.module.scss";

const initialValues: FormValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

export const Form = () => {
	const { errors, handleChange, values, handleSubmit, submitting } = useForm({initialValues});

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<p>{errors.name}</p>
				<input
					type="text"
					name="name"
					placeholder="Enter your Name"
					value={values.name}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.inputContainer}>
				<p>{errors.email}</p>
				<input
					type="email"
					name="email"
					placeholder="Enter your Email"
					value={values.email}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.inputContainer}>
				<p>{errors.subject}</p>
				<input
					type="text"
					name="subject"
					placeholder="Enter Subject"
					value={values.subject}
					onChange={handleChange}
					required
				/>
			</div>

			<div className={styles.inputContainer}>
				<p>{errors.message}</p>
				<textarea
					name="message"
					placeholder="Enter your Message"
					value={values.message}
					onChange={handleChange}
					required
				/>
			</div>

			<MainBtn className={styles.button} filled type="submit" disabled={submitting}>
				Submit
			</MainBtn>
		</form>
	);
};
