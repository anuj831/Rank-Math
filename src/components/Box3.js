import React from 'react';
import '../App.css';

const Box3 = () => {
  return (
    <div className="main-box" style={{ margin: '0 auto' }}>
      <div className="box-container">
        <div className="box">
          <div className="circle blue">
            $
          </div>
          <div className="text-box blue-bg">
            <div className="text">
              Buy BTC
            </div>
          </div>
        </div>
        <div className="box">
          <div className="circle red">
            $
          </div>
          <div className="text-box red-bg">
            <div className="text">
              Sell BTC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box3;
