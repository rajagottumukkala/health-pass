import "./MainSection.scss";
import VaccNftCard from "./VaccNftCard";
import recovered from "../../assets/recovered.png"
import tested from "../../assets/tested.png"
import vaccinated from "../../assets/vaccinated.png"
import NftBg1 from "../../assets/NftBg1.png";
import NftBg2 from "../../assets/NftBg2.png";
import NftBg3 from "../../assets/NftBg3.png";
import React, { useState, useEffect } from "react";
import { createClient } from 'urql';

function MainSection(props) {

	const [response, setResponse] = useState([])

	const graphURL = "https://api.studio.thegraph.com/query/960/healthpasstest/0.3.0";
	let query = `
    query {
     certificates(where: {address: "${props.currentAccount}"}) {
       id
       certficateType
       name
       expiration
     }
   }    
`;
	const client = createClient({
		url: graphURL
	});

	useEffect(() => { fetchData() }, []);

	async function fetchData() {
		const response = client.query(query).toPromise().then((data) => {
			setResponse(data.data['certificates']);
		})

	}

	return (
		<div className="overlay ready-overlay">
			<div className="container main-section-container collection">
				<h2>YOUR NFT COLLECTION</h2>
				<div className="vacc-nft-cards" >
					{response.map((res) => {
						if (res.certficateType === 'vaccinated') {
							return (
								<VaccNftCard img={vaccinated} key={res.id} />
							)
						}
						if (res.certficateType === 'tested') {
							return (
								<VaccNftCard img={tested} key={res.id} />
							)
						}
						if (res.certficateType === 'recovered') {
							return (
								<VaccNftCard img={recovered} key={res.id} />
							)
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default MainSection;
