import React, { Component } from 'react'; 

class Faq extends Component {
  constructor(props) {
    super(props);
    // Define your FAQ data
    this.faqs = [
        { 
            question: 'Do you offer app maintenance and support services?', 
            answer: 'Yes, we offer comprehensive maintenance and support services tailored to meet your business requirements. Being one of the best mobile app development agencies, our approach is centered around helping you choose the maintenance strategy that best aligns with your needs, ensuring the seamless operation of your software applications.            Our app maintenance services encompass a wide range of offerings, including:Software upgrades as per emerging technologies Automated backups Issue management and response Ongoing support and bug fixes Regular performance and security enhancements Version upgrades Comprehensive user support Performance monitoring' 
        },
        { 
            question: 'Do you assist with software integration and data migration?', 
            answer: 'Yes, we offer end-to-end software integration and data migration services that can simplify your critical business processes. As a dedicated mobile application development company, we ensure using a tailored strategy to optimize the software integration process. We start with a thorough analysis of your business objectives and align them with the most appropriate integration approach. We prioritize non-functional requirements like scalability and security to determine the ideal delivery model and governance structure. Coming to data migration, we ensure that our approach is structured and carefully crafted so as to ensure a seamless transition without compromising data integrity. We begin by assessing your data sources and gaining a comprehensive understanding of their unique characteristics, formats, and security requirements. We then carefully choose the most appropriate method, such as using ETL tools to move data from one database to another or using APIs to link different apps or systems together. Our selection is 100% aligned with your specific data quality, performance, and security needs.' 
        },
        { 
            question: 'What is React?', 
            answer: 'React is a JavaScript library for building user interfaces.' 
        },
        { 
            question: 'How do I install React?', 
            answer: 'You can install React using npm by running: npm install react' 
        },
      // Add more FAQ items as needed
    ];

    // Initialize state to manage the active FAQ item
    this.state = {
        activeIndex: null,
        answerHeight: 0,
      };
    }
  
    toggleFAQ(index) {
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex === index ? null : index,
        answerHeight: prevState.activeIndex === index ? 0 : this.calculateAnswerHeight(index),
      }));
    }
  
    calculateAnswerHeight(index) {
      // Calculate the height of the answer content to set it dynamically
      const answerElement = document.getElementById(`answer-${index}`);
      return answerElement ? answerElement.scrollHeight : 0;
    }
  
    render() {
      return (
        <div className="faq">
          <div className="faq-main">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-inner">
              {this.faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className={`question ${this.state.activeIndex === index ? 'active' : ''}`}
                    onClick={() => this.toggleFAQ(index)}
                  >
                    <span className='question_in'>{faq.question}</span>
                    <span className='icon'><svg width="18px" height="15px" viewBox="0 0 18 15"> <path d="M1,5 L11,5"></path> <polyline points="8 1 12 5 8 9"></polyline> </svg></span>
                    
                  </div>
                  <div
                    id={`answer-${index}`}
                    className="answer"
                    style={{ maxHeight: this.state.activeIndex === index ? this.state.answerHeight + 'px' : '0' }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Faq;