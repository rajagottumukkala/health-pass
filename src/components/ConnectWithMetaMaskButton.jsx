import React from "react";
import Button from '@mui/material/Button';


import { connectWallet } from "../utils/common.js";
import { Avatar } from "@mui/material";

export default function ConnectWithMetaMaskButton({ setCurrentAccount }) {
  return (
    <Button
      variant="contained"
      onClick={() => connectWallet(setCurrentAccount)}
      startIcon={<Avatar src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png'} />}
      >
      Connect with MetaMask
    </Button>
  );

  // return (
  //   <div style={{ maxWidth: "1280px", margin: "auto" }}>
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         margin: "auto",
  //         width: "max-content",
  //         flexDirection: "column",
  //         marginTop: "40px",
  //       }}
  //     >
  //       <button
  //         className=""
  //         onClick={() => connectWallet(setCurrentAccount)}
  //         style={{
  //           background: "black",
  //           color: "white",
  //           padding: "8px 16px",
  //           borderRadius: "4px",
  //         }}
  //       >
  //         <img
  //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
  //           style={{
  //             width: "40px",
  //             display: "inline",
  //             marginRight: "8px",
  //           }}
  //           alt="MetaMask Fox"
  //         />
  //         Connect with MetaMask
  //       </button>
  //     </div>
  //   </div>
  // );
}
