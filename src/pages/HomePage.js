import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../components/Banner'
import AmazeNft from '../components/AmazeNft'
import TopCollectionOver from '../components/TopCollectionOver'
import CollectionFrtNft from '../components/CollectionFrtNft'
import SignUpNft from '../components/SignUpNft'
import DiscoverNfts from '../components/DiscoverNfts'

const Home = () => {
  return (
    <Layout>
        <Banner />
        <AmazeNft />
        <TopCollectionOver />
        <CollectionFrtNft />
        <SignUpNft />
        <DiscoverNfts />
    </Layout>
  )
}

export default Home