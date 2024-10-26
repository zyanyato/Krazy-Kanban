import axios from 'axios';
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await axios.post('/auth/login', userInfo);

    const token = response.data.token;

    localStorage.setItem('jwtToken', token);

    return token;
  } catch (error) {

    console.error('Login error:', error);
    throw new Error ('Invalid login credentials');
  }
};

export { login };
