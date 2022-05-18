// @ts-nocheck
const fs = require('fs');
const express = require("express");
const app = express();

// WEBSTUFF
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.use("/media", express.static("media"));

// API 
//app.use(`/v2`, require("./api/index.ts"));

// WEB ROUTES 
const routes = fs.readdirSync(`./routes`).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
for(const file of routes){
    const Subroutes = require(`./routes/${file}`);

    app.use(`/${Subroutes.location}`, Subroutes.router);

    if(Subroutes.name) console.log(`Route: ${Subroutes.name} GO!`);
}

// READY
app.listen(8080, () => { console.log( `Server is running on http://108.18.99.37:8080 !`) });

// EXPORTS

module.exports.dirname = __dirname;