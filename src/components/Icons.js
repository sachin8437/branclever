import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Icons extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          industryDemands: [
            {
              title: 'Healthcare',
              icon: process.env.PUBLIC_URL +'/images/industry/heart.svg',
              url: '/',
            },
            {
              title: 'Finance',
              icon: process.env.PUBLIC_URL + '/images/industry/finnanc.svg',
              url: '/',
            },
            {
              title: 'Restaurant',
              icon: process.env.PUBLIC_URL + '/images/industry/restto.svg',
              url: '/',
            },
            {
              title: 'eCommerce',
              icon: process.env.PUBLIC_URL + '/images/industry/ecomrce.svg',
              url: '/',
            }, 
            {
               title: 'EV',
               icon: process.env.PUBLIC_URL + '/images/industry/ev_batry.svg',
               url: '/',
            },
            {
               title: 'SaaS',
               icon: process.env.PUBLIC_URL + '/images/industry/saas.svg',
               url: '/',
            },
            {
               title: 'Travel',
               icon: process.env.PUBLIC_URL + '/images/industry/travel.svg',
               url: '/',
            },
            {
               title: 'Entertainment',
               icon: process.env.PUBLIC_URL + '/images/industry/music.svg',
               url: '/',
            },
            {
               title: 'On-Demand',
               icon: process.env.PUBLIC_URL + '/images/industry/ondemaand.svg',
               url: '/',
            },
            {
               title: 'Social Media',
               icon: process.env.PUBLIC_URL + '/images/industry/socialmedia.svg',
               url: '/',
            },
            {
                title: 'Logistics',
                icon: process.env.PUBLIC_URL + '/images/industry/logis.svg',
                url: '/',
            },
            {
                title: 'Edtech',
                icon: process.env.PUBLIC_URL + '/images/industry/ed-tech.svg',
                url: '/',
            }, 
          ],
        };
    }
  render() {
    return (
        <div className='industryDemands'>
            <div className="industryDemands-inner"> 
                <h2>Industry Demands</h2> 
                <div className="industryDemands-items">
                    {this.state.industryDemands.map((industry, index) => (
                        <div key={index} className="col">
                            <Link to={industry.url}>
                                <img src={industry.icon} alt={industry.title} />
                                <h3>{industry.title}</h3>  
                            </Link>    
                        </div>
                    ))} 
                </div> 
            </div>
        </div>
    )
  }
}
