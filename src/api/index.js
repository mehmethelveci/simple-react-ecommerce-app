import axios from 'axios';

// const localhost = "https://localhost:3001";
const heroku = "https://simple-ecommerce-app-db.herokuapp.com/";

const API_ROOT = `${process.env.REACT_APP_API_ROOT || heroku}`;

const config = {

};

const requests = {
	get: (url, params) => axios
		.get(`${API_ROOT}${url}`, { params: params, ...config }),
};

const api = {
	getCompanies: (params) => requests.get('/companies', params),
	getProducts: (params) => requests.get('/items', params),
};

export default api;
