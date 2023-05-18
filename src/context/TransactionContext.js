import { createContext, useEffect, useState } from "react";
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
  const [currentAccount, setCurrentAccount] = useState("");

  // metamaskウォレットと連携しているのか確認
  const checkMetamaskWolletConnected = async () => {
    if (!ethereum) return alert("メタマスクをインストールしてください");

    // metamaskのアカウントIDを取得
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  };

  // メタマスクウォレットと連携する関数
  const connectWallet = async () => {
    if (!ethereum) return alert("メタマスクをインストールしてください");

    // メタマスクを持っていない場合は接続を開始する
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    console.log(accounts);
    setCurrentAccount(accounts[0]);
  };

  useEffect(() => {
    checkMetamaskWolletConnected();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
