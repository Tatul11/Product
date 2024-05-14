const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required:[ true,'title not be empty']
  },
  place: {
    type: String,
    enum: [ 'Yerevan','Russia','Europa','Japan'],
    required: [true,'place not be empty']
  },
  price: {
    type: Number,
   validate:(price)=>{
      if(price < 3 || price > 100000){
        throw new Error ('incorrect price please give me valid price ')
      }
      return true
   },
    required:[true,'price not be empty']
  },
  image:{
    type:String,
    required:true
  },
  inStock:{
    type:String,
    required:true
  }
});


module.exports = mongoose.model('product',productSchema)