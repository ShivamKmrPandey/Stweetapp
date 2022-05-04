import axios from 'axios';
//import authHeader from './auth.header';

const API_URL = "http://localhost:8080/api/v1.0/tweets/";
// const HOST_URL = "http://StweetLB-294762247.us-east-1.elb.amazonaws.com/tweet";

const HOST_URL = "http://tweet-project-albN-319698381.us-east-1.elb.amazonaws.com/tweet";

// const headers = {
//    Authorization: 'Bearer '+ authHeader(),
//    'Access-Control-Allow-Origin': '*'  
// };

class TweetService {
  getAllTweet() {
    return axios.get(API_URL + 'all');
  }

  getMyTweet(loginId) {
    return axios.get(API_URL + loginId);
  }

  getTweetByUuid(uuid) {
    return axios.get(API_URL + 'byUuid/' + uuid);
  }

  // getUsers() {
  //   return axios.get(API_URL + 'users/all');
  // }

  getUsers() {
    return axios.get(HOST_URL + '/list/all');
  }

  // postTweet(loginId,postdata) {
  //   return axios.post(API_URL + loginId+'/add' ,
  //                               postdata, 
  //                               {headers: {'Content-Type': 'application/json'}
  //                             });
  // }

  postTweet(tweet,loginId) {
    return axios.post(HOST_URL ,
                                {
                                  tweet,
                                  loginId
                                } ,
                                {headers: {'Content-Type': 'application/json'}
                              });
  }

  updateATweet(loginId,id,postdata){
    return axios.put(API_URL +loginId+'/update/'+id , postdata,
                                      {headers: {'Content-Type': 'application/json'}
                            });
  }

  likeATweet(id){
    return axios.put(HOST_URL + '/like/' +id );
  }

  replyTweet(loginId,id,postdata){
    return axios.post(API_URL +loginId+'/reply/'+id , postdata,
                                                {headers: {'Content-Type': 'application/json'}
                                                     });
  }

  deleteATweet(id){
    return axios.delete(HOST_URL + '/delete/' +id 
                          ).then(response => {
                            if (response.data) {
                              console.log(response.message);
                              console.log(response.data.status);
                              console.log(response.status);
                            }
                            return response;
                          });
  }
  
}
export default new TweetService();