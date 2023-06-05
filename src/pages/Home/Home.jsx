import React from "react";
import Slider from "../../Components/Hero/slider";
import Order from "../../Components/Hero/Order";
import Category from "../../Components/Category/Category";
import Products from "../../Components/Products/Products";

const Home = () => {
	return (
		<div>
			<Slider />
			<Order />
			<Category />
			<Products />
		</div>
	);
};

export default Home;
