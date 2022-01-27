import "./NavBar.scss";
import "./DarkNavBar.scss";
import LogoWhite from "../../assets/logoWhite.png";

function DarkNavBar(props) {
	return (
		<div className="navbar-container dark">
			<div className="container items">
				<img src={LogoWhite} alt="" />
				<h2>{props.text}</h2>
				<button className="second-btn">{props.textBtn}</button>
			</div>
		</div>
	);
}

export default DarkNavBar;