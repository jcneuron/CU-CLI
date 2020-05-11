//refers to js file
const postTask = require('./clickup.js');

//refers to axios module
const axios = require('axios');

//POST request url --> https://jsapi.apiary.io/apis/clickup20/reference/0/tasks/create-task.html
//link to use:            https://api.clickup.com/api/v2/list/list_id/task
//list_id = 19126702 from https://app.clickup.com/1295328/v/li/19126702
const url = 'https://api.clickup.com/api/v2/list/19126702/task';

//API token in seetings->Apps->generate
//https://jsapi.apiary.io/apis/clickup20/introduction/authentication.html
const token = 'pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56';

//body properties from https://jsapi.apiary.io/apis/clickup20/reference/0/tasks/create-task.html
// Production / JavaScript
var body = {
	name: 'New Task Name',
	content: 'New Task Content',
	tags: [ 'tag name 1' ],
	status: 'Open',
	priority: 3
};

//references and passes params to the function in index.js
postTask(url, body, token);
