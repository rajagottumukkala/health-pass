import DarkNavBar from "../components/NavBar/DarkNavBar";
import MintMainSection from "../components/MintPage/MintMainSection";

function MintNftPage() {
	return (
		<>
			<DarkNavBar text="0x4dec...f642" textBtn="BACK" btnUrl="/" textBtn2="LOGOUT" btnUrl2="" />
			<MintMainSection />
		</>
	);
}

export default MintNftPage;
