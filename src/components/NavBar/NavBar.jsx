import "./NavBar.scss";
import LogoBlack from "../../assets/logoBlack.png";

function NavBar() {
	return (
		<div className="navbar-container">
			<div className="container items">
				<img src={LogoBlack} alt="" />
				<a href="#/connect" ><button className="main-btn">START HERE</button></a>
			</div>
		</div>
	);
}

export default NavBar;