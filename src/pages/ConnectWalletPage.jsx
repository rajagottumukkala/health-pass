import DarkNavBar from "../components/NavBar/DarkNavBar";
import MainSection from "../components/ConnectPage/MainSection";

function ConnectWalletPage(props) {
	return (
		<>
			<DarkNavBar text="LOGIN" textBtn="BACK" btnUrl="/" textBtn2="LOGOUT" btUrl2="/" setCurrentAccount={props.setCurrentAccount} />
			<MainSection currentAccount={props.currentAccount} setCurrentAccount={props.setCurrentAccount} />
		</>
	);
}

export default ConnectWalletPage;
