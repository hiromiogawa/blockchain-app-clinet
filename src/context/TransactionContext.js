import { createContext, useEffect } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/connect";

export const TransactionContext = createContext();

const { ethereum } = window;

// スマートコントラクトを取得
const getSmartContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
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
  // metamaskウォレットと連携しているのか確認
  const checkMetamaskWolletConnected = async () => {
    if (!ethereum) return alert("メタマスクをインストールしてください");

    // metamaskのアカウントIDを取得
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  };

  useEffect(() => {
    checkMetamaskWolletConnected();
  }, []);
  return (
    <TransactionContext.Provider value={{ name: "shincode" }}>
      {children}
    </TransactionContext.Provider>
  );
};
