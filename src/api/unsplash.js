import axios from "axios";
import Env from '../env';

const authObj = Env.vars();


export default axios.create({
	baseURL:'https://api.unsplash.com/',
	headers: {
		Authorization: `Client-ID ${authObj.REACT_APP_AUTHORIZATION_STRING}`,
	},
})
