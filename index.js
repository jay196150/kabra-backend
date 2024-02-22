const dotenv = require("dotenv");
const app  = require("./app.js");
const databaseConnection = require("./db/index.js");

dotenv.config();

databaseConnection()
.then( () => {
    app.listen( process.env.PORT || 5000 , () => {
        console.log( `Server is running on port : ${process.env.PORT}` );
    } )
} )
.catch( (error) => {
    console.log( "Mongodb connection faild" , error );
} )