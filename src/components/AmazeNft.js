import React from 'react';
import cartTick from '../assests/logo/card-tick-1 1.png';
import chartSq from '../assests/logo/chart-square 2.png';

const AmazeNft = () => {
  return (
    <div className="bg-[#f7f9fb] py-16">
      <div className="container">
        <div className="contact-grid-section">
          <div>
            <p className="text-3xl font-bold">THE AMAZING NFT ART</p>
            <p className="text-3xl font-bold">OF THE WORLD HERE</p>
          </div>
          <div>
            <div className="flex justify-start  gap-x-3">
              <img src={cartTick} className="w-6 h-6" />
             <div>
             <p className="text-lg font-bold">Fast Transaction</p>
             <p className="text-sm text-gray-500">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
             </div>
            
            </div>
          </div>
          <div>
            <div className="flex justify-start gap-x-3">
              <img src={chartSq} className="w-6 h-6" />
              <div>
                <p className="text-lg font-bold">Groth Transaction</p>
                <p className="text-sm text-gray-500">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazeNft;
