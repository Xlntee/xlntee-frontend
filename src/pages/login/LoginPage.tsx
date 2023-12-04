import "./LoginPage.scss";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { FC } from "react";
import { authApiSlice, useLoginMutation } from "../../store/auth/authApiSlice";
import { useForm } from "react-hook-form";

interface IFormData {
	email: string;
	password: string;
}

const deviceId = "1111";

const LoginPage: FC = () => {
	const { register, handleSubmit } = useForm<IFormData>();

	const [login, { isLoading: isLoginLoading }] = useLoginMutation();

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);

		try {
			const res = await login({ ...data, deviceId }).unwrap();

			console.log(res);
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<ApiProvider api={authApiSlice}>
			<div className="login-page">
				<form onSubmit={onSubmit} className="login-page__form">
					<input className="login-page__input" type="email" {...register("email")} autoFocus />
					<input className="login-page__input" type="password" {...register("password")} />
					<button className="login-page__submit" type="submit" disabled={isLoginLoading}>
						Login
					</button>
				</form>
			</div>
		</ApiProvider>
	);
};

export default LoginPage;
