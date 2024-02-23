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
        
        console.log("1");

        const  {name , description , quantity , price } = req.body;

        console.log("2");

        const image = "Upload/Product/" + req.file.filename;

        console.log("3");
     
        const newProduct = new Product({
           name , 
           description , 
           quantity,
           image,
           price
        });
      
        console.log("4");

        newProduct.
        save().
        then( () => {
            console.log("5");
             res.status(200).json( { data : newProduct } );
        } ).
        catch( (error) => {
            console.log("6");
            console.log( "ERROR -> " , error );
            res.status(501).json( { error : error } );
        } )

    }catch(error){
        console.log("7");
        res.status(500).json( { error : error } );
    }
}