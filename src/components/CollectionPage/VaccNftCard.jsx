import { padding } from "@mui/system";
import Vaccination from "../../assets/vaccination.png";

function VaccNftCard(props) {
	return (
		<div className="nft-card" style={{
			// backgroundImage: `url(${props.bg})`,
			color: "red",
		}}>
			<img className="img-fluid"
				style={{ paddingLeft: "40px" }} src={props.img} alt="" height="90%" width="90%" />
		</div >
	);
}

export default VaccNftCard;
