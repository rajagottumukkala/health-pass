import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import MintNftPage from "./pages/MintNftPage";
import ReadyMintPage from "./pages/ReadyMintPage";
import CollectionPage from "./pages/CollectionPage";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/connect">
					<ConnectWalletPage />
				</Route>
				<Route exact path="/mint">
					<MintNftPage />
				</Route>
				<Route exact path="/ready-mint">
					<ReadyMintPage />
				</Route>
				<Route exact path="/collection">
					<CollectionPage />
				</Route>
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	);
}

export default App;
