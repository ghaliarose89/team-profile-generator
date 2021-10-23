const Engineer = require('../lib/Engineer');
test ('Check engineer info', ()=> {
    const engineer = new Engineer ('Sam',6,'sam123@gmail.com');
    expect (engineer.name).toEqual (expect.any (String));
});






