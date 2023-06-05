import React from "react";
import back from "../../assets/images/my-account.jpg";
import "./login.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";
// import { Link } from "react-router-dom";

const Login = () => { 
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authActions.login());
	};
	return (
		<div>
			<section className="login">
				<div className="container">
					<div className="backImg">
						<img src={back} alt="" />
						<div className="text">
							<h3>Login</h3>
							<h1>My Account</h1>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
						<span>Username or Email Address</span>
						<input type="text" required />
						<span>Password *</span>
						<input type="password" required />
						<button className="button">Log in</button>
						{/* <Link to="/register">Signup</Link>  */}
					</form>
				</div>
			</section>
		</div>
	);
};

export default Login;
