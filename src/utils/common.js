import { ethers } from 'ethers';

export const getSignedContract = (address, contractABI) => {
    const { ethereum } = window;

    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(address, contractABI, signer);
    }

    return null
}

export const updateProviderAndContract = (address, contractABI, setProvider, setContract) => {
    const { ethereum } = window;

    if (!ethereum) return

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, contractABI, signer);

    setProvider(provider);
    setContract(contract);
}

export const checkIfWalletIsConnected = async (setCurrentAccount) => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
            const account = accounts[0];
            setCurrentAccount(account.toLowerCase())
            localStorage.setItem("currentAccount", accounts[0].toLowerCase());
        }
    } catch (error) {
        console.log(error);
    }
}

export const connectWallet = async (setCurrentAccount) => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        setCurrentAccount(accounts[0].toLowerCase());
        localStorage.setItem("currentAccount", accounts[0].toLowerCase());

    } catch (error) {
        console.log(error)
    }
}

export const getTokenCount = async (contract) => {
    try {
        if (!contract) {
            return;
        }

        const result = await contract._tokenIds();
        return result
    } catch (error) {
        console.log(error);
    }
};

export const mintNft = async (contract, currentAccount, hcert_data, exp_timestamp) => {
    // console.log("contractOwner", contractOwner)
    // console.log("currentAccount", currentAccount)
    var cert_type;
    let keys = Object.keys(hcert_data);
    if (keys.indexOf("v") !== -1) {
        cert_type = "vaccinated";
    } else if (keys.indexOf("t") !== -1) {
        cert_type = "tested";
    } else if (keys.indexOf("r") !== -1) {
        cert_type = "recovered";
    } else {
        cert_type = "unknown";
    }

    var certData = {
        name: hcert_data['nam']["gn"] + " " + hcert_data['nam']["fn"],
        expiration: exp_timestamp,
        certficateType: cert_type,
        certificateDate: ""
    };

    try {
        if (!contract) {
            return;
        }

        const txn = await contract.awardCertificate(currentAccount, certData);
        await txn.wait();

        // Navigate to NFT collection
		window.location.href = "/collection"
    } catch (error) {
        console.log(error);
    }
};

export const buyNft = async (contract, tokenId, price) => {
    try {
        if (!contract) {
            return;
        }

        const txn = await contract.buyNft(tokenId, {
            value: ethers.utils.parseEther(price.toString()),
        });
        await txn.wait();
    } catch (error) {
        console.log(error);
    }
};