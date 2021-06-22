import faculty from '../common/FacultyModel';
import student from '../common/StudentModel';

import test from '../common/TestModel';
import { sendEmail } from '../common/email';
import assignmentModel from '../common/assignmentModel';

export const facultylogin = (req, res) => {
    faculty.findOne({ "faculty": req.query.faculty, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const facultyprofile = (req, res) => {
    faculty.find({ "faculty": req.query.faculty }, (err, result) => {
        res.send(result.map(data => {
            return data;
        }))
    })
}


export const updateFaculty = (req, res) => {
    faculty.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}

export const FacultyviewStudent = (req, res) => {
    student.find((err, result) => {
        res.send(result);
    })
}





export const deleteStudent = (req, res) =>
    student.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

    export const Studentdownload = (req, res) => {
        student.findById(req.params.id, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send([result]);
            }
        })
    }


export const addAssignment = (req, res) => {
    assignmentModel.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

export const viewAssignments = (req, res) => {
    assignmentModel.find({"subject":req.query.subject},(err, result) => {
        if(err){
            res.send(err);
        }
        else{
        res.send(result);
        }
    })
}
export const viewAnswers = (req, res) => {
    test.find({"subject":req.query.subject,"marks":{$eq:''}}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}
export const getAssignmentData = (req, res) => {
    test.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

export const UpdateTestData = (req, res) => {
    test.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const getpassword = (req, res) => {
    faculty.findOneAndUpdate({ "faculty": req.params.faculty }, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You have generated a Newpassword<br><br>faculty Id : ${req.params.faculty}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send([updatedObj]);
        }
    })
}

export const forgetpassword = (req, res) => {
    faculty.findOne({ "emailid": req.query.emailid }, req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `Your Password has given below:<br><br>faculty Id.: ${updatedObj.faculty}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send(updatedObj);
        }
    })
}

