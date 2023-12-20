import React from 'react'
import filterLogo from '../assests/logo/filter-results-button 1.png'

const NftFilter = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>DISCOVER MORE NFTS</h1>
        <div>
            <div className='flex justify-between items-center mt-10'>
                <div className='flex justify-start items-center space-x-10'>
                    <div className='rounded-full bg-[#3D00B7] px-5 py-2 text-white'>All Category</div>
                    <div>Art</div>
                    <div>Celebrities</div>
                    <div>Gaming</div>
                    <div>Sport</div>
                    <div>Music</div>
                    <div>Crypto</div>
                </div>
                <div>
                   <div className='flex justify-start items-center space-x-2 rounded-full bg-[#DCDCDC] px-5 py-2'>
                    <img src={filterLogo}/>
                    <p>All Filters</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NftFilter