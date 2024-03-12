import React, { Component } from 'react';
import axios from 'axios';

export default class PlacementForm extends Component {
  constructor(props) {
    super(props);
    this.myFormRef = React.createRef();
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      trainingExperience: '',
      selectedProfile: '',
      errors: {
        name: '',
        email: '',
        phone: '',
        address: '',
        trainingExperience: '',
        selectedProfile: '',
      },
      currentStep: 1,
      answers: {}, // Initialize an empty object to store selected answers
      answersData: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: value,
      errors: { ...prevState.errors, [name]: '' },
      answersData: [], // Clear answersData when step changes
    }));
  };

  handleTrainingExperienceChange = (event) => {
    this.setState({
      trainingExperience: event.target.value,
      errors: { ...this.state.errors, trainingExperience: '' },
    });
  };

  handleProfileChange = (event) => {
    this.setState({
      selectedProfile: event.target.value,
      errors: { ...this.state.errors, selectedProfile: '' },
      answersData: [], // Clear answersData when step changes
    });
  };

  handleAnswerChange = (questionId, selectedAnswer) => {
    this.setState((prevState) => ({
      answers: { ...prevState.answers, [questionId]: selectedAnswer },
    }));
  };

  moveToStep = (step) => {
    if (this.validateForm()) {
      this.setState({ currentStep: step });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  
    if (this.validateForm()) {
      const formData = new FormData();
      Object.entries(this.state).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      // // Append selected answers to form data
      // Object.entries(this.state.answers).forEach(([questionId, selectedAnswer]) => {
      //   formData.append(`selectedAns-${questionId}`, selectedAnswer);
      // });

      // Add logic specific to step 2 here
      if (this.state.currentStep === 2) {
        const answerInputs = document.querySelectorAll('.profile_Q.ans_Qus:checked');
        answerInputs.forEach((input) => {
          formData.append(input.name, input.value);
          this.setState((prevState) => ({
            answersData: [...prevState.answersData, { question: input.name, answer: input.value }],
          }));
        });
  
        // Log answersData to check if it's correct
       // console.log(this.state.answersData);
      }
  
      axios
        .post('https://developer.brandclever.in/brand/admin/form/placementForm.php', formData)
        .then((res) => {
          console.log(res.data);
          document.getElementById('successMsg').innerText = res.data.data; 
          // Reset form fields
          this.myFormRef.current.reset();

          // Show the first step after 5 seconds
          setTimeout(() => {
            this.setState({ currentStep: 1 });
          }, 5000);

        })
        .catch((error) => {
          console.error(error.response.data.error);
         // var msgError = error.response.data.error.errorMSG;
          document.getElementById('errorMsg').innerText = "Email is already exist! ";
        });
    }
  };
  

  validateForm = () => {
    // ... (existing validation code)
    const { name, email, phone, address, trainingExperience, selectedProfile, currentStep } = this.state;
 
	  // Validation for step 1 fields
	  if (currentStep === 1) {
		let isValid = true;

    if (!name) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, name: 'Name is required' },
      }));
      isValid = false;
    }

    // Email validation
    if (!email) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, email: 'Email is required' },
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, email: 'Invalid email address' },
      }));
      isValid = false;
    }
 
    // Phone validation
    if (!phone) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, phone: 'Phone Number is required' },
      }));
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      // This regex checks if the phone number contains exactly 10 digits
      this.setState((prevState) => ({
        errors: { ...prevState.errors, phone: 'Invalid phone number. Please enter 10 digits.' },
      }));
      isValid = false;
    }


    // Address validation
    if (!address) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, address: 'Fill in your correct Address' },
      }));
      isValid = false;
    }

		// Training experience validation
		if (!trainingExperience.trim()) {
		  this.setState((prevState) => ({
			errors: { ...prevState.errors, trainingExperience: 'Select your Experience' },
		  }));
		  isValid = false;
		}

		// Selected profile validation
		if (!selectedProfile.trim()) {
		  this.setState((prevState) => ({
			errors: { ...prevState.errors, selectedProfile: 'Select your Profile!' },
		  }));
		  isValid = false;
		}

		return isValid;
	  }

	  // Validation for step 2 fields
	  if (currentStep === 2) {
		// Selected profile validation
		if (!selectedProfile.trim()) {
		  this.setState((prevState) => ({
			errors: { ...prevState.errors, selectedProfile: 'Select your Profile!' },
		  }));
		  return false;
		}

		// Additional validations for step 2 fields if needed

		return true;
	  }

	  return true;
  };

  renderStep1 = () => {
    // ... (existing step 1 code)
	
    const {   trainingExperience, errors } = this.state;

    return (
      <>
        <div className="common-fields">
		  <div className="form-group">
			<label htmlFor="name">Name *</label>
			<input type="text" id="name" className='form-control' name="name" placeholder="Name" onChange={this.handleInputChange} />
			<div className="error-message">{errors.name}</div>
		  </div>
		  <div className="form-group">
			<label htmlFor="email">Email *</label>
			<input type="text" id="email" className='form-control' name="email" placeholder="Email" onChange={this.handleInputChange} />
			<div className="error-message">{errors.email}</div>
		  </div>
		  <div className="form-group">
			<label htmlFor="phone">Phone *</label>
			<input type="text" id="phone" className='form-control' name="phone" placeholder="Phone" onChange={this.handleInputChange} />
			<div className="error-message">{errors.phone}</div>
		  </div>
		  <div className="form-group">
			<label htmlFor="address">Address *</label>
			<input type="text" id="address" className='form-control' name="address" placeholder="Address" onChange={this.handleInputChange} />
			<div className="error-message">{errors.address}</div>
		  </div>
		</div>
        <div className="left-fields">
		  <div className="form-group exprince">
			<label htmlFor="traing_exp">Do you have any  Training / Experience *</label>
			<select name="traing_exp" id="traing_exp" className='form-control' value={trainingExperience} onChange={this.handleTrainingExperienceChange}>
			  <option value="">Select</option>
			  <option value="yes">YES</option>
			  <option value="no">NO</option>
			</select>
			<div className="error-message">{errors.trainingExperience}</div>
		  </div>
		</div>
        <div className="profile-main">
		  <label>Profile (Language) *</label>
		  <div className="profile-inner">
			<div className="form-group">
			  <input type="radio" id="php" name="langauge" value="PHP" onChange={this.handleProfileChange} />
			  <label htmlFor="php">PHP</label>
			</div>
			<div className="form-group">
			  <input type="radio" id="react_node" name="langauge" value="React Js / Node Js" onChange={this.handleProfileChange} />
			  <label htmlFor="react_node">React Js / Node Js</label>
			</div>
			<div className="form-group">
			  <input type="radio" id="seo" name="langauge" value="Search Engine Optimization" onChange={this.handleProfileChange} />
			  <label htmlFor="seo">Search Engine Optimization</label>
			</div>
			<div className="form-group">
			  <input type="radio" id="graphics" name="langauge" value="Graphics Designer" onChange={this.handleProfileChange} />
			  <label htmlFor="graphics">Graphic Designer</label>
			</div>
		  </div>
		  <div className="error-message">{errors.selectedProfile}</div>
		</div>
        <div className="form-fields-button dfd">
          <button className="Next_btn_traning_and_placement button_slide slide_down" type="button" onClick={() => this.moveToStep(2)}>
            Next
          </button>
        </div>
      </>
    );
  };

  renderStep2 = () => {
    // ... (existing step 2 code)
	
    const { trainingExperience, selectedProfile } = this.state;

    const profileQuestions = {
      // ... (your existing profile-specific questions)
	  
      'PHP': [
        // ... (questions for PHP profile)
        {
          id : 1,   
          question : "What is PHP?",
          answerOPT1: "Personal Home Page",
          answerOPT2: "Preprocessor Hypertext",
          answerOPT3: "PHP: Hypertext Preprocessor" 
      },
      {
          id : 2,   
          question : "Is the PHP language case sensitive?",
          answerOPT1: "Yes",
          answerOPT2: "No",
          answerOPT3: "Depends on the version" 
      },
      {
          id : 3,   
          question : "What is the difference between 'print' and 'echo'?",
          answerOPT1: "No difference",
          answerOPT2: "'Print' can take multiple parameters, while 'echo' can't",
          answerOPT3: "'Print' always returns a value, while 'echo' does not" 
      },
      {
          id : 4,   
          question : "Can PHP interact with HTML?",
          answerOPT1: "No",
          answerOPT2: "Yes",
          answerOPT3: "Only with JavaScript" 
      },
      {
          id : 5,   
          question : "Describe how dynamic and static websites are different.",
          answerOPT1: "Dynamic websites use HTML, while static websites use JavaScript.",
          answerOPT2: "Dynamic websites are interactive and can change content, while static websites remain unchanged.",
          answerOPT3: "Static websites are more secure, while dynamic websites are prone to security issues." 
      },
      {
          id : 6,   
          question : "What does the 'break' statement do?",
          answerOPT1: "Terminates the current loop or switch statement",
          answerOPT2: "Outputs text to the browser",
          answerOPT3: "Halts the script execution" 
      },
      {
          id : 7,   
          question : "What does the 'continue' statement do?",
          answerOPT1: "Ends the script execution",
          answerOPT2: "Skips the rest of the code and moves to the next iteration of a loop",
          answerOPT3: "Jumps to a specific line in the code" 
      },
      {
          id : 8,   
          question : "How are PHP4 and PHP5 different?",
          answerOPT1: "PHP5 introduced object-oriented programming features, while PHP4 did not",
          answerOPT2: "PHP4 is faster than PHP5",
          answerOPT3: "There is no difference" 
      },
      {
          id : 9,   
          question : "What is the difference between variables and constants?",
          answerOPT1: "Variables can be changed during script execution, while constants cannot",
          answerOPT2: "Constants can only hold numeric values, while variables can hold any data type",
          answerOPT3: "Variables are only used for mathematical operations, while constants are used for text" 
      },
      {
          id : 10,   
          question : "Which soft skills do you need to use PHP in a team of developers?",
          answerOPT1: "Technical proficiency only",
          answerOPT2: "Communication, collaboration, and problem-solving skills",
          answerOPT3: "Leadership skills only" 
      },
        
      ],
      'React Js / Node Js': [
        // ... (questions for React Js / Node Js profile)
        {
          id : 1,   
          question : "What is ReactJS?",
          answerOPT1: "A programming language",
          answerOPT2: "A JavaScript library for building user interfaces",
          answerOPT3: "An operating system" 
        },
        {
            id : 2,   
            question : "Why is ReactJS used?",
            answerOPT1: "To manage server-side operations",
            answerOPT2: "To build mobile applications",
            answerOPT3: "To build interactive user interfaces" 
        },
        {
            id : 3,   
            question : "How does ReactJS work?",
            answerOPT1: "It uses a real Document Object Model (DOM)",
            answerOPT2: "It generates and updates a virtual DOM",
            answerOPT3: "It compiles JavaScript to machine code" 
        },
        {
            id : 4,   
            question : "How is React different from React Native?",
            answerOPT1: "React is for web development, while React Native is for mobile app development",
            answerOPT2: "React is for mobile app development, while React Native is for web development",
            answerOPT3: "React and React Native are the same thing" 
        },
        {
            id : 5,   
            question : "What are forms in ReactJS?",
            answerOPT1: "Components used to structure user input",
            answerOPT2: "Components used to display images",
            answerOPT3: "Components used for styling" 
        },
        {
            id : 6,   
            question : "How to create components in ReactJS?",
            answerOPT1: "Using HTML",
            answerOPT2: "Using CSS",
            answerOPT3: "Using JavaScript functions or classes" 
        },
        {
            id : 7,   
            question : "Differentiate between real DOM and virtual DOM?",
            answerOPT1: "Real DOM is faster than virtual DOM",
            answerOPT2: "Virtual DOM is a lightweight copy of the real DOM",
            answerOPT3: "Real DOM is used only for server-side rendering" 
        },
        {
            id : 8,   
            question : "What is JSX?",
            answerOPT1: "A programming language",
            answerOPT2: "JavaScript Syntax Extension",
            answerOPT3: "A React component" 
        },
        {
            id : 9,   
            question : "Why is Node.js Single-threaded?",
            answerOPT1: "Because it uses multiple threads",
            answerOPT2: "To ensure thread safety",
            answerOPT3: "To handle asynchronous operations efficiently" 
        },
        {
            id : 10,   
            question : "Why use Node.js?",
            answerOPT1: "To build desktop applications",
            answerOPT2: "To handle server-side operations asynchronously",
            answerOPT3: "To create mobile applications" 
        },
         
      ],
      'Search Engine Optimization': [
        // ... (questions for SEO profile)
        {
          id : 1,   
          question : "What does SEO stand for?",
          answerOPT1: "Social Engagement Optimization",
          answerOPT2: "Search Engine Optimization",
          answerOPT3: "Site Enhancement Outreach" 
        },
        {
            id : 2,   
            question : "Why is SEO important for businesses?",
            answerOPT1: "To increase social media presence",
            answerOPT2: "To improve website ranking on search engines",
            answerOPT3: "To create visually appealing content" 
        },
        {
            id : 3,   
            question : "What are some Google ranking factors?",
            answerOPT1: "Number of social media followers",
            answerOPT2: "Quality and relevance of content",
            answerOPT3: "Both A and B" 
        },
        {
            id : 4,   
            question : "What is the primary difference between organic and paid search results?",
            answerOPT1: "Organic results are free, paid results require payment",
            answerOPT2: "Organic results appear on social media, paid results on search engines",
            answerOPT3: "There is no difference" 
        },
        {
            id : 5,   
            question : "What is the Google Sandbox?",
            answerOPT1: "A virtual playground for developers",
            answerOPT2: "A testing environment for new websites",
            answerOPT3: "Google's penalty for black hat SEO practices" 
        },
        {
            id : 6,   
            question : "What is keyword density?",
            answerOPT1: "The frequency of a keyword in a webpage's content",
            answerOPT2: "The ratio of keywords to images on a webpage",
            answerOPT3: "The number of keywords in a meta description" 
        },
        {
            id : 7,   
            question : "Define bounce rate in SEO.",
            answerOPT1: "The percentage of visitors who leave a site after viewing only one page",
            answerOPT2: "The time it takes for a page to load",
            answerOPT3: "The number of social media shares" 
        },
        {
            id : 8,   
            question : "What is On-page SEO?",
            answerOPT1: "Optimizing content on the website itself",
            answerOPT2: "Marketing through social media",
            answerOPT3: "Paid advertising strategies" 
        },
        {
            id : 9,   
            question : "Which SEO component involves optimizing website structure and coding?",
            answerOPT1: "On-page SEO",
            answerOPT2: "Off-page SEO",
            answerOPT3: "Technical SEO" 
        },
        {
            id : 10,   
            question : "Name a commonly used SEO tool.",
            answerOPT1: "Photoshop",
            answerOPT2: "Google Analytics",
            answerOPT3: "Microsoft Excel" 
        },
          
        ],
        'Graphics Designer': [
          // ... (questions for Graphics Designer profile)
          {
            id : 1,   
            question : "What is graphic design?",
            answerOPT1: "Creating graphs and charts",
            answerOPT2: "Visual communication through images and text",
            answerOPT3: "Designing social media strategies" 
        },
        {
            id : 2,   
            question : "Why is visual communication important in graphic design?",
            answerOPT1: "It adds unnecessary complexity",
            answerOPT2: "It enhances the message and engages the audience",
            answerOPT3: "It only matters in print, not digital media" 
        },
        {
            id : 3,   
            question : "Name a common graphic design software.",
            answerOPT1: "Microsoft Word",
            answerOPT2: "Photoshop",
            answerOPT3: "Excel" 
        },
        {
            id : 4,   
            question : "What does resolution refer to in graphic design?",
            answerOPT1: "The number of colors in an image",
            answerOPT2: "The quality and clarity of an image",
            answerOPT3: "The size of a graphic design file" 
        },
        {
            id : 5,   
            question : "What is the key difference between vector and raster graphics?",
            answerOPT1: "Vector graphics use pixels, raster graphics use vectors",
            answerOPT2: "Vector graphics are resolution-independent, raster graphics are not",
            answerOPT3: "There is no difference" 
        },
        {
            id : 6,   
            question : "Explain the principle of balance in design.",
            answerOPT1: "Adding more elements to a design",
            answerOPT2: "Distributing visual elements to create stability",
            answerOPT3: "Using contrasting colors" 
        },
        {
            id : 7,   
            question : "How does color theory apply to graphic design?",
            answerOPT1: "It is irrelevant to graphic design",
            answerOPT2: "It influences emotions and visual hierarchy",
            answerOPT3: "It only matters in fine art" 
        },
        {
            id : 8,   
            question : "What is the purpose of typography in graphic design?",
            answerOPT1: "Adding images to a design",
            answerOPT2: "Enhancing the layout of a website",
            answerOPT3: "Communicating information through text" 
        },
        {
            id : 9,   
            question : "Define white space in graphic design.",
            answerOPT1: "Unused space on a computer screen",
            answerOPT2: "Space without any visual elements",
            answerOPT3: "The color white used in a design" 
        },
        {
            id : 10,   
            question : "How should a graphic designer handle client feedback?",
            answerOPT1: "Ignore it",
            answerOPT2: "Incorporate constructive feedback to improve the design",
            answerOPT3: "Argue with the client" 
        },
      ],
    
    };

    const profileQuestionsAdvance = {
      'PHP': [
        // ... (questions for PHP profile)
        {
          id : 1,   
          question : "Does JavaScript interact with PHP?",
          answerOPT1: "No, they are completely separate languages",
          answerOPT2: "Yes, through AJAX requests and server-side scripts",
          answerOPT3: "Yes, but only through HTML forms" 
        },
        {
            id : 2,   
            question : "How is a PHP script executed?",
            answerOPT1: "In the client's browser",
            answerOPT2: "By the PHP interpreter on the server",
            answerOPT3: "By the database server" 
        },
        {
            id : 3,   
            question : "Differentiate between GET and POST?",
            answerOPT1: "GET is more secure than POST",
            answerOPT2: " GET sends data via the URL, while POST sends data in the request body",
            answerOPT3: "POST is faster than GET" 
        },
        {
            id : 4,   
            question : "What is a PHP session?",
            answerOPT1: "A temporary storage mechanism for data associated with a particular user",
            answerOPT2: "A function to end the PHP script execution",
            answerOPT3: "A type of loop in PHP" 
        },
        {
            id : 5,   
            question : "Define A PHP Data Object?",
            answerOPT1: "An object-oriented programming feature in PHP",
            answerOPT2: "A way to represent database connections and queries in PHP",
            answerOPT3: "A built-in data structure for storing key-value pairs" 
        },
        {
            id : 6,   
            question : "How to create API in PHP?",
            answerOPT1: "By using HTML forms",
            answerOPT2: "By defining functions that return JSON or XML data",
            answerOPT3: "By embedding PHP code directly into JavaScript files" 
        },
        {
            id : 7,   
            question : "What are cookies in PHP?",
            answerOPT1: "Small text files stored on the client's computer",
            answerOPT2: "Variables used to store session data on the server",
            answerOPT3: "A feature for caching database query results" 
        },
        {
            id : 8,   
            question : "How are constants defined in PHP?",
            answerOPT1: "Using the define() function",
            answerOPT2: "Using the const keyword",
            answerOPT3: "Constants cannot be defined in PHP" 
        },
        {
            id : 9,   
            question : "What is PEAR in PHP?",
            answerOPT1: "A package manager for PHP libraries",
            answerOPT2: "A database management system",
            answerOPT3: "An encryption algorithm" 
        },
        {
            id : 10,   
            question : "Explain The Main Types Of Errors?",
            answerOPT1: "Syntax errors, runtime errors, and logic errors",
            answerOPT2: "Input errors, output errors, and processing errors",
            answerOPT3: "Client-side errors, server-side errors, and database errors" 
        },
        
      ],
      'React Js / Node Js': [
        // ... (questions for React Js / Node Js profile)
        {
          id : 1,   
          question : "What are props in React?",
          answerOPT1: "Methods used to manipulate state",
          answerOPT2: "Data passed from parent to child components",
          answerOPT3: "HTML elements used for styling" 
        },
        {
            id : 2,   
            question : "What is a component?",
            answerOPT1: "A function used for styling",
            answerOPT2: "A reusable piece of UI",
            answerOPT3: "A built-in React method" 
        },
        {
            id : 3,   
            question : "What are the keys in React?",
            answerOPT1: "Unique identifiers for list items",
            answerOPT2: "CSS properties",
            answerOPT3: "HTML tags" 
        },
        {
            id : 4,   
            question : "How does React handle events?",
            answerOPT1: "By using event delegation",
            answerOPT2: "By dispatching actions to Redux",
            answerOPT3: "By using synthetic events" 
        },
        {
            id : 5,   
            question : "Can you describe the role of modules in a Nest.js project?",
            answerOPT1: "Modules define the routes of the application",
            answerOPT2: "Modules encapsulate related functionality with clear boundaries",
            answerOPT3: "Modules manage state in Redux" 
        },
        {
            id : 6,   
            question : "What is the use of render() in React?",
            answerOPT1: "To update the state of a component",
            answerOPT2: "To handle asynchronous operations",
            answerOPT3: "To render JSX into the DOM" 
        },
        {
            id : 7,   
            question : "How do you update the state of a component?",
            answerOPT1: "By directly modifying the state object",
            answerOPT2: "By using setState() method",
            answerOPT3: "By passing props from parent component" 
        },
        {
            id : 8,   
            question : "What are the differences between class and functional components?",
            answerOPT1: "Functional components have a render method, while class components do not",
            answerOPT2: "Class components can have state and lifecycle methods, while functional components cannot",
            answerOPT3: "There are no differences between them" 
        },
        {
            id : 9,   
            question : "How is React routing different from conventional routing?",
            answerOPT1: "React routing uses server-side rendering, while conventional routing uses client-side rendering",
            answerOPT2: "React routing does not require page reloads for navigation",
            answerOPT3: "There are no differences between them" 
        },
        {
            id : 10,   
            question : "How is React routing different from conventional routing?",
            answerOPT1: "React routing is only for mobile applications, while conventional routing is for web applications",
            answerOPT2: "React routing is handled by the server, while conventional routing is handled by the client",
            answerOPT3: "There are no differences between them" 
        },
         
      ],        
      'Search Engine Optimization': [
        // ... (questions for SEO profile)
        {
          id : 1,   
          question : "What does XML Sitemap do for a website?",
          answerOPT1: "Enhances website design",
          answerOPT2: "Helps search engines understand site structure",
          answerOPT3: "Encrypts website data" 
        },
        {
            id : 2,   
            question : "What is a canonical issue in SEO?",
            answerOPT1: "A preferred version of a webpage",
            answerOPT2: "A penalty for duplicate content",
            answerOPT3: "A type of keyword" 
        },
        {
            id : 3,   
            question : "Why does page speed matter for SEO?",
            answerOPT1: "It improves user experience",
            answerOPT2: "It increases social media shares",
            answerOPT3: "It affects the number of backlinks" 
        },
        {
            id : 4,   
            question : "What is the purpose of structured data in SEO?",
            answerOPT1: "It enhances website visuals",
            answerOPT2: "It provides additional context to search engines",
            answerOPT3: "It reduces bounce rate" 
        },
        {
            id : 5,   
            question : "Explain the difference between do-follow and no-follow links.",
            answerOPT1: "Do-follow links pass link juice, no-follow links do not",
            answerOPT2: "Do-follow links are only for social media, no-follow links for search engines",
            answerOPT3: "There is no difference" 
        },
        {
            id : 6,   
            question : "Which Webmaster tool is commonly used for SEO analysis?",
            answerOPT1: "Photoshop",
            answerOPT2: "Google Search Console",
            answerOPT3: "Adobe Illustrator" 
        },
        {
            id : 7,   
            question : "How does responsive design impact SEO?",
            answerOPT1: "It has no impact",
            answerOPT2: "It improves mobile user experience, positively affecting rankings",
            answerOPT3: "It decreases website loading speed" 
        },
        {
            id : 8,   
            question : "What is the difference between local SEO and traditional SEO?",
            answerOPT1: "Local SEO only targets international audiences",
            answerOPT2: "Local SEO focuses on location-based searches",
            answerOPT3: "There is no difference" 
        },
        {
            id : 9,   
            question : "What is the relationship between SEO and SEM?",
            answerOPT1: "They are the same thing",
            answerOPT2: "SEO focuses on organic traffic, SEM includes paid advertising",
            answerOPT3: "SEM is a type of structured data" 
        },
        {
            id : 10,   
            question : "How does robots.txt contribute to SEO?",
            answerOPT1: "It improves website design",
            answerOPT2: "It guides search engines on which pages to crawl or ignore",
            answerOPT3: "It enhances social media presence" 
        },
         
      ],
      'Graphics Designer': [
        // ... (questions for Graphics Designer profile)
        {
          id : 1,   
          question : "What is the difference between RGB and CMYK color modes?",
          answerOPT1: "RGB is for print, CMYK is for digital",
          answerOPT2: "RGB is for digital, CMYK is for print",
          answerOPT3: "There is no difference" 
        },
        {
            id : 2,   
            question : "How does UX/UI design relate to graphic design?",
            answerOPT1: "They are entirely unrelated",
            answerOPT2: "UX/UI design focuses on the user experience, graphic design on visuals",
            answerOPT3: "UX/UI design only matters in print, not digital media" 
        },
        {
            id : 3,   
            question : "Why is brand consistency important in graphic design?",
            answerOPT1: "It doesn't impact brand perception",
            answerOPT2: "It builds brand recognition and trust",
            answerOPT3: "Consistency is only necessary in marketing, not design" 
        },
        {
            id : 4,   
            question : "What role do mockups and prototypes play in the design process?",
            answerOPT1: "They are unnecessary",
            answerOPT2: "They help visualize and test design concepts",
            answerOPT3: "Mockups and prototypes are the same thing" 
        },
        {
            id : 5,   
            question : "How does accessibility factor into graphic design projects?",
            answerOPT1: "It is not a concern in graphic design",
            answerOPT2: "Designs should be inclusive and accessible to all users",
            answerOPT3: "Accessibility only matters in web development, not design" 
        },
        {
            id : 6,   
            question : "What is the impact of emerging technologies like AR and VR on graphic design?",
            answerOPT1: "They have no impact",
            answerOPT2: "Graphic design is becoming obsolete due to AR and VR",
            answerOPT3: "New opportunities and challenges arise for graphic designers" 
        },
        {
            id : 7,   
            question : "How can grid systems and layouts be used in advanced graphic design?",
            answerOPT1: "They are outdated concepts",
            answerOPT2: "They provide structure and organization to design elements",
            answerOPT3: "Grid systems are only for web design, not graphic design" 
        },
        {
            id : 8,   
            question : "Discuss the significance of storytelling in visual design.",
            answerOPT1: "Storytelling has no role in graphic design",
            answerOPT2: "Visual design should tell a compelling story to engage the audience",
            answerOPT3: "Storytelling is only relevant in written content, not design" 
        },
        {
            id : 9,   
            question : "How do you stay updated on the latest trends in graphic design?",
            answerOPT1: "Trends don't matter in graphic design",
            answerOPT2: "Regularly attending design conferences and staying active in design communities",
            answerOPT3: "Relying on traditional design principles without considering trends" 
        },
        {
            id : 10,   
            question : "How do you handle client objections or dissatisfaction with a design?",
            answerOPT1: "Ignore client objections and proceed with the design",
            answerOPT2: "Communicate openly, understand concerns, and make necessary adjustments",
            answerOPT3: "Convince the client that their objections are invalid" 
        }, 
      ],
    };

    const questionsToShow = trainingExperience === 'yes' ? profileQuestionsAdvance[selectedProfile] || [] : profileQuestions[selectedProfile] || [];

    return (
      <>
        <h3 className='questionLable'>File the questions ( Optional )</h3>
        <div className="questionAnswer-main"> 
          {questionsToShow.map((profileQuestion) => (
            <div key={profileQuestion.id} className="item">
              {/* ... (render profile-specific questions) */} 
			  <div className="question">
				<label>{profileQuestion.id}. {profileQuestion.question}</label>
			  </div>
			  <div className="answer">
				<input type="radio" className="profile_Q ans_Qus" id={`selectedAnsO1_${profileQuestion.id}`} name={`selectedAns-${profileQuestion.id}`} value={profileQuestion.answerOPT1} />
				<label htmlFor={`selectedAnsO1_${profileQuestion.id}`}>{profileQuestion.answerOPT1}</label>
			  </div>
			  <div className="answer">
				<input type="radio" className="profile_Q ans_Qus" id={`selectedAnsO2_${profileQuestion.id}`} name={`selectedAns-${profileQuestion.id}`} value={profileQuestion.answerOPT2} />
				<label htmlFor={`selectedAnsO2_${profileQuestion.id}`}>{profileQuestion.answerOPT2}</label>
			  </div>
			  <div className="answer">
				<input type="radio" className="profile_Q ans_Qus" id={`selectedAnsO3_${profileQuestion.id}`} name={`selectedAns-${profileQuestion.id}`} value={profileQuestion.answerOPT3} />
				<label htmlFor={`selectedAnsO3_${profileQuestion.id}`}>{profileQuestion.answerOPT3}</label>
			  </div>
            </div>
          ))}
        </div>
        <div className="form-fields-button">
          <input type="submit" className="form-control button_slide slide_down" value="Submit" name="submit" />
        </div>
      </>
    );
  };

  renderBackButton = () => {
    const { currentStep } = this.state;

    if (currentStep === 2) {
      return (
        <div className="form-fields-button back-btn">
          <button className="back_btn_placement_traning button_slide slide_down" type="button" onClick={() => this.moveToStep(1)}>
            Back
          </button>
        </div>
      );
    }

    return null;
  };

  render() {
    const { currentStep } = this.state;

    return (
      <div className="placement-page">
        <div className="placement-page-inner">
          <section className="heading">{/* ... (existing code) */}</section>
          <div className="placement-main">
            <div className="placement-inner">
              <h2>Welcome to Our Training and Placement Program</h2>
              <p>Immerse yourself in a comprehensive curriculum designed to enhance your skills and prepare you for the dynamic world of web development.</p>

              <form ref={this.myFormRef} method="post" onSubmit={this.handleSubmit}>
                {currentStep === 1 && this.renderStep1()}
                {currentStep === 2 && this.renderStep2()}

                {this.renderBackButton()}
                <div id="successMsg"></div>
                <div id="errorMsg"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
