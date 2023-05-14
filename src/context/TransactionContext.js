import { ethers } from "ethers";
import { contractABI, contractAddrress } from "../utils/connect";

// スマートコントラクトを取得
const getSmartContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(
    contractAddrress,
    contractABI,
    signer
  );

  console.log(provider, signer, transactionContract);

  return transactionContract;
};
