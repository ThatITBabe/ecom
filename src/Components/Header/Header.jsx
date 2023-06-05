import React from "react";
import Medicine from "../../assets/images/Medicine.svg";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import User from "./User";
import { Link } from "react-router-dom";

const Header = () => {
	window.addEventListener("scroll", function () {
		const header = this.document.querySelector(".header");
		header.classList.toggle("active", this.window.scrollY > 100);
	});
	window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	return (
		<div>
			<header className="header">
				<div className="scontainer flex">
					<div className="logo">
						<Link to="/">
							<img src={Medicine} alt="" />
						</Link>
					</div>
					<div className="search flex">
						<AiOutlineSearch />
						<input type="text" placeholder="search.... " />
					</div>
					<div className="account flexCenter">
						<Card />
						<User />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
