# employeeTracker

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Dependancies
 - MySQL
 - console.table
 - Inquirer
 
 ## Description 
 
 In this challenge I was to successfully create a database and allow a user to interact with inquirer prompts to add, delete or update information within the database.
 I created a database close to home which included tables for departments of a hotel along with different roles within each department along with employees within those roles and departments.
 
 ## Issues
 Some time inbetween testing I ran into a inquirer package error that would not allow me to continue testing. I uninstalled all packages and reinstalled them to continue to get the same error and I could not figure out how to fix it in time since it was not code that I have written that needed to be fixed. The console showed it was within the node_modules.
 
 ## Image of Issue
 
 ![issues](https://user-images.githubusercontent.com/75024930/116024522-3c32b180-a603-11eb-9f04-1be1fa2f6584.PNG)
 
 ## Conclusion
 
 I will have to return to this project at a different time and try again. I am unsure at this time howt to fix this issue.


## Credits 

Nicholas Moss

