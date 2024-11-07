import React, { useEffect, useState } from "react";
import CurrenciesSelect from "./CurrencySelect";

const Converter = () => {
  const [loading, setLoading] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchange, setExchange] = useState(null); // Adjusted for calculation
  const [rates, setRates] = useState({}); // Store rates here
  const [isMobile, setIsMobile] = useState(false);

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
    setLoading(true);

    try {
      const response = await fetch("https://keyfx.co.uk/calculator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      setRates(data.rates); // Store rates for conversion calculations
      setLoading(false);
      calculateConversion(data.rates);
    } catch (error) {
      console.error("Error converting currency:", error);
      setLoading(false);
    }
  };

  const calculateConversion = (rates) => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      // Calculate the conversion rate
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      const convertedAmount = amount * conversionRate;
      setExchange(convertedAmount.toFixed(2)); // Set converted amount
    } else {
      console.error("Invalid currency rates.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);









  return (
    <div className="mainPage">
      <div className="globe converter-card cvt-shadow grid lg:grid-cols-11 grid-cols-4  items-center">
        <div className="flex flex-col col-span-4 ">
          <label className="small pb-2">Amount</label>
          <div className="relative">
            <input
              className="w-full input-gray rounded-md shadow-sm py-3"
              type="number"
              step="any"
              value={amount}
              onChange={setAmountFunction}
            />
            <div className="absolute top-4 right-0">
              <CurrenciesSelect
                selectedCurrency={fromCurrency}
                onCurrencyChange={handleFromCurrencyChange}
              />
            </div>
          </div>
          <label className={`small   ${isMobile ? "mb-3" : "pt-0"} `}>This is a hint text to help user.</label>
        </div>

        <div className="lg:col-span-1 col-span-4 justify-center flex ">
          <button
            className={`btn-p rounded-md ${isMobile ? 'w-full p-3' : 'converterBtn p-2'}`}
          >
            <i className="bi bi-arrow-left-right"></i>
          </button>
        </div>

        <div className="flex flex-col col-span-4">
          <label className="small pb-2">Converted to</label>
          <div className="relative">
            <input
              className="input-gray rounded-md shadow-sm w-full py-3"
              type="number"
              value={exchange || ""}
              step="any"
              readOnly
            />
            <div className="absolute top-4 right-0">
              <CurrenciesSelect
                selectedCurrency={toCurrency}
                onCurrencyChange={handleToCurrencyChange}
              />
            </div>
          </div>
          <label className={`small   ${isMobile ? "mb-3" : "pt-0"} `}>This is a hint text to help user.</label>
        </div>

        <div className={isMobile ? "lg:col-span-2 col-span-4 flex justify-center px-0" : "lg:col-span-2 col-span-4 flex justify-center ps-8"}>
          <button className="btn-p rounded-md w-full py-3" onClick={convertCurrency}>
            {loading ? 'Converting' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Converter;
