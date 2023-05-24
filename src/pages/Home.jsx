import React from 'react'
import Herosection from '../components/Herosection'
import Navbar from '../components/Navbar'

// import Channels from '../components/Channels'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Chooseus from '../components/Chooseus'

const Home = () => {
  return (<>
    <Navbar />
    <Herosection />
    <Features />
    {/* <Channels/> */}
    <Pricing />
    <Chooseus />

    <Footer />
  </>
  )
}

export default Home