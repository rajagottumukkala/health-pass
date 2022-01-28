import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router, HashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import MintNftPage from "./pages/MintNftPage";
import ReadyMintPage from "./pages/ReadyMintPage";
import CollectionPage from "./pages/CollectionPage";



function App() {



  return (
    <>
    <HashRouter>
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
    </HashRouter>
		</>
  
  );
}

export default App;
