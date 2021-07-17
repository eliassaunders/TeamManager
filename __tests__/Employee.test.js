const Employee = require('../lib/Employee');

test('creates a employee', () => {
    const employee = new Employee('Donald', 2, 'john@gmail.com')

    expect(employee.name).toBe('Donald')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual('john@gmail.com')
})