import DarkNavBar from "../components/NavBar/DarkNavBar";
import MainSection from "../components/ReadyMintPage/MainSection";

function ReadyMintPage() {
	return (
		<>
			<DarkNavBar text="0x4dec...f642" textBtn="LOGOUT" btnUrl="/" />
			<MainSection />
		</>
	);
}

export default ReadyMintPage;
