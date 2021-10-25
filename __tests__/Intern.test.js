const Intern = require('../lib/Intern');
test ('Check Intern info', ()=> {
    const intern = new Intern ('Sam',6,'sam123@gmail.com');
    expect (intern.name).toEqual (expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test ('Check getSchool() & getRole()', ()=> {
    const intern = new Intern ('Sam',6,'sam123@gmail.com');
    expect (intern.getSchool()).toEqual (intern.school);
    expect (intern.getRole()).toBe ('Intern');

});