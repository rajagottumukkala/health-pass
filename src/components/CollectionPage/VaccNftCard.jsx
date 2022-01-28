import Vaccination from "../../assets/vaccination.png";

function VaccNftCard(props) {
	return (
		<div className="nft-card" style={{
			backgroundImage: `url(${props.bg})`,
			color: "red"
		}}>
			<img className="img-fluid" src={Vaccination} alt="" />
		</div>
	);
}

export default VaccNftCard;
