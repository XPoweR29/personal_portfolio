import { useState } from "react";
import { toast } from "react-hot-toast";

export interface FormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface Props {
	initialValues: FormValues;
}

export const useForm = ({ initialValues }: Props) => {
	const [values, setValues] = useState<FormValues>(initialValues);
	const [errors, setErrors] = useState<Partial<FormValues>>({});
	const [submitting, setSubmitting] = useState<boolean>(false);

	const validate = (name: string, value: string) => {
		let error: string | undefined;

		if (name === "name") {
			if (value.trim().length < 3)
				error = "Name must consist of at least 3 characters";
		}

		if (name === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
			if (!emailRegex.test(value)) error = "Invalid email address";
		}

		if (!value || value.trim().length === 0) {
			error = "This field is required";
		}

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: error,
		}));

		return error;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setValues((prevValue) => ({
			...prevValue,
			[name]: value,
		}));

		validate(name, value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const validationErrors = Object.keys(values).reduce((acc, key) => {
			const error = validate(key, values[key as keyof FormValues]);

			if (error) {
				acc[key as keyof FormValues] = error;
			}
			return acc;
		}, {} as Partial<FormValues>);

		if (Object.values(validationErrors).some((error) => error)) {
			setErrors(validationErrors);
			return;
		}

		setSubmitting(true);
		try {
			const response = await fetch("https://formspree.io/f/xblrllev", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (response.ok) {
				toast.success("Thanks for message!", {
					duration: 5000,
					position: "bottom-right",
				});
				// eslint-disable-next-line no-console
				console.log("Form successfully sent!");
			} else {
				toast.error("Sending error..."),
					{
						duration: 5000,
						position: "bottom-right",
					};
				// eslint-disable-next-line no-console
				console.error(`Error during submission ${response.statusText}`);
			}
		} catch (err) {
			toast.error("Sending error..."),
				{
					duration: 5000,
					position: "bottom-right",
				};
			console.error(`An Error occured: ${err}`);
		} finally {
			setSubmitting(false);
		}

		setValues(initialValues);
		setErrors({});
	};

	return { values, errors, handleChange, handleSubmit, submitting};
};
