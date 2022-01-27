// import "./MainSection.scss";
import QuestionMark from "../../assets/QuestionMark.png"

function MainSection() {
	return (
		<div className="overlay">
			<div className="container main-section-container connect-page">
				<div>
					<div className="rule-question">
						<p>02. MINT YOUR HEALTHPASS NFT</p>
						<img src={QuestionMark} alt="" />
					</div>
					<h1>METAMASK</h1>
				</div>
				<button className="main-btn">CONNECT NOW</button>
			</div>
		</div>
	);
}

export default MainSection;
