const CartProduct = require("../../models/cartProduct.models.js")
exports.getCartProduct = async ( req , res ) => {
    try{
        
        

        const data = await CartProduct.find({}).populate("cartProduct");

      

        if( data.length === 0 ){
        
            res.status(204).end();
        }else{
            res.status(201).send( { data : data } );
        }

    }catch(error){
        console.log(error);
        res.status(500).json( { error : error } );
    }
}

exports.addCartProduct = async ( req , res ) => {
    try{
      
      
        const  { cartProduct  } = req.body;

      
       const present = await CartProduct.findOne( { cartProduct : cartProduct } )
       
       if( present ){
        return res.status(404).json( { message : "product already present" } );
       }
       
       const newCartProduct = new CartProduct({
            cartProduct
        });
        
        await newCartProduct.
        save();

        
            
        const newData = await CartProduct.findOne( { cartProduct : cartProduct } ).populate("cartProduct");
    
    
        if( newData ){
        
          return  res.status(200).json({data:newData});
        }
        else{
    
           return res.status(400).json( {data: "no"} );
        }

        

    }catch(error){
        console.log("ERROROROROROR")
        console.log(error.message);
        res.status(400).json( { data : "no" } );
    }
}


exports.addCartProductQut = async ( req , res ) => {
    try{
    

        const  { id  } = req.body;

     
         
       const present = await CartProduct.findOne( { cartProduct : id } ).populate("cartProduct");

     
       if( present ){
           
          if( present.quantity + 1 <= present.cartProduct.quantity ){
            const updateData = await CartProduct.findOneAndUpdate( { cartProduct : id  } , { quantity : present.quantity + 1 } , {new:true} )
            return res.status(200).json( { data : id } );
          }

       }

       res.status(200).json({data:"no"});
 

    }catch(error){
        console.log("ERROROROROROR")
        console.log(error.message);
        res.status(500).json( { data : "no" } );
    }
}


exports.subCartProductQut = async ( req , res ) => {
    try{
    
        const  { id  } = req.body;

         
       const present = await CartProduct.findOne( { cartProduct : id } ).populate("cartProduct");


       if( present ){
           
          if( present.quantity - 1 > 0 ){
            const updateData = await CartProduct.findOneAndUpdate( { cartProduct : id  } , { quantity : present.quantity - 1 } , {new:true} )
            return res.status(200).json( { data : id} );
          }

       }

       res.status(400).json({data:"no"});
    }catch(error){
        console.log("ERROROROROROR")
        console.log(error.message);
        res.status(500).json( { data : "no" } );
    }
}

// deleteCartProduct


exports.deleteCartProduct = async ( req , res ) => {
    try{
     

      const  {id} = req.params;
     
       const present = await CartProduct.findOne( { cartProduct : id } );

  


       if( present ){
     
         await CartProduct.findOneAndDelete( { cartProduct : id } );
        
         return res.status(200).json( { data : id } )
       }
     
       res.status(400).json({data:"no"});
    }catch(error){
        console.log("ERROROROROROR")
        console.log(error.message);
        res.status(500).json( { data : "no" } );
    }
}