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
    banner1: imgOne,
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
          <h1 className="text-3xl font-bold">COLLECTION FEATURED NFTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
            {data.map((i, index) => (
              <div>
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
                >
                  <img src={i.banner1} className="h-full w-92" />
                  <div>
                    <img src={i.subBanner1} />
                    <img src={i.subBanner2} />
                    <img src={i.subBanner3} />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg">{i.title}</h1>
                  <div className="flex justify-between">
                    <div className="flex justify-start items-center">
                      <img src={i.logo} />
                      <p>{i.logoName}</p>
                    </div>
                    <button className="border border-indigo-600 px-2 py-1 rounded-xl">
                      {i.totalCount}
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
