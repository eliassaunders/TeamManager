const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }

    renderCard() {
        return `
        <div class="card">
            <h3 class="card-header">Manager</h3>
                <div class="card">
                    <p class="card-header"> ${this.name}</p>
                    <p class="card-text">Id: ${this.id}</p>
                    <p class="card-text">Email: ${this.email}</p>
                    <p class="card-text">Office Number: ${this.office}</p>
                </div>
            </div>
        </div>
        `
    }
}

module.exports = Manager;