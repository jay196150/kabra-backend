const Product = require("../../models/product.models.js")
exports.getProduct = async ( req , res ) => {
    try{

        const data = await Product.find({});

        if( data.length === 0 ){
            console.log( data );
            res.status(204).end();
        }else{
            res.status(201).send( { data : data } );
        }

    }catch(error){
        res.status(500).json( { error : error } );
    }
}

exports.addProduct = async ( req , res ) => {
    try{
       
        const  {name , description , quantity , price } = req.body;
      
        const image = "Upload/Product/" + req.file.filename;
     
        const newProduct = new Product({
           name , 
           description , 
           quantity,
           image,
           price
        });
      
        newProduct.
        save().
        then( () => {
             res.status(200).json( { data : newProduct } );
        } ).
        catch( (error) => {
            console.log( "ERROR -> " , error );
            res.status(500).json( { error : error } );
        } )

    }catch(error){
        console.log(error);
        res.status(500).json( { error : error } );
    }
}