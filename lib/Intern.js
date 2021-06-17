const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    renderCard() {
       return  `<div class="card">
        <h3 class="card-header">Intern</h3>
        <div class="card">
            <p class="card-header"> ${this.name}</p>
            <p class="card-text">Id: ${this.id}</p>
            <a href="mailto:${this.email}? class="card-text">Email: ${this.email}</a>
            <p class="card-text">School ${this.school}</p>
        </div>
    </div>
    `
    }
}

module.exports = Intern;