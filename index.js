const postTask = require('./clickup.js');
const axios = require('axios');

const url = 'https://api.clickup.com/api/v2/list/19126702/task';
const token = 'pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56';

var body = {
	name: 'New Task Name',
	content: 'New Task Content',
	tags: [ 'tag name 1' ],
	status: 'Open',
	priority: 3
};

postTask(url, body, token);
