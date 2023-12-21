import React from "react";
import { Link } from "react-router-dom";
import BannerIMg from "../assests/banner/Slice_1-removebg-preview.png";

const Banner = () => {
  return (
    <div className="">
      <div className="container  md:mt-20 lg:mt-20">
        <section className="grid-section items-center sub-text-layout">
          <div className="mt-10">
            <h1 className="mb-4 text-color">
              <span className="text-5xl font-bold">DISCOVER ANS COLLET</span>
              <p className="mt-3 font-bold text-5xl">DIGITAL ART NFTS</p>
            </h1>

            <p className="text-sm text-gray-500">
              Digtial marketplace for crpto collectiobies and non-fungible
              token, Buy sell and discover exclusive digital asserts
            </p>
            <Link to="/">
              <button type="button" className="banner-button mt-8">
                Explore Now
              </button>
            </Link>
            <div>
              <div className="flex justify-start item-center space-x-10 mt-5">
                <div>
                  <h1 className="font-bold text-4xl">98K+</h1>
                  <p>Artwork</p>
                </div>
                <div>
                  <h1 className="font-bold text-4xl">12K+</h1>
                  <p>Artwork</p>
                </div>
                <div>
                  <h1 className="font-bold text-4xl">15K+</h1>
                  <p>Artwork</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <img src={BannerIMg} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
