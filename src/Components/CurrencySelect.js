import React, { useState, useEffect, useRef } from 'react';

const CurrenciesSelect = ({ selectedCurrency, onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const dropdownRef = useRef(null); // Ref for dropdown
  const currenciesWithFlags = [
    { code: "AUD", flag: "https://flagcdn.com/au.svg" },  // Australia
    { code: "BGN", flag: "https://flagcdn.com/bg.svg" },  // Bulgaria
    { code: "BRL", flag: "https://flagcdn.com/br.svg" },  // Brazil
    { code: "CAD", flag: "https://flagcdn.com/ca.svg" },  // Canada
    { code: "CHF", flag: "https://flagcdn.com/ch.svg" },  // Switzerland
    { code: "CNY", flag: "https://flagcdn.com/cn.svg" },  // China
    { code: "CZK", flag: "https://flagcdn.com/cz.svg" },  // Czech Republic
    { code: "DKK", flag: "https://flagcdn.com/dk.svg" },  // Denmark
    { code: "EUR", flag: "https://flagcdn.com/eu.svg" },  // Eurozone
    { code: "GBP", flag: "https://flagcdn.com/gb.svg" },  // United Kingdom
    { code: "HKD", flag: "https://flagcdn.com/hk.svg" },  // Hong Kong
    { code: "HRK", flag: "https://flagcdn.com/hr.svg" },  // Croatia
    { code: "HUF", flag: "https://flagcdn.com/hu.svg" },  // Hungary
    { code: "IDR", flag: "https://flagcdn.com/id.svg" },  // Indonesia
    { code: "ILS", flag: "https://flagcdn.com/il.svg" },  // Israel
    { code: "INR", flag: "https://flagcdn.com/in.svg" },  // India
    { code: "ISK", flag: "https://flagcdn.com/is.svg" },  // Iceland
    { code: "JPY", flag: "https://flagcdn.com/jp.svg" },  // Japan
    { code: "KRW", flag: "https://flagcdn.com/kr.svg" },  // South Korea
    { code: "MXN", flag: "https://flagcdn.com/mx.svg" },  // Mexico
    { code: "MYR", flag: "https://flagcdn.com/my.svg" },  // Malaysia
    { code: "NOK", flag: "https://flagcdn.com/no.svg" },  // Norway
    { code: "NZD", flag: "https://flagcdn.com/nz.svg" },  // New Zealand
    { code: "PHP", flag: "https://flagcdn.com/ph.svg" },  // Philippines
    { code: "PLN", flag: "https://flagcdn.com/pl.svg" },  // Poland
    { code: "RON", flag: "https://flagcdn.com/ro.svg" },  // Romania
    { code: "RUB", flag: "https://flagcdn.com/ru.svg" },  // Russia
    { code: "SEK", flag: "https://flagcdn.com/se.svg" },  // Sweden
    { code: "SGD", flag: "https://flagcdn.com/sg.svg" },  // Singapore
    { code: "THB", flag: "https://flagcdn.com/th.svg" },  // Thailand
    { code: "TRY", flag: "https://flagcdn.com/tr.svg" },  // Turkey
    { code: "USD", flag: "https://flagcdn.com/us.svg" },  // United States
    { code: "ZAR", flag: "https://flagcdn.com/za.svg" }   // South Africa
  ];

  // Initialize currency based on prop
  const [fromCurrency, setFromCurrency] = useState(selectedCurrency);

  useEffect(() => {
    setFromCurrency(selectedCurrency);
  }, [selectedCurrency]);

  const handleSelect = (currencyCode) => {
    setFromCurrency(currencyCode);
    onCurrencyChange(currencyCode); // Notify parent of currency change
    setIsOpen(false); // Close the dropdown after selecting
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      {/* Custom dropdown button */}
      <div onClick={() => setIsOpen(!isOpen)} style={styles.selectButton}>
        <img
          src={currenciesWithFlags.find((currency) => currency.code === fromCurrency)?.flag}
          alt={`${fromCurrency} flag`}
          width="24"
          height="16"
          style={{ marginRight: '10px' }}
        />
        {fromCurrency}
      </div>

      {/* Custom dropdown list */}
      {isOpen && (
        <div style={styles.dropdown}>
          {currenciesWithFlags.map((currency, index) => (
            <div
              key={index}
              onClick={() => handleSelect(currency.code)}
              style={styles.option}
            >
              <img
                src={currency.flag}
                alt={`${currency.code} flag`}
                width="24"
                height="16"
                style={{ marginRight: '10px' }}
              />
              {`${currency.code} `}  
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Styles for custom dropdown
const styles = {
  selectButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '80px',
  },
  dropdown: {
    position: 'absolute',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    width: '150px',
    zIndex: 1000,
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #f0f0f0',
  },
};

export default CurrenciesSelect;
