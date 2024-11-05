import React, { useEffect, useState } from "react";
import CurrenciesSelect from "./CurrencySelect";

const Converter = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
        setExchange(data.rates[toCurrency]);
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      console.error("Error converting currency:", error);
      setLoading(false);
    }
  };






  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 640);
      };

      // Set initial value based on screen width
      handleResize();

      // Listen for resize events
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []);










  return (
    <div className="mainPage">

      <div className="globe converter-card cvt-shadow grid lg:grid-cols-11 grid-cols-4 gap-3 items-center">
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
              {/* Pass the fromCurrency and the function to update it */}
              <CurrenciesSelect
                selectedCurrency={fromCurrency}
                onCurrencyChange={handleFromCurrencyChange}
              />
            </div>
          </div>
          <label className="small pt-2">This is a hint text to help user.</label>
        </div>

        <div className="lg:col-span-1 col-span-4 justify-center flex ">
        <button className={`btn-p rounded-md  ${isMobile ? 'w-full p-3' : 'converterBtn p-2'}`}>
        <i className="bi bi-arrow-left-right"></i>
          </button>
        </div>


        <div className="flex flex-col col-span-4">
          <label className="small pb-2">Amount</label>
          <div className="relative">
            <input
              className="input-gray rounded-md shadow-sm w-full py-3"
              type="number"
              value={exchange}
              step="any"
            />
            <div className="absolute top-4 right-0">
              {/* For toCurrency selection */}
              <CurrenciesSelect
                selectedCurrency={toCurrency}
                onCurrencyChange={handleToCurrencyChange}
              />
            </div>
          </div>
          <label className="small pt-2">This is a hint text to help user.</label>
        </div>

        <div className={isMobile ? "lg:col-span-2 col-span-4 flex justify-center px-0" :  "lg:col-span-2 col-span-4 flex justify-center px-4"}>
          <button className="btn-p rounded-md w-full py-3" onClick={convertCurrency}>
             { loading ? 'Converting' : 'Continue'}
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
