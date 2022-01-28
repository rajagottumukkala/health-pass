import "./MainSection.scss";
import React, { useEffect, useState } from "react";
import QuestionMark from "../../assets/QuestionMark.png"
import {
	connectWallet,
	checkIfWalletIsConnected,
	getSignedContract,
	updateProviderAndContract,
} from "../../utils/common.js";

import { Button } from "@mui/material";
import abiJson from "../../abis/abi.json";
import addressJson from "../../abis/address.json";
import { MintMainSection as NFTMain } from "../MintPage/MintMainSection"

function MainSection(props) {

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



		<div className="overlay">
			<div className="container main-section-container connect-page">
				{!currentAccount &&
					<>

						<div>
							<div className="rule-question">
								<p>01. CONNECT YOUR WALLET</p>
								<img src={QuestionMark} alt="" />
							</div>
							<h1>METAMASK</h1>
						</div>
						{isMetamaskConnected && <Button variant="outlined" color="warning" onClick={() => setCurrentAccount("")}>Disconnect</Button>}
						{!isMetamaskConnected &&
							<button className="main-btn"
								onClick={() => connectWallet(setCurrentAccount)}
							>CONNECT NOW</button>
						}
					</>
				}

				{currentAccount &&
					<>


						<NFTMain {...{ contractOwner, currentAccount, provider, contract }} />

					</>}

			</div>
		</div>
	);
}

export default MainSection;
