import React from 'react'
import Banner from '../Components/Banner/Banner'
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory'
import TrendingNow from '../Components/TrendingNow/TrendingNow'
import LeatherEssential from '../Components/LeatherEssential/LeatherEssential'
import AboutUs from '../Components/AboutUs/AboutUs'
import OurJournal from '../Components/OurJournal/OurJournal'
import Newslatter from '../Components/Newslatter/Newslatter'

const Home = () => {
  return (
    <div className='p-4 border-t border-gray-400'>
      <Banner />
      <ShopByCategory />
      <TrendingNow />
      <LeatherEssential />
      <AboutUs />
      <OurJournal />
      <Newslatter />
    </div>
  )
}

export default Home