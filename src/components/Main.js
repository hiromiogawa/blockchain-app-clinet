import React from "react";

const Main = () => {
  return (
    <div className="mainContainer">
      {/* 左側 */}
      <div className="cryptContainer">
        <h1 className="title">Crypt Card</h1>
        <button type="button">
          <p className="buttonText">ウォレット連携</p>
        </button>
      </div>
      {/* 右側 */}
      <div className="inputContainer">
        <input type="text" placeholder="アドレス" name="addressTo" />
        <input
          type="number"
          step="0.0001"
          placeholder="通貨(ETH)"
          name="amount"
        />
        <button type="button">送信</button>
      </div>
    </div>
  );
};

export default Main;
