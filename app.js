const  express = require("express");
const  cors = require("cors");

const app = express();
const  ProductRoutes  = require("./routes/Product");
const CardProductRoutes = require( "./routes/Card" );
app.use( cors());

app.use(  express.json( {limit:"16kb"} ));
app.use( express.urlencoded( {extended:true , limit :"16kb"} ) );
app.use(express.static("public"));

app.use("/Upload/Product" , express.static("./Upload/Product"));

app.use("/products" , ProductRoutes);
app.use("/card" , CardProductRoutes ); 
module.exports = app;