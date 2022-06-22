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
    
        `
    )
}