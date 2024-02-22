const  { Schema, default: mongoose } =  require("mongoose");
const cartProductSchema = new Schema(
    {
        cartProduct : {
          type : Schema.Types.ObjectId,
          ref:"Product"
        },
        quantity : {
            type : Number,
            default : 1,
            require : true
        },  
    },
    {
        timestamps:true
    }
)

const CartProduct = mongoose.model( "CartProduct" , cartProductSchema );

module.exports = CartProduct;