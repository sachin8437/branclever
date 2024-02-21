import React, { Component } from 'react'
 
export default class Review extends Component {

  render() {
    
    const testimonialImg = [
      process.env.PUBLIC_URL + '/images/testimonial/boy.png',
      process.env.PUBLIC_URL + '/images/testimonial/girl.png', 
      process.env.PUBLIC_URL + '/images/testimonial/boy.png',
      process.env.PUBLIC_URL + '/images/testimonial/girl.png',
      process.env.PUBLIC_URL + '/images/testimonial/boy.png',
    ];

    const tecNoImg = [
      process.env.PUBLIC_URL + '/images/tech/laravel.png', // 0
      process.env.PUBLIC_URL + '/images/tech/magento.png', // 1
      process.env.PUBLIC_URL + '/images/tech/mongo_db.png', // 2
      process.env.PUBLIC_URL + '/images/tech/mysql.png',  // 3
      process.env.PUBLIC_URL + '/images/tech/node_js.png', // 4
      process.env.PUBLIC_URL + '/images/tech/php.png',  // 5
      process.env.PUBLIC_URL + '/images/tech/python.png',  // 6 
      process.env.PUBLIC_URL + '/images/tech/react.png',  //  7
      process.env.PUBLIC_URL + '/images/tech/shopify.png',  // 8
      process.env.PUBLIC_URL + '/images/tech/wordpress.png',  // 9
      process.env.PUBLIC_URL + '/images/tech/zoho_sl.png',   // 10
      process.env.PUBLIC_URL + '/images/tech/squre_Spc.png', // 11
      process.env.PUBLIC_URL + '/images/tech/wix_ol.png', // 12
      process.env.PUBLIC_URL + '/images/tech/presta_Shp.png', // 13  
      process.env.PUBLIC_URL + '/images/tech/bigcommerce.png', // 14   
      process.env.PUBLIC_URL + '/images/tech/Logo-Google-Cloud.png', // 15  
      process.env.PUBLIC_URL + '/images/tech/air-table.png', // 16 
    ];
  
      const testimonials = [
          { 
              id: 1,
              name: 'Solomon',
              country: 'United States',
              date: '25. January, 2024',
              image: testimonialImg[0],
              tecnology: tecNoImg[5],
              text: 'Our project was related to CRM implementation. Brandclever was very helpful and completed the tasks we needed'
          },
          {
              id: 2, 
              name: 'Judi ',
              country: 'United States',
              date: '03. November, 2023',
              image: testimonialImg[1], 
              tecnology: tecNoImg[11],
              text: 'Branclever did an excellent job - not only with the verbage, but cleaning up my site to make it more clear and concise for my customers. She also added SEO (which I had no knowledge of how to do it). I had a few tweaks and she did what I asked of her - making my site light and welcoming. If need be I would definitely use her again. Thank you Brandclever.' 
          },
          { 
            id: 3, 
            name: 'Alex Evans', 
            country: 'United Kingdom',
            date: '07. December, 2023',
            image: testimonialImg[2],
            tecnology: tecNoImg[9],
            text: 'Manish is very well structured and organised. He gives very clear instructions on any technical questions. He clearly knows his was around web builds. His communication is very consistent and always finds the time to carry out the work and fast. I look forward to working to working with them again.' 
          },
          { 
              id: 4, 
              name: 'Kathy', 
              country: 'United States',
              date: '12. January, 2024',
              image: testimonialImg[3],
              tecnology: tecNoImg[16],
              text: 'The project started, was done, and completed in an exceptional, 10-star way. Mansi, Manish and his team were great on all levels: communication, documentation, UX designs, planning, implementation, and always on time. I highly recommend Manish and his team' 
          }, 
          { 
              id: 5, 
              name: 'Adam Viszler',
              country: 'United Kingdom',
              date: '28. November, 2023', 
              image: testimonialImg[4],
              tecnology: tecNoImg[5],
              text: 'Very very satisfied with Manish. He did an outstanding job! I had a complicated multilayered project for him and he did everything exactly as asked. Satisfied my expectations. Will try to work with Manish again in the future when I can.' 
          },
          { 
            id: 6,
            name: 'Heidi Maybee',
            country: 'United States',
            date: 'Oct 23, 2023',
            image: testimonialImg[0],
            tecnology: tecNoImg[12],
            text: 'Extremely talented and professional! Met deadlines and answered all requirements! Thank you very much for all your support and dedication. I`m hopeful that will meet on another project!'
        },
        {
            id: 7, 
            name: 'Darleen ',
            country: 'Philippines',
            date: '18. September, 2023',
            image: testimonialImg[1], 
            tecnology: tecNoImg[15],
            text: 'Branclever helped us set up our GMB account and API. It was a smooth process, very well at communication, and work ethic. I would want to work with him again in the future' 
        },
        { 
          id: 8, 
          name: 'Kevin Tir', 
          country: 'Sweden',
          date: '26. May, 2023',
          image: testimonialImg[2],
          tecnology: tecNoImg[13],
          text: 'I had the pleasure of working with Manish on the development of our Prestashop module for Klarna payments. From start to finish, Manish impressed with his professionalism, technical expertise, and swift communication. The module he delivered exceeded our expectations and integrated seamlessly into our online store. I particularly appreciated his proactive approach to addressing potential issues and his willingness to go the extra mile to ensure everything worked perfectly. I wholeheartedly recommend Manish to anyone in need of a reliable and talented developer. Thank you for the outstanding work!' 
        },
        { 
            id: 9, 
            name: 'Heather Elsayed', 
            country: 'United States',
            date: '12. January, 2024',
            image: testimonialImg[2],
            tecnology: tecNoImg[9],
            text: 'Indu is a great communicator, thorough, and makes sure to deliver exactly what the customer requests. She was able to build a website I love and really reflected my personality. She brought to light descriptions of what I envisioned for it- but put her own touches into the website to make it stand out. I will definitely be working with Indu again with future projects!' 
        }, 
        { 
            id: 10, 
            name: 'Derek Davis',
            country: 'United States',
            date: '05. Oct, 2023', 
            image: testimonialImg[4],
            tecnology: tecNoImg[14],
            text: 'Indu did an amazing job on our project with quick turnaround. Will definitely use her for future tasks.' 
        },
        // Add more testimonials as needed
      ];
      
    return (
        <div className='review-page'>
            <div className='review-page-inner'> 
              <section className='heading'> 
                <div className='banner-heading review-banner'>
                  <h2>Client's Review and Feedback</h2>
                </div>
              </section>

              <div className='testimonial testi_clints'>
                <div className='container'>
                  <div className='testimonial-inner'>
                    <p className='subtitle'>Testimonial</p>
                    <h3 className='text-center p-5'> WHAT OUR CLIENT’S SAY </h3>
                     <div className='reviesOfClient'> 
                    {testimonials.map(testimonial => (
                    <div key={testimonial.id} className='item'>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p className='country'>{testimonial.country}</p>
                        <span className='review-date'>{testimonial.date}</span> 
                        <span className="ti-stars"> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                        <p>{testimonial.text}</p>
                        <div className='tecnoLogo'><img src={testimonial.tecnology} alt={testimonial.name} /></div>
                    </div> 
                    ))}  
                    </div>
                  </div>
                </div>
              </div>   
            
            </div>
      </div>
    )
  }
}
