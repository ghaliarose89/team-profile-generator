
const createHtml = data => {

    //console.log(data);

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
    ${getmember(data)}
   `

};

function getmember(data) {
    console.log(data);
    let ob;
    
    for (let i = 1; i < data.length; i++) {

       ob= `<div class="col-sm">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary teamrole">${data[i].name}</li>
                    <li class="list-group-item list-group-item-secondary">${data[i].id}</li>
                    <li class="list-group-item list-group-item-success">${data[i].email}</li>`;
         if (data[i].officenumber) {
             ob += ` <li class="list-group-item list-group-item-danger">${data[i].officenumber}</li>
                             </ul>
                         </div>
                    
        ` } ; 
        if (data[i].github) {
            ob += ` <li class="list-group-item list-group-item-danger">${data[i].github}</li>
                            </ul>
                        </div>
                   
       ` }  ;
       if (data[i].school) {
        ob += ` <li class="list-group-item list-group-item-danger">${data[i].school}</li>
                        </ul>
                    </div>
               
   ` };

        
      
    };

 return ob;
    
    
}

// if (data[i].officenumber) {
//     `
//                     <li class="list-group-item list-group-item-danger">${data[i].officenumber}</li>
//                 </ul>
//             </div>
//             </div>
//             </body>

//             </html>`
// }
// else
//     if (data[i].github) {
//         `
//             <li class="list-group-item list-group-item-danger">${data[i].github}</li>
//             </ul>
//             </div>
//         </div>
//         </body>

//         </html>`
//     }
//     else
//         if (data[i].school) {
//             `
//                 <li class="list-group-item list-group-item-danger">${data[i].school}</li>
//              </ul>
//                 </div>
//                 </div>
//             </body>
            
//             </html>`
//         };


//         }
//     };




module.exports = createHtml;