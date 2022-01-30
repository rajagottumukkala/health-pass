import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import MintNftPage from "./pages/MintNftPage";
import ReadyMintPage from "./pages/ReadyMintPage";
import CollectionPage from "./pages/CollectionPage";
import { createClient } from 'urql';



const graphURL="https://api.studio.thegraph.com/query/960/healthpasstest/0.1.2";
let query= `
    query {
     certificates(first: 5) {
       id
       region
       category
       country
     }
   }    
`;
const client = createClient({
 url: graphURL
});


function App() {
  const [currentAccount, setCurrentAccount] = useState(localStorage.getItem("currentAccount"));

  useEffect(()=> { fetchData()},[]);

 async function fetchData() {
   const response = client.query(query).toPromise();
   console.log('response: ',response); 
 }

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
