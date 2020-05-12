# CU-CLI
command line interface using yargs to add task with clickup

1) npm init
  index.js
2) npm i axios 

3) In index.js change '25214909' from const url = '...' to your desired List

4) In index.js change const token = '...' to your generated token

5) Keep in mind the task statuses inside List

3) node index.js add <taskName> <taskContent>
  Ex. node index.js add 'Task Name' 'Description or Content' 'Tag Name' 'Status available on list' '1 or 2 or 3 or 4'
                                                                                                1 : Urgent, 2 : High, 3 : Normal, 4 : Low.
4) check the link -> https://api.clickup.com/api/v2/list/25214909/task
