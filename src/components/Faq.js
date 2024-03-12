import React, { Component } from 'react'; 

class Faq extends Component {
  constructor(props) {
    super(props);
    // Define your FAQ data
    this.faqs = [
        { 
            question: 'What services does Brandclever offer?', 
            answer: 'Brandclever offers comprehensive IT services including web design & development, software development, IT consulting, cloud solutions, and cybersecurity services.' 
        },
        { 
            question: 'How can Brandclever help my business with IT services and consulting?', 
            answer: 'Brandclever provides strategic IT consulting and customized solutions to streamline operations, enhance productivity, and achieve business objectives through innovative technology.' 
        }, 
        { 
          question: 'How does Brandclever approach client projects?', 
          answer: 'Brandclever collaborates closely with clients to understand their needs and challenges, providing personalized solutions with a focus on quality and timely delivery.' 
        },
        { 
          question: 'Can Brandclever assist with both small-scale and large-scale IT projects?', 
          answer: 'Yes, Brandclever has the capability and experience to handle projects of all sizes, ensuring successful outcomes regardless of scale.' 
        },
        { 
          question: 'Does Brandclever provide ongoing support and maintenance for implemented solutions?', 
          answer: 'Yes, Brandclever offers ongoing support and maintenance services to ensure the continued smooth operation and performance of implemented solutions. ' 
        },
        { 
          question: 'What is the typical project completion timeline with Brandclever?', 
          answer: 'Project timelines vary based on scope and complexity, with Brandclever committed to delivering projects efficiently while maintaining high standards.' 
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