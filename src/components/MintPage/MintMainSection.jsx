import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { mintNft } from "../../utils/common";
import "react-toastify/dist/ReactToastify.css";
import QuestionMark from "../../assets/QuestionMark.png"

export function MintMainSection({ provider, contract, contractOwner }) {
	useEffect(() => {
		if (!contract) {
			return;
		}
		provider.once("block", () => {
			contract.on("Transfer", onMintCompletion);
		});
	}, [contract]);

	const onMintCompletion = (fromAddress, toAddress, tokenId) => {
		toast.success(
			`🦄 NFT with tokenId ${tokenId} was successfully minted by $${toAddress}!`,
			{
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			}
		);
	};

	return (
		<div className="overlay">
			<div className="container main-section-container connect-page">
				<div>
					<div className="rule-question">
						<p>02. MINT YOUR HEALTHPASS NFT</p>
						<img src={QuestionMark} alt="" />
					</div>
					<h1>METAMASK</h1>
				</div>
				<button className="main-btn"
					onClick={() => mintNft(contract, contractOwner)}
				>MINT NOW</button>
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default MintMainSection;
