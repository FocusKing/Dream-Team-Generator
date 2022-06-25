const fs = require ('fs');

const generateLicense = (type) => {
    let color;
    if(type === "MPL") color = "red";
    if(type === "GPL") color = "blue";
    if(type === "Apache") color = "orange";
    if(type === "MIT") color = "purple";
    if(type === "CC") color = "yellow";
    if(type === "BSD") color = "green";

    return (
        `
        <h3>License</h3>
        <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="48" />
        `
    )
}

const generatePage = ({
    name,
    position,
    identification,
    email,
}) => {
    console.log('GENERATING HTML PAGE');
    return (
        // input HTML
        `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream Team Generator</title>
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">

</head>

<body>
    <h1>Dream Team</h1>
    <div class="row">
        <div class="col-sm-6">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Employee Name</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                    <p class="card-text">Identification Number</p>
                    <p class="card-text">Email</p>
                    <a href="#" class="card-link">Email</a>
                    <a href="#" class="card-link">Office Number:</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Employee Name</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">Identification Number</p>
                <p class="card-text">Email</p>
                <a href="#" class="card-link">Email</a>
                <a href="#" class="card-link">GitHub</a>
            </div>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Employee Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer2</h6>
            <p class="card-text">Identification Number</p>
            <p class="card-text">Email</p>
            <a href="#" class="card-link">Email</a>
            <a href="#" class="card-link">GitHub</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Employee Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer3</h6>
            <p class="card-text">Identification Number</p>
            <p class="card-text">Email</p>
            <a href="#" class="card-link">Email</a>
            <a href="#" class="card-link">GitHub</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Employee Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">Identification Number</p>
            <p class="card-text">Email</p>
            <a href="#" class="card-link">Email</a>
            <a href="#" class="card-link">School</a>
        </div>
    </div>
</body>

</html>
    
        `
    )
}