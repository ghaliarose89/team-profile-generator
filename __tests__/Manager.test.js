const Manager = require('../lib/Manager');
test ('Check Manager info', ()=> {
    const manager = new Manager ('Sam',6,'sam123@gmail.com');
    expect (manager.name).toEqual (expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test ('Check getSchool() & getRole()', ()=> {
    const manager = new Manager ('Sam',6,'sam123@gmail.com',2818529636);
    expect (manager.officenumber).toEqual (expect.any(Number));
    expect (manager.getRole()).toBe ('Manager');

});