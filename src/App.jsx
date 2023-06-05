import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/login";
import Account from "./pages/Account/Account";
import { useSelector } from "react-redux";

const App = () => {
	const isLoggIn = useSelector((state) => state.auth.isLoggIn);
	const cartItems = useSelector((state) => state.cart.itemsList);
	console.log(cartItems);
	return (
		<div>
			{isLoggIn && (
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/account" element={<Account />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			)}
			{!isLoggIn && <Login />}
		</div>
	);
};

export default App;
