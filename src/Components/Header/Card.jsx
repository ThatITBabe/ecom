import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import Cartitems from "./Cartitems";
import { product } from "../../assets/data/data";
import { useSelector } from "react-redux";

const Card = () => {
	const [cardOpen, setCardOpen] = useState(false);
	const closeCard = () => {
		setCardOpen(null);
	};


const quantity = useSelector((state) => state.cart.totalQuantity);
	const cartItems = useSelector((state) => state.cart.itemsList);
	

let total = 0
const itemsLists = useSelector((state)=>state.cart.itemsList)
itemsLists.forEach((item)=>{
	total += item.totalPrice;
})
return (
		<div>
			<div className="card">
				<BiShoppingBag
					className="cardIcon"
					onClick={() => setCardOpen(!cardOpen)}
				/>
				<span className="flexCenter">{quantity}</span>
			</div>

			<div className={cardOpen ? "overlay" : "nonoverlay"}></div>
			<div className={cardOpen ? "cartItem" : "cardhide"}>
				<div className="title flex">
					<h2>Shopping cart</h2>
					<button onClick={closeCard}>
						<AiOutlineClose className="icon" />
					</button>
				</div>
				{cartItems.map((item) => (
					<Cartitems
						id={item.id}
						cover={item.cover}
						name={item.name}
						price={item.price}
						quantity={item.quantity}
						totalPrice={item.totalPrice}
					/>
				))}

				<div className="checkOut">
					<button>
						<span>Proceed To Checkout</span>
						<label htmlFor="">$ {total}</label>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
