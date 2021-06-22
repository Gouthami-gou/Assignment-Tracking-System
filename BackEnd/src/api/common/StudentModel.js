import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    htno:{
        type: String,
        unique:true
    },
    fullname:{
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
    dob:{
        type: String
    },
    gender:{
        type: String
    },
    branch:{
        type: String
    },
    year:{
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

const studentModel=mongoose.model('students',StudentSchema)

export default studentModel;