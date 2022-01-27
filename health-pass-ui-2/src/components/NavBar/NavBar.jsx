import "./NavBar.scss";
import LogoBlack from "../../assets/logoBlack.png";

function NavBar() {
	return (
		<div className="navbar-container">
			<div className="container items">
				<img src={LogoBlack} alt="" />
				<button className="main-btn">START HERE</button>
			</div>
		</div>
	);
}

export default NavBar;