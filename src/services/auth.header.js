export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  
    console.log(user.token);
    let authtoken = user.token;
    return authtoken; // for Spring Boot back-end
  
}