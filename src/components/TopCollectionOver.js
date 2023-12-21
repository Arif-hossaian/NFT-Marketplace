import React from "react";
import imgOne from "../assests/img/unsplash_F56Y7dgrAkc.png";
import imgTwo from "../assests/img/unsplash_8uZPynIu-rQ.png";
import imgFour from "../assests/img/unsplash_Tyg0rVhOTrE.png";
import imgFive from "../assests/img/unsplash_wHJ5L9KGTl4.png";
import Elpse from "../assests/img/rounded-img/Ellipse 95.png";
import imgThree from "../assests/img/rounded-img/unsplash_k0rVudBoB4c.png";
import Etrhereum from "../assests/logo/ethereum 2 (1).png";
import EtrhereumBlk from "../assests/logo/ethereum 2.png";
import VerifyImg from "../assests/logo/verify 1.png";
import imgSix from "../assests/img/rounded-img/unsplash_fT49QnFucQ8.png";
import imgSeven from "../assests/img/rounded-img/unsplash_5MTf9XyVVgM.png";
import imgEight from "../assests/img/rounded-img/unsplash_zkNT5mikUuo.png";
import imgNine from "../assests/img/rounded-img/unsplash_WjIB-6UxA5Q.png";

const data = [
  {
    title: "The Futr Abstr",
    banner: imgTwo,
    logo: Elpse,
    ethLogo: Etrhereum,
    eth: "0.25 ETH",
    count: "1 of 8",
    bidBtn: "Place a bid",
  },
  {
    title: "The Futr Abstr",
    banner: imgFour,
    logo: Elpse,
    ethLogo: Etrhereum,
    eth: "0.25 ETH",
    count: "1 of 8",
    bidBtn: "Place a bid",
  },
  {
    title: "The Futr Abstr",
    banner: imgFive,
    logo: Elpse,
    ethLogo: Etrhereum,
    eth: "0.25 ETH",
    count: "1 of 8",
    bidBtn: "Place a bid",
  },
];

const topCollectionData = [
  {
    numberCount: 1,
    logo: imgThree,
    title: "CryptoFunks",
    isVerify: true,
    verifyLogo: VerifyImg,
    ethLogo: EtrhereumBlk,
    ethCount: "19,769.39",
    percentage: "+26.52%",
    isPercentageUp: true,
  },
  {
    numberCount: 2,
    logo: imgSix,
    title: "Cryptix",
    isVerify: false,
    verifyLogo: "",
    ethLogo: EtrhereumBlk,
    ethCount: "2,769.39",
    percentage: "+10.52%",
    isPercentageUp: false,
  },
  {
    numberCount: 3,
    logo: imgSeven,
    title: "Frensware",
    isVerify: false,
    verifyLogo: "",
    ethLogo: EtrhereumBlk,
    ethCount: "9,232.39",
    percentage: "+2.52%",
    isPercentageUp: true,
  },
  {
    numberCount: 4,
    logo: imgEight,
    title: "PunkArt",
    isVerify: true,
    verifyLogo: VerifyImg,
    ethLogo: EtrhereumBlk,
    ethCount: "3,769.39",
    percentage: "+1.52%",
    isPercentageUp: true,
  },
  {
    numberCount: 5,
    logo: imgNine,
    title: "Art Crypto",
    isVerify: false,
    verifyLogo: "",
    ethLogo: EtrhereumBlk,
    ethCount: "10,769.39",
    percentage: "+2.52%",
    isPercentageUp: false,
  },
];

const TopCollectionOver = () => {
  return (
    <div className="container mt-24 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-16">
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
                <h1 className="text-xs">Highest Bid</h1>
                <div className="flex justify-between items-center space-x-2">
                  <img src={Etrhereum} />
                  <p>0.25 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {data.map((i, index) => (
            <div key={index} className="flex items-center space-x-4 mb-8">
              <img src={i.banner} />
              <div>
                <h1>{i.title}</h1>
                <div className="flex items-center space-x-2">
                  <img src={i.logo} className="h-6 w-6" />
                  <div className="border border-green-600 text-green-600 px-2 py-1 rounded-lg">
                    <div className="flex jsutify-between items-center space-x-1">
                      <img src={i.ethLogo} />
                      <p className="text-xs">{i.eth}</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">{i.count}</div>
                </div>
                <button className="border-2 border-[#220970] hover:bg-[#3D00B7] hover:text-white text-[#220970] rounded-full mt-5 px-5 py-1">
                  {i.bidBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-bold text-2xl">TOP COLLECTION OVER</h1>
          <p className="text-indigo-600 mt-2 mb-3">Last 7 days</p>
          {topCollectionData.map((i, index) => (
            <div className="flex justify-start items-center space-x-5 space-y-6">
              <p className="text-2xl font-bold">{i.numberCount}</p>
              <div className="relative">
                <img src={i.logo} />
                {i.isVerify ? (
                  <div className="absolute top-0 right-0">
                    <img src={VerifyImg} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <p className="text-lg">{i.title}</p>
                <div className="flex justify-start items-center space-x-2">
                  <img src={i.ethLogo} />
                  <p>{i.ethCount}</p>
                </div>
              </div>
              {i.isPercentageUp ? (
                <p className="text-green-600">{i.percentage}</p>
              ) : (
                <p className="text-red-600">{i.percentage}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollectionOver;
