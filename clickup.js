//refers to the axios npm package
const axios = require('axios');
//module.exports exposes the function object as a module
//token is a headers object
module.exports = (url, body, token) => {
	axios
		.post(url, body, { headers: { Authorization: token } })
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};
