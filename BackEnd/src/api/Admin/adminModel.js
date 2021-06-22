import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type:String
    }
    
},
{
    timestamps:true
});

const adminModel=mongoose.model('admins',adminSchema)

export default adminModel;