const { expect } = require("chai");
const { ethers } = require("hardhat");

const address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
            
describe("Health Pass", () => {
    let healthPass, HealthPass;
    const baseURL="https://gateway.pinata.cloud/ipfs/QmWb5F3tUsAYSVL2W8hAGefij56jarExUdRwweMaLBGQjg/";

    beforeEach(async () => {
        HealthPass = await ethers.getContractFactory("HealthPass721");
        console.log("deploying certificate");
        healthPass = await HealthPass.deploy(baseURL);
        console.log("deployed");
    });

    it("mint a certificate", async () => {

     var certData={   name: "user1",
        expiration: "02/01/2030",
        certficateType: "vaccine",
        certificateDate: "02/01/2022"
    };


        var currentCount = parseInt(await healthPass.balanceOf(address));
        await expect(healthPass.awardCertificate(address,certData))
                        .to.emit(healthPass,"CertificateIssued")
                        .withArgs("1","0x70997970C51812dc3A010C7d01b50e0d17dc79C8",["user1","02/01/2030","vaccine","02/01/2022"]) ;
        var newCount = parseInt(await healthPass.balanceOf(address));
        var tokenId=1;
        var tokenUri = await healthPass.tokenURI(tokenId);
        var expected= baseURL+tokenId
        expect(expected).to.equal(tokenUri); 
        expect(newCount).to.equal(currentCount + 1);

    });

});