import "./MainSection.scss";
import VaccNftCard from "./VaccNftCard";
import recovered from "../../assets/recovered.png"
import tested from "../../assets/tested.png"
import vaccinated from "../../assets/vaccinated.png"
import NftBg1 from "../../assets/NftBg1.png";
import NftBg2 from "../../assets/NftBg2.png";
import NftBg3 from "../../assets/NftBg3.png";

function MainSection() {
	return (
		<div className="overlay ready-overlay">
			<div className="container main-section-container collection">
				<h2>YOUR NFT COLLECTION</h2>
				<div className="vacc-nft-cards" >
					<VaccNftCard img={tested} />
					<VaccNftCard img={vaccinated} />
					<VaccNftCard img={recovered} />
				</div>
			</div>
		</div>
	);
}

export default MainSection;
