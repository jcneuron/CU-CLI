const axios = require('axios');
//obj
module.exports = function(url, body, token) {
	axios
		.post(url, body, { headers: { Authorization: token } })
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
};

// request.setRequestHeader('Authorization', '"pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56"');
// request.setRequestHeader('Content-Type', 'application/json');
