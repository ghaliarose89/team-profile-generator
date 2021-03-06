const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require("inquirer");
const fs = require('fs');
const createHtml = require('./src/htmlTamplet')
const teamArray = [];
const roleArr = [];
function teamStart() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamTitle',
            message: 'Please enter your team name (Required)',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter your team name');
                    return false;
                }
            }
        },

    ])
        .then(data => {
            if (data.teamTitle)
                teamArray.push(data.teamTitle);
            addManager();
        });
};

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mangerName',
            message: 'What is the Manager name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the Manager Id?',
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Manager Email address?',
        },

        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the Manager office number?',
        },
    ])
        .then(data => {
            const name = data.mangerName;
            const id = data.managerId;
            const email = data.managerEmail;
            const phoneNumber = data.managerOfficeNumber;
            let manager = new Manager(name, id, email, phoneNumber);
            let obj = {role : manager.getRole()}
            roleArr.push(obj);
            teamArray.push(manager)
            addTeamMember();

        });
};

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Do you want to add more team member?',
            choices: ['yes,an Engineer', 'yes, add an Inten', "No, create my team work page now!"]

        },
    ])
        .then(data => {
            switch (data.addMember) {
                case 'yes,an Engineer':
                    addEngineer();
                    break;
                case 'yes, add an Inten':
                    addInten();
                    break;
                case 'No, create my team work page now!':
                   createPage(teamArray,roleArr);
                   break;
                    
            }

        });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the Engineer name?',
        },
        {
            type: 'input',
            name: 'engineerrId',
            message: 'What is the Engineer Id?',
        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the Engineer Email address?',
        },

        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'What is the Engineer GitHub username?',
        },

    ])
        .then(data => {
            const name = data.engineerName;
            const id = data.engineerrId;
            const email = data.engineerEmail;
            const github = data.engineerGitHub;
            let engineer = new Engineer(name, id, email, github);
            teamArray.push(engineer);
            let obj = {role : engineer.getRole()}
            roleArr.push(obj);
            addTeamMember();
        });

};

function addInten() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern Id?',
        },

        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern Email address?',
        },

        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern school name?',
        },

    ])
        .then(data => {
            const name = data.internName;
            const id = data.internId;
            const email = data.internEmail;
            const school = data.internSchool;
            let intern = new Intern(name, id, email, school);
            let obj = {role : intern.getRole()}
            roleArr.push(obj);
            teamArray.push(intern);
            addTeamMember();
        });

};
function createPage(data){
    fs.writeFile ('./dist/index.html',createHtml(data,roleArr),err =>{
        err?console.log (err): console.log("your team page has been created!");
    })
};

teamStart();
//console.log (teamArray);