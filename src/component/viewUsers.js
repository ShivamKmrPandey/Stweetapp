import React, { Component } from 'react'
import TweetDataService from "../services/TweetDataService";
import "./ViewTweets.css";
import { BiEdit,BiCommentAdd} from "react-icons/bi";
import {AiFillDelete , AiFillLike} from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import moment from 'moment';
import { withRouter } from "react-router-dom";

class ViewUsersComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            User: []
        }

        this.deleteTweet = this.deleteTweet.bind(this);
    }

    componentDidMount() {
        TweetDataService.getUsers().then((res) => {
            console.log(res.data);
            this.setState({ User: res.data });
        });
    }

    deleteTweet(uuid) {

            TweetDataService.deleteATweet(uuid).then((res) => {
                this.setState({
                    Tweet: this.state.Tweet.filter(Tweet =>
                        Tweet.tweetId !== uuid)
                });
            });
            this.componentDidMount();
    }

    likeTweet(uuid) {
        
        TweetDataService.likeATweet(uuid).then(
            () => {

                this.componentDidMount();
            });

    }



    render() {
        return (
            <div>
                <div className="row">
                    <table className="table table-striped">

                    <thead>
                                <tr>
                                    <th> EmailID</th>
                                    <th> Tweet</th>
                                    <th> Action </th>
                                </tr>
                    </thead>

                        <tbody>
                        {
                                    this.state.User.map(
                                        User => 
                                        <tr key = {User.tweetId}>

                                             <td> {User.loginId}</td>
                                             <td> {User.tweet} <br></br><button onClick={() => this.likeTweet(User.tweetId)}><AiFillLike/></button>{User.like}<AiOutlineFieldTime/>{moment(User.timestamp).fromNow()}</td>   
                                             <td> 
                                                 <button><BiEdit/></button>
                                                 <button><BiCommentAdd/></button>
                                                 <button onClick= {() => this.deleteTweet(User.tweetId)} ><AiFillDelete/></button>
                                             </td>
                                        </tr>
                                    )
                                }
                        </tbody>
                    </table>

                </div>


            </div>
        )
    }
}

export default withRouter(ViewUsersComponent)