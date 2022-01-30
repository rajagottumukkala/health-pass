import "./NavBar.scss";
import "./DarkNavBar.scss";
import LogoWhite from "../../assets/logoWhite.png";

function DarkNavBar(props) {
	function logout() {
		props.setCurrentAccount("");
		localStorage.removeItem("currentAccount")
	}
	return (
		<div className="navbar-container dark">
			<div className="container items">
				<img src={LogoWhite} alt="" />
				<h2>{props.text}</h2>
				<div>
					<a href={props.btnUrl}><button className="second-btn">{props.textBtn}</button></a>
					{props.textBtn2 && props.currentAccount &&
						<a href={props.btnUrl2}><button onClick={() => logout()} className="second-btn">{props.textBtn2}</button></a>
					}
				</div>

			</div>
		</div>
	);
}

export default DarkNavBar;