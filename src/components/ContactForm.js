import React, { Component } from 'react';
import axios from 'axios';
//import contactBG from './Images/contact-us.jpg';
//contact-us.jpg

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.myFormRef = React.createRef();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  validateForm = () => {
    const { name, email, subject, message } = this.state;
    let errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    // Name Validation
    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    // Subject validation
    if (!subject) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    // Message validation
    if (!message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  
addFormData = (evt) => {
  evt.preventDefault();

  if (this.validateForm()) {
    const formData = new FormData();
    Object.entries(this.state).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
    .post('https://developer.brandclever.in/brand/admin/form/contactForm.php', formData)
    .then((res) => {
      console.log(res.data.success);
      document.getElementById('successMsg').innerText = res.data.success;

      this.myFormRef.current.reset();
    })
    .catch((error) => {
      console.error(error.response.data.error); // Log detailed error message
    });
  } 
};


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: '',
      },
    }));
  };


 

  
  render() {
    const { errors } = this.state;
    // const divStyle = {
    //   background: `url(${contactBG})`,
    //   backgroundSize: 'cover',  // Adjust this property based on your design needs
    //   // Add other background-related properties if needed
    // };

    return (
      <> {/* style={divStyle}  */}
        <div id="contactForm" className="contactForm p-5" >
          <div className="container2">
            <div className="contactForm-inner">
            
              {/* ... (your existing code) */}
                {/* <div className='form-left col-6'>
                 
                </div>    */}
              <div className="form-right">
                {/* ... (your existing code) */}
                  <h3>GET IN TOUCH</h3>
                  <p>Our Subject Matter Experts Are Change Catalysts. Book Your First Presentation with Our Experts Today.</p>
                 <form ref={this.myFormRef} onSubmit={this.addFormData}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      id="name"
                      placeholder="Name *"
                      name="name"
                      onChange={this.handleInputChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Email *"
                      name="email"
                      onChange={this.handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${errors.subject && 'is-invalid'}`}
                      id="subject"
                      placeholder="Subject *"
                      name="subject"
                      onChange={this.handleInputChange}
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={`form-control ${errors.message && 'is-invalid'}`}
                      id="message"
                      placeholder="Message *"
                      name="message"
                      onChange={this.handleInputChange}
                      rows="3"
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary button_slide slide_down">
                    Submit
                  </button>
                  <span id='successMsg'></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}