import router from '../router';
import {API_URL} from './api';

const LOGIN_URL = API_URL + 'sessions/create/';
const SIGNUP_URL = API_URL + 'register/';

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    return context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);

      this.user.authenticated = true;

      // Redirect to a specified route
      if(redirect) {
        router.go(redirect);
      }

    });
  },

  signup(context, creds, redirect) {
    return context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);

      this.user.authenticated = true;

      if(redirect) {
        router.go(redirect);
      }

    });
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token');
    if(jwt) {
      this.user.authenticated = true;
    }
    else {
      this.user.authenticated = false;
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
    }
  }
}
