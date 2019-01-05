# rbac
The home route renders the login page. 
Currently signup feature not added. (WIP)
once the registered user logs in (list of users maintained within the application in userList.json). It authenticates whether the correct user is present. If the user is present then in 
authManagement.js which is in controller checks the role assigned. Some level of validation is performed. Based on the result the router is rendering roleCheck.ejs
which renders html conditionally based on role of the user
