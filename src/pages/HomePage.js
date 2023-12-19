import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../components/Banner'
import AmazeNft from '../components/AmazeNft'
import TopCollectionOver from '../components/TopCollectionOver'
import CollectionFrtNft from '../components/CollectionFrtNft'

const Home = () => {
  return (
    <Layout>
        <Banner />
        <AmazeNft />
        <TopCollectionOver />
        <CollectionFrtNft />
    </Layout>
  )
}

export default Home