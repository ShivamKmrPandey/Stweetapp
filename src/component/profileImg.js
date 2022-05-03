import React , { Component }  from "react";
import "./profileimg.css";
import Card from 'react-bootstrap/Card';
import AuthService from "../services/auth.service";

export default class Profile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user: AuthService.getCurrentUser()
      };
    }

    render(){
         const {user} = this.state;
         
          return(
              <div className="profile">
              <Card style={{ width: '8rem' }}>
              <Card.Img variant="top" src="https://img.icons8.com/external-avatar-andi-nur-abdillah/344/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-20.png" />
              <Card.Body>
              <Card.Title><small>@{user.loginId}</small></Card.Title>
              </Card.Body>
              </Card>
              </div>
          );
    
    }
}