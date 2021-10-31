
const createHtml = (data, roleArr) => {
    
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
        </head>

    <body>
        <h1>${data[0]}</h1>
        <div class="container">
        <div class="row cards" >
         ${getmember(data, roleArr)}
    
   `
};

function getmember(data, roleArr) {
    let employyinfo = ``;
    let j = 0;
    for (let i = 1; i < data.length; i++) {
        employyinfo += `<div class="col-sm">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary teamrole"> ${roleArr[j].role}<p>Name: ${data[i].name}</p></li>
                    <li class="list-group-item list-group-item-secondary otherinfo">Id: ${data[i].id}</li>
                    <li class="list-group-item list-group-item-success otherinfo"><a href="mailto:${data[i].email}">Email:${data[i].email}</a> </li>`;
        if (data[i].officenumber) {
            employyinfo +=
                ` <li class="list-group-item list-group-item-danger otherinfo">Office number: ${data[i].officenumber}</li>
                     </ul>
                    </div>
                    
        ` };
        if (data[i].github) {
            employyinfo += ` <li class="list-group-item list-group-item-danger otherinfo"> <a href="https://github.com/${data[i].github}"> 
           Github account:${data[i].github}</a></li>
                     </ul>
                    </div>
                    
                   
       ` };
        if (data[i].school) {
            employyinfo += ` <li class="list-group-item list-group-item-danger otherinfo"> School name: ${data[i].school}</li>
                        </ul>
                    </div>
                    
                   
               
   ` };

        j++;

    };
    employyinfo +=
        `</div>
   </div>
    </div>
    </body>

    </html>`;

    return employyinfo;


};

module.exports = createHtml;