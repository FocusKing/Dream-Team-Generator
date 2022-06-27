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
    manager,
    id,
    email,
    office,
    engineer,
    github,
    school,
    intern,
    name,
    id2,
    id3,
    email1,
    email2,
    employee1,
    employee2,
    employee3,

}) => {
    console.log('GENERATING HTML PAGE...');
    const template = (
        // input HTML
       `
       <!DOCTYPE html>
       <html lang="en">
       
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Dream Team Generator</title>
           <link rel="stylesheet" href="./output/style.css">
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
               integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
           <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
           <script src="https://kit.fontawesome.com/c29bc16b23.js" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
               integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
       </head>
       
       <body>
           <!-- Installed bootstrap bringing in other sources in the event I need to add to my code -->
           <h2 class="m-1 page-header">
               Dream Team
           </h2>
           <div class="container-fluid">
               <div class="row ">
                   <div class="col p-4 flex-wrap d-flex justify-content-around ">
                       <div class="card " style="width: 18rem;">
                           <div class="card-body shadow">
                               <div class="bg-primary">
                                   <h5 class="card-title text-light">Employee Name</h5>
                                   <h6 class="card-subtitle mb-2 text-light">Manager</h6>
                                   <i class="fas fa-coffee"></i>
                               </div>
                               <div class="bg-light">
                                   <p class="card-text text-dark">Identification Number</p>
                                   <p class="card-text text-dark">Email</p>
                                   <a href="#" class="card-link">Email</a>
                                   <a href="#" class="card-link">Office Number:</a>
                               </div>
                           </div>
                       </div>
                       <div class="card" style="width: 18rem;">
                           <div class="card-body shadow">
                               <div class="bg-primary">
                                   <h5 class="card-title text-light">Employee Name</h5>
                                   <h6 class="card-subtitle mb-2 text-light">Engineer</h6>
                                   <i class="fas fa-glasses"></i>
                               </div>
                               <div class="bg-light">
                                   <p class="card-text text-dark">Identification Number</p>
                                   <p class="card-text text-dark">Email</p>
                                   <a href="#" class="card-link">Email</a>
                                   <a href="#" class="card-link">GitHub</a>
                               </div>
                           </div>
                       </div>
                       <div class="card" style="width: 18rem;">
                           <div class="card-body shadow">
                               <div class="bg-primary">
                                   <h5 class="card-title text-light">Employee Name</h5>
                                   <h6 class="card-subtitle mb-2 text-light">Engineer</h6>
                                   <i class="fas fa-glasses"></i>
                               </div>
                               <div class="bg-light">
                                   <p class="card-text text-dark">Identification Number</p>
                                   <p class="card-text text-dark">Email</p>
                                   <a href="#" class="card-link">Email</a>
                                   <a href="#" class="card-link">GitHub</a>
                               </div>
                           </div>
                       </div>
                       <div class="card" style="width: 18rem;">
                           <div class="card-body shadow">
                               <div class="bg-primary">
                                   <h5 class="card-title text-light">Employee Name</h5>
                                   <h6 class="card-subtitle mb-2 text-light">Engineer</h6>
                                   <i class="fas fa-glasses"></i>
                               </div>
                               <div class="bg-light">
                                   <p class="card-text text-dark">Identification Number</p>
                                   <p class="card-text text-dark">Email</p>
                                   <a href="#" class="card-link">Email</a>
                                   <a href="#" class="card-link">GitHub</a>
                               </div>
                           </div>
                       </div>
                       <!-- <div class="col d-flex justify-content-center"> -->
                       <div class="card" style="width: 18rem;">
                           <div class="card-body shadow">
                               <div class="bg-primary">
                                   <h5 class="card-title text-light">Employee Name</h5>
                                   <h6 class="card-subtitle mb-2 text-light">Intern</h6>
                                   <i class="fas fa-user-graduate"></i>
                               </div>
                               <div class="bg-light">
                                   <p class="card-text text-dark">Identification Number</p>
                                   <p class="card-text text-dark">Email</p>
                                   <a href="#" class="card-link">Email</a>
                                   <a href="#" class="card-link">School</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
           </div>
           </div>
           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
               integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
               crossorigin="anonymous"></script>
       
           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
               integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
               crossorigin="anonymous"></script>
       
           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
               integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
               crossorigin="anonymous"></script>
       
       </body>
       
       </html>
       `
    //    had trouble getting html to recreate how I intended
    );
    fs.writeFileSync('./output/index.html', template);
    console.log('TEMPLATE GENERATED');
    process.exit
};

module.exports = {
    generatePage
}