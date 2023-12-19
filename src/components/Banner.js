import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="bg-banner">
    <div className="container  md:mt-20 lg:mt-20">
      <section className="grid-section items-center sub-text-layout">
        <div className="mt-10">
          <h1 className="mb-4 text-color">
            <span className='text-5xl font-bold'>DISCOVER ANS COLLET</span>
            <p className="mt-3 font-bold text-5xl">
              DIGITAL ART NFTS
            </p>
          </h1>

          <p className="section-subHeader">
            Digtial marketplace for crpto collectiobies and non-fungible token, Buy sell and discover exclusive digital asserts
          </p>
          <Link to="/get-in-touch">
            <button type="button" className="banner-button mt-4">
              Explore Now
            </button>
          </Link>
          <div>
            <div className='flex justify-start item-center space-x-3 mt-5'>
                <div>
                    <h1 className='font-bold text-4xl'>98K+</h1>
                    <p>Artwork</p>
                </div>
                <div>
                    <h1 className='font-bold text-4xl'>98K+</h1>
                    <p>Artwork</p>
                </div>
                <div>
                    <h1 className='font-bold text-4xl'>98K+</h1>
                    <p>Artwork</p>
                </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          img
        </div>
      </section>
    </div>
  </div>
  )
}

export default Banner