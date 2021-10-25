const Employee = require('../lib/Employee');

test ('Checking employee name ,id, and email', ()=> {
    const employee = new Employee ('employee1',50,'employee1@hmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
 
test ('checking getName', ()=>{
    const employee = new Employee ('employee1',50,'employee1@hmail.com');
    expect(employee.name).toEqual(employee.getName());
    expect(employee.id).toEqual(employee.getId());
    expect(employee.email).toEqual(employee.getEmail());
    expect(employee.getRole()).toBe('Employee');

})
