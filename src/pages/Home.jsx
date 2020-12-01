import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Services/>
            <Portfolio/>
        </div>
    )
}

export default Home