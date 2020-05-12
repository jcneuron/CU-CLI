//refers to yargs module
const yargs = require('yargs');

//refers to js file
const postTask = require('./clickup.js');

//refers to axios module
const axios = require('axios');

//POST request url --> https://jsapi.apiary.io/apis/clickup20/reference/0/tasks/create-task.html
//link to use:            https://api.clickup.com/api/v2/list/list_id/task
//list_id = 25214909 from https://app.clickup.com/2331408/v/l/li/25214909
const url = 'https://api.clickup.com/api/v2/list/25214909/task';

//API token in settings->Apps->generate
//https://jsapi.apiary.io/apis/clickup20/introduction/authentication.html
const token = 'pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56';

// body properties from https://jsapi.apiary.io/apis/clickup20/reference/0/tasks/create-task.html
// Production / JavaScript;
var body = {
	name: 'taskName',
	content: 'taskDesc',
	tags: [ 'taskTag' ],
	status: 'taskStatus',
	priority: 3
};

yargs
	.command({
		command: 'add <taskName> <taskDesc>',
		aliases: [ 'create' ],
		desc: 'Create a new task on ClickUp',
		// builder: {
		// 	body: {
		// 		name: 'hi',
		// 		status: 'Open'
		// 	}
		// },
		handler: (argv) => {
			// console.log('Created task ${argv.taskName} with description ${argv.taskDesc}');
			body.name = argv.taskName;
			body.content = argv.taskDesc;
			// body.tags = argv.taskTag;
			// body.status = argv.taskStatus;
			// body.priority = argv.num;
			postTask(url, body, token);
		}
	})
	.demandCommand(1, 'Please choose at least one command')
	.help()
	.wrap(72).argv;

//references and passes params to the function in index.js

// yargs.parse();
