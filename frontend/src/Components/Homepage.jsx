import React, { useContext } from "react";
import {AuthContext} from "./../Context/AuthContext";

const Homepage = () => {
  const { state } = useContext(AuthContext);
  console.log(state, " state here in home");
  return (
    <div className="text-center">
      <div>
        <h1 className="text-9xl text-orange-600 mt-5">Blur {state.user && <h3 className="text-3xl">You are logged - {state.user.email} </h3>}</h1>
        <p className="ml-5 mr-5 mt-3">
          The stock market allows buyers and sellers of securities to meet,
          interact, and transact. The markets allow for price discovery for
          shares of corporations and serve as a barometer for the overall
          economy. Buyers and sellers are assured of a fair price, high degree
          of liquidity, and transparency as market participants compete in the
          open market. The first stock market was the London Stock Exchange
          which began in a coffeehouse, where traders met to exchange shares, in
          1773. 3 The first stock exchange in the United States began in
          Philadelphia in 1790. 4 The Buttonwood Agreement, so named because it
          was signed under a buttonwood tree, marked the beginning of New York’s
          Wall Street in 1792. The agreement was signed by 24 traders and was
          the first American organization of its kind to trade in securities.
          The traders renamed their venture the New York Stock and Exchange
          Board in 1817. 5 A stock market is a regulated and controlled
          environment. In the United States, the main regulators include the
          Securities and Exchange Commission (SEC) and the Financial Industry
          Regulatory Authority (FINRA). 2 1 The earliest stock markets issued
          and dealt in paper-based physical share certificates. Today, stock
          markets operate electronically. Though it is called a stock market,
          other securities, such as exchange-traded funds (ETFs) are also traded
          in the stock market. Practice trading with virtual money
        </p>
      </div>
    </div>
  );
};

export default Homepage;
