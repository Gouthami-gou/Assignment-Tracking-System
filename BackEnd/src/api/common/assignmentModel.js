import mongoose from 'mongoose';


const assignmentSchema=new mongoose.Schema({
    faculty:{
        type:String
    },
    subject:{
        type:String
    },
    assignment:{
        type:String
    }
},
{
    timestamps:true
});

const assignmentModel=mongoose.model('assignments',assignmentSchema);

export default assignmentModel;