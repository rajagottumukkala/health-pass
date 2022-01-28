import React, { useState, useEffect } from "react";
// import ConnectWithMetaMaskButton from './components/ConnectWithMetaMaskButton';
// import Mint from "./components/Mint";

import abiJson from "./abis/abi.json";
import addressJson from "./abis/address.json";

// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';

// import NavBar from "./components/NavBar";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// import logo from "./images/logo.png";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConnectWalletPage from "./pages/ConnectWalletPage";
import MintNftPage from "./pages/MintNftPage";
import ReadyMintPage from "./pages/ReadyMintPage";
import CollectionPage from "./pages/CollectionPage";

import {
  checkIfWalletIsConnected,
  getSignedContract,
  updateProviderAndContract,
} from "./utils/common.js";


function App() {

  const [contractOwner, setContractOwner] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const address = addressJson.address;
  const contractABI = abiJson.abi;

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount);
    updateProviderAndContract(address, contractABI, setProvider, setContract);
  }, []);

  useEffect(() => {
    getContractOwner(setContractOwner);
  }, [currentAccount]);

  const getContractOwner = async (setContractOwner) => {
    try {
      const contract = getSignedContract(address, contractABI);

      if (!contract) {
        return;
      }

      const owner = await contract.owner();

      setContractOwner(owner.toLowerCase());
    } catch (err) {
      console.log(err);
    }
  };

  const isOwner =
    contractOwner !== "" &&
    contractOwner.toLowerCase() === currentAccount.toLowerCase();

  const isMetamaskConnected = !!currentAccount;


  return (
    <>
    <Router>
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
    </Router>
		</>
    // <React.Fragment>
    //   <CssBaseline />
    //   <Container maxWidth={false} disableGutters>
    //     <AppBar position="static" style={{ background: '#FFFFFF' }}>
    //       <Container maxWidth={false} >
    //         <Toolbar disableGutters>
    //           <Typography
    //             variant="h6"
    //             noWrap
    //             component="div"
    //             flexGrow={1}
    //           //sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    //           >
    //             <img src={logo} />
    //           </Typography>

    //           <ConnectWithMetaMaskButton setCurrentAccount={setCurrentAccount} />

    //         </Toolbar>
    //       </Container>
    //     </AppBar>
    //     {/* <NavBar disableGutters /> */}
    //     {/* <ConnectWithMetaMaskButton setCurrentAccount={setCurrentAccount} /> */}
    //     <Mint {...{ contractOwner, currentAccount, provider, contract }} />
    //   </Container>
    // </React.Fragment>

    // <div className="App">
    //   Ethereum Fullstack Template
    //   <ConnectWithMetaMaskButton  setCurrentAccount={setCurrentAccount}/>
    //   <Mint {...{ contractOwner, currentAccount, provider, contract }} />
    // </div>
  );
}

export default App;
