import "./MainSection.scss";
import Vaccination from "../../assets/vaccination.png";

function MainSection() {
	return (
		<div className="overlay ready-overlay">
			<div className="container main-section-container ready-mint">
				<div className="right-section">
					<div>
						<h2>YOUR NFT IS READY</h2>
						<p>
							Your NFT have been successfully minted and it’s now in
							your wallet. Enjoy your HealthPass+ NFT
						</p>
					</div>
					<button className="second-btn">SEE YOUR COLLECTION</button>
				</div>

				<div className="left-section">
					<img className="img-fluid" src={Vaccination} alt="" />
				</div>
			</div>
		</div>
	);
}

export default MainSection;
