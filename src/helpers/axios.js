import axios from 'axios';
import appConfig from '../config/index';
// Default config options
const defaultOptions = {
	baseURL: appConfig.API_BASE_URL,
	params: {
		client_id: appConfig.FOURSQUARE_CLIENT_ID,
		client_secret: appConfig.FOURSQUARE_CLIENT_SECRET,
		limit: 12,
		v: '20180720'
	},
	headers: {
		'Content-Type': 'application/json',
	}
};

// Create instance
const instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	});

// Add a response interceptor
instance.interceptors.response.use(
	(response) => {
		// Do something with response data
		return response.data.response;
	},
	(error) => {
		// Do something with response error
		return Promise.reject(error.response);
	});
export default instance;
