import React, { useState } from 'react'
import '../css/Career.css'  
const Career = () => {
    const sectionRef = React.useRef(null);
    const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [openId, setOpenId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    files: '',
    phone: '',
    experience: '',
    // Add more fields as needed
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    position: '',
    files: '',
    phone: '',
    experience: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      // For file inputs, update the form data with the FileList
      setFormData({
        ...formData,
        [name]: files[0], // Assuming single file upload
      });
    } else {
      // For other input types, update the form data with the value
      setFormData({
        ...formData,
        [name]: value,
      });

      // Validate the field on change
      validateField(name, value);
    }
  };

 

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'name':
        errorMessage = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !emailRegex.test(value) ? 'Invalid email address' : '';
        break;
      case 'position':
        errorMessage = value.trim() === '' ? 'Position is required' : '';
        break;
      case 'files':
        errorMessage = value === '' ? 'CV is required' : '';
        break;
      case 'phone':
        const phoneRegex = /^[0-9 ()+-]+$/;
        errorMessage = !phoneRegex.test(value) || value.length !== 10 ? 'Invalid phone number ((Exactly 10 digits required)' : '';
      //errorMessage =  numericValue.length < 10 ? 'Phone number must have at least 10 digits' : '';
      break;
      case 'experience':
        errorMessage =
          value.trim() === '' || isNaN(value) ? 'Invalid experience value' : '';
        break;
      // Add more cases for additional fields
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasError = false;
    for (const fieldName in formData) {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName] !== '') {
        hasError = true;
      }
    }

    // Check if there are any validation errors
    if (hasError) {
      console.error('Form validation failed. Please check your inputs.');
      return;
    }

    // Check if any field in the form has a value
    const isFormBlank = Object.values(formData).every((value) => value === '');


     // Proceed with form submission
   // If the form is not blank, proceed with form submission
   if (!isFormBlank) {
    const form = event.target;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch(
        'https://developer.brandclever.in/brand/admin/form/careerForm.php',
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      if (response.ok) {
        console.log('Form data submitted successfully');

        // Reset form fields
        setFormData({
          name: '',
          email: '',
          position: '',
          files: '',
          phone: '',
          experience: '',
        });

        // Clear error messages
        setFormErrors({
          name: '',
          email: '',
          position: '',
          files: '',
          phone: '',
          experience: '',
        });

        var successMsg = 'Form data submitted successfully';

        // Append success message to the console
        console.log(successMsg);

        // Display success message in UI (replace 'successMsg' with the actual element ID)
        document.getElementById('successMsg').innerText = successMsg;
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
     

  const CareerApi = [
      {
          id: 1,
          position: "MERN Stack Developer",
          experience: "2 years",
          vacancies:"2",
          education: "Any Graduate - Any Specialization",
          roleCategory: "Web Developing, Backend",
          description: "Develop interactive, user-friendly applications using the latest frameworks. Translate designs and wireframes into high quality and responsive screens. Developing Front-End and Back-end Web Application. API design, creation and integrations."
      },
      {
          id: 2,
          position: "CMS Developer",
          experience: "2 years",
          vacancies:"2",
          education: "Any Graduate - Any Specialization",
          roleCategory: "Web Developing, Backend",
          description: "Join our dynamic team as a CMS Developer and contribute to the development of innovative web applications. This role requires a solid understanding of WordPress, Shopify, JavaScript, HTML, and CSS. Also any other CMS."
      },
      {
          id: 3,
          position: "Business Development Executive (BDE)",
          experience: "2+ years",
          vacancies:"3",
          education: "Any Graduate - Any Specialization, B.Tech/B.E. - Any Specialization",
          roleCategory: "Pre sales",
          description: "As a BDE one should have clear understanding of Technical requirements and the time-frame to be worked on while converting clients both Online(e.g. Upwork, Guru, Freelancer etc.) and offline (through various public directories, direct, telephonic ) The Business Development Executive should be capable and aware of International Sales and International Marketing. Client Interaction, Negotiations, Closing the deal. Excellent communication skills both verbal and written. Able to set up strong portfolios."
      },
      {
          id: 4,
          position: " Node JS Developer",
          experience: "2+ years",
          vacancies:"2",
          education: "Any Graduate - Any Specialization",
          roleCategory: "Web Developing, Backend",
          description: "Work with Angular2, NodeJS, Meteor, and MongoDB as the stack to develop newer functionalities for our platform. Deploy application on Aron Web Solutions Google Cloud infrastructure. Monitor the application regularly and fix bugs. Work with team to create scalable and robust infrastructure from experts. Strong knowledge."
      } 
  ];

  const toggleDescription = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className='career-page'>
      <div className='career-page-inner'>
        <section className='heading'> 
          <div className='banner-heading placement-banner'>
          <img src={process.env.PUBLIC_URL + '/images/certificate/top-developer.png'} alt='test' />
            <h2>Grow Your Careers With <span className='career-company'>Brandclever</span></h2>
          </div>
        </section>
        <section className='career-first-section'> 
            <div className='main-title'>
                <h1>Growing Organization </h1>
                
                <p>We are a dynamic and growing organization that values diversity, innovation, and teamwork.</p>
                <button onClick={scrollToSection} className='button_slide slide_down'>Your success starts here</button>
            </div>
        </section>
        <section className='why-join'>
            <div className='why-main'>
                <div className='why-content'>
                    <h2>Why Work with Brandclever?</h2>
                    <p>
                      Brandclever promotes a culture of impacting users’ lives with our innovations. And we are looking for people who share, understand our vision and contribute to it. Our company facilitates an environment with open communication, togetherness and equal opportunities.
                    </p>
                    <p>We’re passionate about constantly expanding and forever keen to find dynamic talent. Join us to level up not just the company’s benchmarks but your own as well.</p>
                </div>
                <div className='why-image'>
                    <img src="https://imageio.forbes.com/specials-images/dam/imageserve/370901414/960x0.jpg?format=jpg&width=1440" alt="" />
                </div>
            </div>
        </section>
        <section ref={sectionRef} className='job-vacancy'>
         <div className='left-vacancyCnt'>
              <h3>Apply Now</h3>
            <h4>Grow with us and build your dream career! Explore new opportunities and make your career goals a reality with us!</h4>
               {CareerApi.map(job => (
                <div key={job.id} className='faq-item' onClick={() => toggleDescription(job.id)}>
                  <h3>{job.position} <span><i className="fa fa-plus" aria-hidden="true"></i></span></h3>
                  {openId === job.id && (
                    <>
                      <p>{job.description}</p> 
                      <p><strong>Education: </strong>{job.education}</p>
                      <p><strong>Role Category: </strong>{job.roleCategory}</p> 
                      <p><strong>Experience: </strong>{job.experience}</p> 
                      <p><strong>Vacancies: </strong>{job.vacancies}</p> 
                    </>
                  )}
                </div>
              ))}
         </div>
         <div className='right-vacancyCnt'>
              <form  onSubmit={handleSubmit}>
                  {/* Your form inputs go here */}
                  <div className="form-group">  
                    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                    <span className='error-message'>{formErrors.name}</span>
                  </div>
                  <div className="form-group">    
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                    <span className='error-message'>{formErrors.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} placeholder='Position'/>
                  <span className="error-message">{formErrors.position}</span>
                </div>
                <div className="form-group">      
                  <label htmlFor="cv">Upload CV</label>
                  <input type="file" id='cv' name='files' onChange={handleChange} />
                  <span className='error-message'>{formErrors.files}</span>
                </div>
                <div className="form-group">
                  <input type="tel"  id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone number'/>
                  <span className='error-message'>{formErrors.phone}</span>
                </div>
                <div className="form-group">
                  <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder='Total experience'/>
                  <span className='error-message'>{formErrors.experience}</span>  
                </div>

                <input type="submit" className='apply-sub' value="Submit" /> 
                <span id='successMsg'></span>
            </form>
           
         </div>
        </section>
        </div>
      </div>
    </>
  )
}

export default Career
