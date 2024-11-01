import React, { useState } from "react";
import CurrenciesSelect from "./CurrencySelect";

const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchange, setExchange] = useState(1);
  const [result, setResult] = useState(null);

  const handleFromCurrencyChange = (newCurrency) => {
    setFromCurrency(newCurrency);
  };

  const handleToCurrencyChange = (newCurrency) => {
    setToCurrency(newCurrency);
  };

  const setAmountFunction = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = async () => {
    const requestData = {
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
    };

    try {
      const response = await fetch("https://keyfx.co.uk/calculator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setResult(data);
      if(data){
        setExchange(data.rates[toCurrency])
      }
      console.log(data);
    } catch (error) {
      console.error("Error converting currency:", error);
    }
  };

  return (
    <div className="mainPage">

      <div className="globe converter-card cvt-shadow grid lg:grid-cols-11 grid-cols-4 gap-3 items-center">
        <div className="flex flex-col col-span-4 ">
          <label className="small">Amount</label>
          <div className="relative">
            <input
              className="w-full input-gray rounded-md shadow-sm"
              type="number"
              step="any"
              value={amount}
              onChange={setAmountFunction}
            />
            <div className="absolute top-3 right-0">
              {/* Pass the fromCurrency and the function to update it */}
              <CurrenciesSelect
                selectedCurrency={fromCurrency}
                onCurrencyChange={handleFromCurrencyChange}
              />
            </div>
          </div>
          <label className="small">This is a hint text to help user.</label>
        </div>

        <div className="lg:col-span-1 col-span-4 justify-center flex w-sm-full">
          <button className="btn-p rounded-md w-sm-full">
            <i className="bi bi-arrow-left-right"></i>
          </button>
        </div>
        <div className="flex flex-col col-span-4">
          <label className="small">Amount</label>
          <div className="relative">
            <input
              className="input-gray rounded-md shadow-sm w-full"
              type="number"
              value={exchange}
              step="any"
            />
            <div className="absolute top-3 right-0">
              {/* For toCurrency selection */}
              <CurrenciesSelect
                selectedCurrency={toCurrency}
                onCurrencyChange={handleToCurrencyChange}
              />
            </div>
          </div>
          <label className="small">This is a hint text to help user.</label>
        </div>

        <div className=" lg:col-span-2 col-span-4 flex justify-center">
          <button className="btn-p rounded-md w-full" onClick={convertCurrency}>
            Continue
          </button>
        </div>

        {/* {result && (
          <div className="col-span-11 mt-4">
            <p>
              {amount} {result.from} = {result.rates[toCurrency]} {toCurrency}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Converter;
