const Intern = require('../lib/Intern');

test('creates Intern', () => {
    const intern = new Intern('Bill', 4, 'bill@gmail.com', 'U of A')

    expect(intern.name).toBe('Bill')
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toBe('bill@gmail.com')
    expect(intern.school).toBe('U of A')
})

test('rendercard returns string', () => {
    const intern = new Intern('Bill', 4, 'bill@gmail.com', 'U of A')

    expect(intern.renderCard()).toEqual(expect.any(String))
})