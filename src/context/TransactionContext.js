import { createContext } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/connect";

export const TransactionContext = createContext();

// スマートコントラクトを取得
const getSmartContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  console.log(provider, signer, transactionContract);

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ name: "shincode" }}>
      {children}
    </TransactionContext.Provider>
  );
};
