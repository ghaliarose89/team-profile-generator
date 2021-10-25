const Engineer = require('../lib/Engineer');
test ('Check engineer info', ()=> {
    const engineer = new Engineer ('Sam',6,'sam123@gmail.com');
    expect (engineer.name).toEqual (expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test ('Check getGithub() & getRole()', ()=> {
    const engineer = new Engineer ('Sam',6,'sam123@gmail.com');
    expect (engineer.github).toEqual (engineer.getGithub());
    expect (engineer.getRole()).toBe ('Engineer');

});



