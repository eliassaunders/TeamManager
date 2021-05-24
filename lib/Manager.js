const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }

    renderCard() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="../src/styles.css">
            <title>Document</title>
        </head>
        <body>
            <header>
                <h1 class="position-absloute header">Team Manager</h1>
            </header>
        
            <div id="card-array">
        <div class="card">
            <h2 class="card-header"></h2>
            <h3 class="card-header">Manager</h3>
                <div class="card">
                    <p class="card-text">Id: ${this.id}</p>
                    <p class="card-text">Email: ${this.email}</p>
                    <p class="card-text">Office Number: ${this.office}</p>
                </div>
            </div>
        </div>
            
        <p>placeholder</p>

        <script src="../index.js"></script>
        </body>
        
        </html>`
    }
}

module.exports = Manager;