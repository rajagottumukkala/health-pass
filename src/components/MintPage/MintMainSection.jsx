import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { mintNft } from "../../utils/common";
import "react-toastify/dist/ReactToastify.css";
import base45 from "base45";
import pako from "pako";
import { Cborwebtoken } from "@netnexus/node-cborwebtoken";
import cbor from "cbor";
import QuestionMark from "../../assets/QuestionMark.png"
import QRScanner from "../QRScanner/QRScanner"
import proof_valid_eu_green_certificate from '../../zokrates_green_certificate';

export function MintMainSection({ provider, contract, contractOwner, currentAccount }) {
	const [qrModal, setQrModal] = useState(false);

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

	function onScan(content) {
		if (content.substring(0, 4) !== "HC1:") {
			console.log("Not a vaccine passport: " + content)
			return
		}

		const decoded_data = base45.decode(content.substring(4));
		const compressed_bytes = new Uint8Array(decoded_data);

		// returns Uint8Array by default
		const raw_cbor = pako.inflate(compressed_bytes)
		//const raw_cbor = pako.inflate(compressed_bytes, {to: "string"})

		console.log({ raw_cbor })

		const token = cbor.decode(raw_cbor);

		// See https://github.com/netnexus/node-cborwebtoken/blob/efa5790a639f34d41c3210c578325a43a2761aba/src/index.ts#L42
		const cwt = new Cborwebtoken()
		cwt.claims["hcert"] = -260
		const newPayload = cbor.decode(token.value[2]);
		var payload;
		if (!(newPayload instanceof Map)) {
			payload = newPayload;
		} else {
			payload = cwt.revertClaims(newPayload);
		}
		console.log(JSON.stringify(payload))
		console.log({ payload, token })

		proof_valid_eu_green_certificate(payload)
			.then((proof) => {
				console.log("proof", proof)
				mintNft(contract, contractOwner, payload["hcert"].get(1), payload["exp"].toString())
			}).catch((err) => {
				console.log("err:", err)
			})

	}

	return (
		<>
			<div className="overlay">

				<div className="container main-section-container connect-page">
					{!qrModal &&
						<>
							<div>
								<div className="rule-question">
									<p>02. MINT YOUR HEALTHPASS NFT</p>
									<img src={QuestionMark} alt="" />
								</div>
								<h1>METAMASK</h1>
							</div>

							<button className="main-btn"
								onClick={() => setQrModal(true)}
							>MINT NOW</button>
						</>
					}
					{qrModal &&
						<>
							<div>
								<div className="rule-question">
									<p>03. Present your Vaccination Certificate</p>
								</div>
								<h1>Scan the QR Code!</h1>
							</div>
							<QRScanner onScan={(c) => onScan(c)} />
						</>
					}
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
		</>
	);
}

export default MintMainSection;
