/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
 
export async function login (email, password) {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/v1/users/login',
        data: {
          email,
          password,
        },
      });
  
      if (res.data.status === 'success') {
        showAlert('success', 'Logged in successfully');
        window.setTimeout(() => {
          location.assign('/');
        }, 500);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  }
