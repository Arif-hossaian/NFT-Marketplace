import React from "react";
import imgOne from "../assests/img/unsplash_F56Y7dgrAkc.png";
import subBanner1OfBn1 from "../assests/img/unsplash_pVoEPpLw818.png";
import subBanner1OfBn2 from "../assests/img/unsplash_LpbyDENbQQg.png";
import subBanner1OfBn3 from "../assests/img/unsplash_9anj7QWy-2g.png";

//
import imgTwo from "../assests/img/unsplash_E8Ufcyxz514.png";
import subBanner2OfBn1 from "../assests/img/unsplash_LpbyDENbQQg.png";
import subBanner2OfBn2 from "../assests/img/unsplash_pVoEPpLw818.png";
import subBanner2OfBn3 from "../assests/img/unsplash_9anj7QWy-2g (1).png";

//
import imgThree from "../assests/img/unsplash_Tyg0rVhOTrE.png";
import subBanner3OfBn1 from "../assests/img/unsplash_pVoEPpLw818 (2).png";
import subBanner3OfBn2 from "../assests/img/unsplash_LpbyDENbQQg (1).png";
import subBanner3OfBn3 from "../assests/img/unsplash_pVoEPpLw818.png";

import Elips from "../assests/img/rounded-img/Ellipse 95.png";

const data = [
  {
    banner1: imgOne,
    subBanner1: subBanner1OfBn1,
    subBanner2: subBanner1OfBn2,
    subBanner3: subBanner1OfBn3,
    title: "Amazing Collection",
    logo: Elips,
    logoName: "by Arkhan",
    totalCount: "Total 54 Items",
  },
  {
    banner1: imgTwo,
    subBanner1: subBanner2OfBn1,
    subBanner2: subBanner2OfBn2,
    subBanner3: subBanner2OfBn3,
    title: "Amazing Collection",
    logo: Elips,
    logoName: "by Arkhan",
    totalCount: "Total 54 Items",
  },
  {
    banner1: imgThree,
    subBanner1: subBanner3OfBn1,
    subBanner2: subBanner3OfBn2,
    subBanner3: subBanner3OfBn3,
    title: "Amazing Collection",
    logo: Elips,
    logoName: "by Arkhan",
    totalCount: "Total 54 Items",
  },
];

const CollectionFrtNft = () => {
  return (
    <div className="bg-[#D9E0EC] py-16">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold mb-6">COLLECTION FEATURED NFTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div key={index}>
                <div className="mb-4">
                  <div className="flex justify-between space-x-2">
                    <img
                      src={item.banner1}
                      className="w-2/3"
                      alt={`Banner ${index}`}
                    />
                    <div className="flex flex-col justify-between w-1/3 space-y-2">
                      <img
                        src={item.subBanner1}
                        className="mb-2"
                        alt={`SubBanner 1 ${index}`}
                      />
                      <img
                        src={item.subBanner2}
                        className="mb-2"
                        alt={`SubBanner 2 ${index}`}
                      />
                      <img src={item.subBanner3} alt={`SubBanner 3 ${index}`} />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg mb-2">{item.title}</h1>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.logo}
                        className="h-6 w-6"
                        alt={`Logo ${index}`}
                      />
                      <p>{item.logoName}</p>
                    </div>
                    <button className="border-2 text-[#2639ED] text-sm border-[#2639ED] px-4 py-1 rounded-full">
                      {item.totalCount}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionFrtNft;
