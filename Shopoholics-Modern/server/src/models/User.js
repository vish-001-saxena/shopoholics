import mongoose from 'mongoose';
const cartItem = new mongoose.Schema({product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},quantity:{type:Number,min:1,default:1}},{_id:false});
const userSchema = new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true,minlength:6},cart:[cartItem]},{timestamps:true});
export default mongoose.model('User',userSchema);
