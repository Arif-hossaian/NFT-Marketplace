import React from 'react';
import imgOne from '../assests/img/unsplash_F56Y7dgrAkc.png';
import imgTwo from '../assests/img/unsplash_8uZPynIu-rQ.png';
import Elpse from '../assests/img/rounded-img/Ellipse 95.png';
import imgThree from '../assests/img/rounded-img/unsplash_k0rVudBoB4c.png';
import Etrhereum from '../assests/logo/ethereum 2.png';

const TopCollectionOver = () => {
  return (
    <div className="container">
      <div className="contact-grid-section">
        <div>
          <img src={imgOne} />
          <div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-start items-center space-x-3">
                <img src={Elpse} />
                <div>
                  <h1 className="text-xl font-bold">The Futr Abstr</h1>
                  <p>10 in the stock</p>
                </div>
              </div>
              <div>
                <h1 className="text-xs font-bold">Highest List</h1>
                <div className="flex justify-between items-center space-x-2">
                  <img src={Etrhereum} />
                  <p>0.25 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center space-x-2">
            <img src={imgTwo} />
            <div>
              <h1>The Futr Abstr</h1>
              <div className="flex justify-between items-center space-x-1">
                <img src={Elpse} />
                <div className="border border-green-600 text-green-600 px-2 py-1 rounded-lg">
                  <div className="flex justify-start">
                    <img src={Etrhereum} />
                    <p>0.25 ETH</p>
                  </div>
                </div>
                <div>1 of 8</div>
              </div>
              <button className="border border-gray-900 rounded-2xl mt-5 px-2 py-1">
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2 mt-2">
            <img src={imgTwo} />
            <div>
              <h1>The Futr Abstr</h1>
              <div className="flex justify-between items-center space-x-1">
                <img src={Elpse} />
                <div className="border border-green-600 text-green-600 px-2 py-1 rounded-lg">
                  <div className="flex justify-start">
                    <img src={Etrhereum} />
                    <p>0.25 ETH</p>
                  </div>
                </div>
                <div>1 of 8</div>
              </div>
              <button className="border border-gray-900 rounded-2xl mt-5 px-2 py-1">
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2 mt-2">
            <img src={imgTwo} />
            <div>
              <h1>The Futr Abstr</h1>
              <div className="flex justify-between items-center space-x-1">
                <img src={Elpse} />
                <div className="border border-green-600 text-green-600 px-2 py-1 rounded-lg">
                  <div className="flex justify-start">
                    <img src={Etrhereum} />
                    <p>0.25 ETH</p>
                  </div>
                </div>
                <div>1 of 8</div>
              </div>
              <button className="border border-gray-900 rounded-2xl mt-5 px-2 py-1">
                Place a bid
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">TOP COLLECTION OVER</h1>
          <p className="text-indigo-600">Last 7 days</p>
          <div className="flex justify-start items-center space-x-5">
            <p>1</p>
            <img src={imgThree} />
            <div>
              <p className="text-lg">CryptoFunks</p>
              <div className="flex justify-between items-center space-x-2">
                <img src={Etrhereum} />
                <p>0.25 ETH</p>
              </div>
            </div>
            <p className="text-green-600">+26.52%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionOver;
