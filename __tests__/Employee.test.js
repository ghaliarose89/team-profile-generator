const Employee = require('../lib/Employee');

test ('Checking employee name ,id, and email', ()=> {
    const employee = new Employee ('employee1',50,'kjdsafh;gkhfdrsg@email');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

