import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = ({testImg}) => {

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
      // Add more testimonials as needed
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 5000, 
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
  
    return (
       <div className='testimonial testi_clints'>
            <div className='container'>
                <div className='testimonial-inner'>
                <p className='subtitle'>Testimonial</p>
                <h3 className='text-center client-say-pd'> WHAT OUR CLIENT’S SAY </h3>
                <Slider {...settings}> 
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
                </Slider>
                </div>
            </div>
      </div>
    );
  };
  
  export default TestimonialCarousel;
  