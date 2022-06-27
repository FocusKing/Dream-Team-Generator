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
    identification,
    email,
    number,
    member,
    engineer,
    github,
    school,
    intern,

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
           <title>Team Members</title>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
           integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
           <link rel="stylesheet" href="./output/style.css">
       </head>
       <h1>
          Dream Team
       </h1>
       <body>
           <div class='manager'>
               <h2>
                   Sahil
               </h2>
               <h2>
                   Manager
               </h2>
               <p>
                   ID: 1
               </p>
               <p>
                   Email:
               </p>
               <p>
                   Office Number:
               </p>
           </div>
           <div class='engineer'>
               <h2>
                   Torrae
               </h2>
               <h2>
                   Engineer
               </h2>
               <p>
                   ID: 2
               </p>
               <p>
                   Email:
               </p>
               <p>
                   Github:
               </p>
           </div>
           <div class='intern'>
               <h2>
                   Saryn
               </h2>
               <h2>
                   Intern
               </h2>
               <p>
                   ID: 3
               </p>
               <p>
                   Email:
               </p>
               <p>
                   School:
               </p>
           </div>
       </body>
       
       </html>
       `
    );
    fs.writeFileSync('./output/index.html', template);
    console.log('TEMPLATE GENERATED');
    process.exit
};

module.exports = {
    generatePage
}