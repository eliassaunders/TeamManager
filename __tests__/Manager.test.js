const Manager = require('../lib/Manager')

test('Creates Manager', () => {
    const manager = new Manager('Elias', 4, "eliasashtonsaunders@gmail.com", 5)

    expect(manager.name).toBe('Elias')
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toBe('eliasashtonsaunders@gmail.com')
    expect(manager.office).toEqual(expect.any(Number))
})

test('Manager properly renders card', () => {
    const manager = new Manager('Elias', 4, "eliasashtonsaunders@gmail.com", 5)

    expect(manager.renderCard()).toEqual(expect.any(String))
})