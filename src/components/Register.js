import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.regFormRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  }

  validateForm = () => {
    const { email, password } = this.state;
    let errors = {
      email: '',
      password: '',
    };
    let isValid = true;

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  regFormData = (evt) => {
    evt.preventDefault();

    if (this.validateForm()) {
      const fd = new FormData();
      fd.append('email', this.state.email);
      fd.append('password', this.state.password);

      axios
        .post('http://localhost/react-api/registerData.php', fd)
        .then((res) => {
          // Success alert
          console.log(res.data);
          this.regFormRef.current.reset();
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <form ref={this.regFormRef}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary button_slide slide_down" onClick={this.regFormData}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
