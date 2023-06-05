import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";
const User = () => {
	const user = true;
	const [profileOpen, setProfileOpen] = useState(false);

	const close = () => {
		setProfileOpen(null);
	};

	const dispatch = useDispatch();
	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(authActions.logout());
	};

	return (
		<div>
			<div className="profile">
				{user ? (
					<>
						<button
							className="img"
							onClick={() => setProfileOpen(!profileOpen)}
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
								alt=""
							/>
						</button>
						{profileOpen && (
							<div
								className="openProfile boxItems"
								onClick={close}
							>
								<div className="image">
									<Link to="/account">
										<div className="img">
											<img
												src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
												alt=""
											/>
										</div>
									</Link>

									<div className="text">
										<h4>OBASANYA Anuoluwapo</h4>
										<label htmlFor="">Lagos, NG</label>
									</div>
								</div>
								<Link to="/login">
									<button className="box">
										<CiSettings className="icon" />
										<h4>My Account</h4>
									</button>
								</Link>

								<button className="box">
									<BsBagCheck className="icon" />
									<h4>My Order</h4>
								</button>
								<button className="box">
									<MdFavoriteBorder className="icon" />
									<h4>Wishlist</h4>
								</button>
								<button className="box">
									<GrHelp className="icon" />
									<h4>Help</h4>
								</button>
								<button className="box" onClick={logoutHandler}>
									<BiLogOut className="icon" />
									<h4>Log Out</h4>
								</button>
							</div>
						)}
					</>
				) : (
					<button>My Account</button>
				)}
			</div>
		</div>
	);
};

export default User;
