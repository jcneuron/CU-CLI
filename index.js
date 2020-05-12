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
	name: 'New Task Name',
	content: 'New Task Content',
	tags: [ 'tag name 1' ],
	status: 'Open',
	priority: 3
};

yargs
	.command({
		// '{"name":"Section 6","content":"description","tags":["tag"],"status":"Accepted","priority":2}',
		// node index.js add 'Section 6' 'description' 'tag' 'Accepted' '2'
		command: 'add <taskName> <taskContent> <[taskTag]> <taskStatus> <taskPri>',
		desc: 'Create a new task on ClickUp',

		handler: (argv) => {
			body.name = argv.taskName;
			body.content = argv.taskContent;
			body.tags = [ argv.taskTag ];
			body.status = argv.taskStatus;
			body.priority = argv.taskPri;
			postTask(url, body, token);
			console.log('Creating task ' + argv.taskName);
			setTimeout(function() {}, 10000);
		}
	})
	.demandCommand(1, 'Please choose at least one command:')
	.help()
	.wrap(72).argv;

//references and passes params to the function in index.js

yargs.parse();
