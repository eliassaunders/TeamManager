const Engineer = require('../lib/Engineer')

test('Creates an engineer', () => {
    const engineer = new Engineer('Sarah', 2, 'sarah@gmail.com', 'sarah')

    expect(engineer.name).toBe('Sarah')
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toBe('sarah@gmail.com')
    expect(engineer.github).toBe('sarah')
})

test('Gets card HTML', () => {
    const engineer = new Engineer('Sarah', 2, 'sarah@gmail.com', 'sarah')

    expect(engineer.renderCard()).toEqual(expect.any(String))
})