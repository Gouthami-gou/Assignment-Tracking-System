import mongoose from 'mongoose';


const TestSchema=new mongoose.Schema({
    htno:{
        type:String
    },
    fullname:{
        type:String
    },
    subject:{
        type:String
    },
    assignment:{
        type:String
    },
    answer:{
        type:String
    },
    marks:{
        type:String
    }
},
{
    timestamps:true
});

const assignmentModel=mongoose.model('tests',TestSchema);

export default assignmentModel;