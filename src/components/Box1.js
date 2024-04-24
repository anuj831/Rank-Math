// Box1.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import down from './down.png';
import Calendar from './Calendar'; 
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'; 

const Box1 = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Day'); 

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };


  const boxHeight = showAdditionalInfo ? 450 : 300;


  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };


  const renderCryptocurrencyInfo = () => {
    switch (selectedPeriod) {
      case 'Day':
        return (
          <div>
            <p>Cryptocurrency information for Day</p>
      
            {showAdditionalInfo && (
              <div>
                <p>Additional information:</p>
                <ul>
                  <li>Volume: 1200 BTC</li>
                  <li>Market Cap: $100 Billion</li>
                  <li>24h Change: +5%</li>
                </ul>
              </div>
            )}
          </div>
        );
      case 'Week':
        return (
          <div>
            <p>Cryptocurrency information for Week</p>
         
            {showAdditionalInfo && (
              <div>
                <p>Additional information:</p>
                <ul>
                  <li>Volume: 1200 BTC</li>
                  <li>Market Cap: $100 Billion</li>
                  <li>24h Change: +5%</li>
                </ul>
              </div>
            )}
          </div>
        );
      case 'Month':
        return (
          <div>
            <p>Cryptocurrency information for Month</p>
     
            {showAdditionalInfo && (
              <div>
                <p>Additional information:</p>
                <ul>
                  <li>Volume: 1200 BTC</li>
                  <li>Market Cap: $100 Billion</li>
                  <li>24h Change: +5%</li>
                </ul>
              </div>
            )}
          </div>
        );
      case 'Year':
        return (
          <div>
            <p>Cryptocurrency information for Year</p>
         
            {showAdditionalInfo && (
              <div>
                <p>Additional information:</p>
                <ul>
                  <li>Volume: 1200 BTC</li>
                  <li>Market Cap: $100 Billion</li>
                  <li>24h Change: +5%</li>
                </ul>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="Box1" style={{ height: boxHeight }}>
       <div className="bitcoin-info">
       <div className="bitcoin-icon" style={{ fontSize: '55px', marginTop: '6px', transform: 'rotate(-12deg)',color:'orange' }}>
  <FontAwesomeIcon icon={faBitcoin} />
</div>

  <div className="bitcoin-text"> 
    <div className="BTC-text" style={{ fontSize: '32px', marginTop: '22px', marginLeft: '35px' }}>Bitcoin</div>
  </div>
  <div className="BTC-text" style={{ fontSize: '32px', marginTop: '17px' }}>BTC</div>
</div>
        <div className="price-info">
          <h2 className="BTC-text" style={{ fontSize: '48px', marginTop: '10px', marginLeft: '15px' }}>3.529020 BTC</h2>
          <h5 className="BTC-text" style={{ fontSize: '28px', marginTop: '10px', marginLeft:'16px', color:'grey' }}>
            $19.153 USD <span style={{ float: 'right', backgroundColor: 'red', padding: '2px 8px', borderRadius: '20px' }}>-2.3%</span>
          </h5>
          <center>
            <img src={down} alt="Toggle" style={{ height: '15px', marginTop:'20px', cursor: 'pointer' }} onClick={toggleAdditionalInfo} />
          </center>
          {renderCryptocurrencyInfo()} 
        </div>
      </div>
      <Calendar onSelectPeriod={handlePeriodChange} /> 
    </>
  );
};

export default Box1;
