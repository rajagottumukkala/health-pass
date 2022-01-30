import DarkNavBar from "../components/NavBar/DarkNavBar";
import MainSection from "../components/CollectionPage/MainSection";

function CollectionPage(props) {
	return (
		<>
			{props.currentAccount &&
				<DarkNavBar text={props.currentAccount} textBtn="BACK" btnUrl="/" textBtn2="LOGOUT" btUrl2="/" setCurrentAccount={props.setCurrentAccount} currentAccount={props.currentAccount} />
			}
			{!props.currentAccount &&
				<DarkNavBar text="LOGIN" textBtn="BACK" btnUrl="/" textBtn2="LOGOUT" btUrl2="/" setCurrentAccount={props.setCurrentAccount} currentAccount={props.currentAccount} />
			}
			<MainSection />
		</>
	);
}

export default CollectionPage;
