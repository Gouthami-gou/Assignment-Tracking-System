import mongoose from 'mongoose'

const FacultySchema = new mongoose.Schema({
    faculty:{
        type: String,
        unique:true
    },
    fullname:{
        type: String
    },
    gender:{
        type: String
    },
    emailid:{
        type: String
    },
    password:{
        type:String
    },
    phone:{
        type: String
    },
    designation:{
        type: String
    },
  
    branch:{
        type: String
    },
    year:{
        type: String
    },
    subject:{
        type: String
    },
    address:{
        type: String
    },
    image:{
        type:String
    }
},
{
    timestamps:true
})

const FacultyModel=mongoose.model('faculties',FacultySchema)

export default FacultyModel;