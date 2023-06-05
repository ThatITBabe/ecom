import React from "react";
import { product } from "../../assets/data/data";
import "./products.css";
import ProductCart from "./ProductCart";

const Products = () => {
	return (
		<div>
			<section className="product">
				<div className="container grid3">
					{product.map((item) => (
						<ProductCart
							key={item.id}
							id={item.id}
							cover={item.cover}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Products;
