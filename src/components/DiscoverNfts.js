import React from "react";
import NftFilter from "./NftFilter";
import ImgOne from "../assests/img/image 1 (2).png";
import Elipse from "../assests/img/rounded-img/Ellipse 95 (1).png";
import Elipse2 from "../assests/img/rounded-img/Ellipse 95 (2).png";
import Elipse3 from "../assests/img/rounded-img/Ellipse 95 (3).png";
import Elipse4 from "../assests/img/rounded-img/Ellipse 95 (4).png";
import Etherium from "../assests/logo/ethereum 2 (1).png";

//
import ImgTwo from "../assests/img/image 1 (1).png";
import ImgThree from "../assests/img/image 1 (3).png";
import ImgFour from "../assests/img/image 1 (4).png";

const data = [
  {
    mainBanner: ImgOne,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "ArtCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgTwo,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "This NFT",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgThree,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "NameCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgFour,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "KingCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgFour,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "ArtCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgThree,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "This NFT",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgOne,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "NameCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgTwo,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "KingCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgOne,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "ArtCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgFour,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "This NFT",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgTwo,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "NameCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgThree,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "KingCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgThree,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "ArtCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgTwo,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "This NFT",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgOne,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "NameCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
  {
    mainBanner: ImgFour,
    subImg1: Elipse,
    subImg2: Elipse2,
    subImg3: Elipse3,
    subImg4: Elipse4,
    title: "KingCrypto",
    eCount: "0.25 ETH",
    ethLogo: Etherium,
    qty: "1 of 321",
    time: "3h 50m 2s left",
    navigateBtn: "Place a bid",
  },
];

const DiscoverNfts = () => {
  return (
    <section className="container mt-28">
      <NftFilter />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-16 mt-10">
        {data.map((i, index) => (
          <div>
            <div className="relative">
              <img src={i.mainBanner} className="w-full h-full" alt="Image 1" />
              <div className="absolute bottom-0 left-0 h-5 w-16">
                <div className="flex justify-start items-center">
                  <img src={i.subImg1} className="-mr-3" />
                  <img src={i.subImg2} className="-mr-3" />
                  <img src={i.subImg3} className="-mr-3" />
                  <img src={i.subImg4} />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1>{i.title}</h1>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center space-x-3">
                  <img src={i.ethLogo} />
                  <p className="text-xs text-green-600">{i.eCount}</p>
                </div>
                <div className="text-sm text-[#838383]">{i.qty}</div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="rounded-full py-2 px-5 text-[#5539A8] bg-[#F5F5F5]">
                  {i.time}
                </div>
                <div className="text-[#5539A8] text-lg">{i.navigateBtn}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverNfts;
