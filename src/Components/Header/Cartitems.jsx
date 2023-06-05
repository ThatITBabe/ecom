import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";


const Cartitems = ({ cover, id, name, price, quantity, totalPrice }) => {
	const dispatch = useDispatch();

	const inCartitems = () => {
		dispatch(cartActions.addToCart({ id, name, price, cover }));
	};

	const descCartitems = () => {
		dispatch(cartActions.removeFromCart( id ));
	};

	return (
		<div>
			<div className="cardList" key={id}>
				<div className="cartContent">
					<div className="img">
						<img src={cover} alt="" />
						<button className="remove flexCenter">
							<AiOutlineClose />
						</button>
					</div>
					<div className="details">
						<p>{name}</p>
						<label htmlFor="">Unit Price ${price}</label>
						<div className="price">
							<div className="qty flexCenter">
								<button className="plus" onClick={inCartitems}>
									<AiOutlinePlus />
								</button>
								<button className="num">1{quantity}</button>
								<button
									className="minus"
									onClick={descCartitems}
								>
									<AiOutlineMinus />
								</button>
							</div>
							<div className="priceTitle">${totalPrice}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cartitems;
