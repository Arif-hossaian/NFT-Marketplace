import React from 'react';
import imgOne from '../assests/img/unsplash_F56Y7dgrAkc.png';
import imgTwo from '../assests/img/unsplash_pVoEPpLw818.png';
import Elips from '../assests/img/rounded-img/Ellipse 95.png';

const CollectionFrtNft = () => {
  return (
    <div className="container">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <img src={imgOne} className="h-72" />
            <div>
              <img src={imgTwo} />
              <img src={imgTwo} />
              <img src={imgTwo} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg">Amazing Collection</h1>
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              <img src={Elips} />
              <p>by Arkhan</p>
            </div>
            <button className="border border-indigo-600 px-2 py-1 rounded-xl">
              Total 54 Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionFrtNft;
