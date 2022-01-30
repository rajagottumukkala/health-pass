import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import MintNftPage from "./pages/MintNftPage";
import ReadyMintPage from "./pages/ReadyMintPage";
import CollectionPage from "./pages/CollectionPage";



function App() {
  const [currentAccount, setCurrentAccount] = useState(localStorage.getItem("currentAccount"));



  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/connect">
            <ConnectWalletPage currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
          </Route>
          <Route exact path="/mint">
            <ConnectWalletPage currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
          </Route>
          <Route exact path="/ready-mint">
            <ReadyMintPage />
          </Route>
          <Route exact path="/collection">
            <CollectionPage currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
