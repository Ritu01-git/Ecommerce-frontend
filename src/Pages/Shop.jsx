import React from 'react'
import Hero from "../Components/Hero/Hero.jsx";
import Popular from '../Components/Popular/Popular.jsx';
import Offer from '../Components/Offers/Offer.jsx';
import Collection from '../Components/Collections/Collection.jsx';
import Newsletter from '../Components/Newsletter/Newsletter.jsx';
import Footer from '../Components/Footer/Footer.jsx';
const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Collection/>
        <Newsletter/>
    </div>
  )
}

export default Shop