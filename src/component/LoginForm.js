import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import "./common.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
class Login extends Component {

  constructor(props) {
    super(props);
    
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      if(this.state.password === "shiva1419@"){       
              localStorage.setItem("user", "shivaaps");
              this.props.history.push("/home");
              window.location.reload();
      }
      else if(this.state.password === "jhon1419@"){       
        localStorage.setItem("user", "jhon12");
        this.props.history.push("/home");
        window.location.reload();
      }  
      else if(this.state.password === "atikskh"){       
        localStorage.setItem("user", "atik123");
        this.props.history.push("/home");
        window.location.reload();
      }    
          
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      
        <div className="loginForm">
         
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="emailId">EmailID</label>
              <Input
                type="text"
                className="form-control"
                name="emailID"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

               <p className="forgot-password text-right">
                    <a href="/forgotPass">Forgot password?</a>
                </p>
                <h3>OR</h3>
                <p className="SignUp text-right">
                    New ?<a href="/signUp">SignUp</a>
                </p>
          </Form>
        </div>
      
    );
  }
}

export default withRouter(Login)