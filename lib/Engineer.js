const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)

        this.github = github;
    }

    renderCard() {
        return `<div class="card">
        <h3 class="card-header">Engineer</h3>
        <div class="card">
            <p class="card-header"> ${this.name}</p>
            <p class="card-text">Id: ${this.id}</p>
            <a href="mailto:${this.email}? class="card-text">Email: ${this.email}</a>
            <a href="https://github.com/${this.github} class="card-text">GitHub: ${this.github}</a>
        </div>
    </div>`
    }
}

module.exports = Engineer;