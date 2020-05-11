const argv = require('yargs').argv;
const FormData = require('form-data');
const axios = require('axios');
var request = require('request');
const fs = require('fs');
// const request = require('postman-request');

// const url = 'https://api.clickup.com/api/v2/list/list_id/task';
// api token: pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56
// const url = 'https://api.clickup.com/api/v2/list/123/task';

// request.setRequestHeader('Authorization', '"pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56"');
// request.setRequestHeader('Content-Type', 'application/json');
// form.append('filename', '');
// form.append('attachment', fs.createReadStream('./img.png'));

request(
	{
		method: 'POST',
		url: 'https://api.clickup.com/api/v2/list/123/task',
		headers: {
			Authorization: "'pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56'",
			'Content-Type': 'application/json'
		},
		body:
			'{  "name": "New Task Name",  "content": "New Task Content",  "assignees": [    183  ],  "tags": [    "tag name 1"  ],  "status": "Open",  "priority": 3,  "due_date": 1508369194377,  "due_date_time": false,  "time_estimate": 8640000,  "start_date": 1567780450202,  "start_date_time": false,  "notify_all": true,  "parent": null,  "links_to": null,  "custom_fields": [    {      "id": "0a52c486-5f05-403b-b4fd-c512ff05131c",      "value": 23    },    {      "id": "03efda77-c7a0-42d3-8afd-fd546353c2f5",      "value": "Text field input"    }  ]}'
	},
	function(error, response, body) {
		console.log('Status:', response.statusCode);
		console.log('Headers:', JSON.stringify(response.headers));
		console.log('Response:', body);
	}
);

// request.setRequestHeader('Authorization', '"pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56"');
// request.setRequestHeader('Content-Type', 'application/json');
