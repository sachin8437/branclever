import React, { Component } from 'react'
import Tabs from '../components/Tabs'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-page'>
        <div className='portfolio-inner'> 
          <section className='heading'> 
            <div className='banner-heading protfolio-banner'>
              <h2>Portfolio's </h2>
            </div>
          </section>

            <Tabs />

        </div>
      </div>
    )
  }
}
