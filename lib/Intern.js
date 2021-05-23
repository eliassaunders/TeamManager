const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    renderCard() {
       return  `<div class="card">
        <h2 class="card-header"></h2>
        <h3 class="card-header">Manager</h3>
        <div class="card">
            <p class="card-text">Id: ${this.id}</p>
            <p class="card-text">Email: ${this.email}</p>
            <p class="card-text">School ${this.school}</p>
        </div>
    </div>`
    }
}