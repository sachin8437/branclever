import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.myFormRef = React.createRef();
    }

    addFormData = (evt) => {
        evt.preventDefault();
        
        const fd = new FormData();
        fd.append('email', this.email.value);
        fd.append('password', this.password.value);
    
        axios.post('http://localhost/savedata.php', fd)
          .then(res => {
            // Success alert
            console.log(res.data);
            this.myFormRef.current.reset();
          })
          .catch(error => {
            // Handle error
            console.error(error);
          });
    }; 

  render() {
    return (
        <div>
            <form ref={this.myFormRef}>
                <div className="form-group">
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" ref={(el) => this.email = el} />
                </div>
                <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Enter Password" ref={(el) => this.password = el} />
                </div>
                <button type="submit" className="btn btn-primary button_slide slide_down" onClick={this.addFormData}>Login</button>
            </form>
        </div>
    )
  }
}

