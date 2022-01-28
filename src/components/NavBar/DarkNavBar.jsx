import "./NavBar.scss";
import "./DarkNavBar.scss";
import LogoWhite from "../../assets/logoWhite.png";

function DarkNavBar(props) {
	return (
		<div className="navbar-container dark">
			<div className="container items">
				<img src={LogoWhite} alt="" />
				<h2>{props.text}</h2>
				<a href={props.btnUrl}><button className="second-btn">{props.textBtn}</button></a>
			</div>
		</div>
	);
}

export default DarkNavBar;