const  mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
    {
        name : {
            type : String,
            require : true
        },
        image : {
            type : String,
            require : true
        },
        description : {
            type : String,
            require : true
        },
        quantity : {
            type : Number,
            require : true
        },
        price : {
            type : Number , 
            require : true
        }
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model( "Product" , productSchema );

module.exports = Product;