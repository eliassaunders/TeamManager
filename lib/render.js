const fs = require('fs');
const Manager = require('./Manager');

const generateTemplate = passedTemp => {
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

        ${Manager.renderCard()}
        
    </body>
    </html>`;
}

const generateEngineer = yes => {
    if (!yes) {
        return '';
    } else {
        return ``
    }
}