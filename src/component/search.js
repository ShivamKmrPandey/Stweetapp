import React, { Component } from "react";
import "./searchbar.css";
import {withRouter} from "react-router-dom";
import Form from "react-validation/build/form";
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

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    
    this.state = {
      username: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
        this.props.history.push(`/search/${this.state.username}`);
        window.location.reload();
        
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    
    return (
      
        <Form
            onSubmit={this.handleSubmit}
            ref={c => {
                this.form = c;
            }}
        >
            <div class="sbcontainer">
                <div id="sbst-box">
                    <input
                        type="text"
                        className="searchinput"
                        name="username"
                        placeholder="Search User..."
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required]}
                    />
                </div>
                <div id="sbnd-box">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Search</span>
                    </button>

                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </div>
            </div>
        </Form>

      
    );
  }
}

export default withRouter(Searchbar)