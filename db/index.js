const mongoose =  require("mongoose");

const databaseConnection = async () => {
    
    try{
       const connection = await mongoose.connect( `${process.env.DATABASE_URL}` );
       console.log( `connection done...` );
    }catch( error ){
       console.log("Mongodb connection failed...");
       console.log(error);
    }

}

module.exports =  databaseConnection