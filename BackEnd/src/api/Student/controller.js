import student from '../common/StudentModel';
import assignment from '../common/assignmentModel';
import test from '../common/TestModel';
import { sendEmail } from '../common/email';

export const studentlogin = (req, res) => {
    student.findOne({ "htno": req.query.htno, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const studentprofile = (req, res) => {
    student.find({ "htno": req.query.htno }, (err, result) => {
        res.send(result.map(data => {
            return data;
        }))
    })
}
export const addStudent = (req, res) => {
    student.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You Received a File from Librarian<br><br>Emp Id: ${req.body.empid}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.emailid, subject, body);
            res.send(result);
        }
    })

  
}
export const updateStudent = (req, res) => {
    student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const getSubjects = (req, res) => {
    assignment.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}
export const getAssignments = (req, res) => {
    assignment.find({ "subject": req.query.subject }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log(result);
            res.send(result.map(record => {
                return record;
            }));
        }
    })
}

export const giveTest = (req, res) => {
    test.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}
export const viewMarks = (req, res) => {
    test.find({"htno":req.query.htno, "marks": { $gt: 0 } } , (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}
export const getpassword = (req, res) => {
    student.findOneAndUpdate({ "htno": req.params.htno }, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You have generated a Newpassword<br><br>Student Id : ${req.params.htno}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send([updatedObj]);
        }
    })
}

export const forgetpassword = (req, res) => {
    student.findOne({ "emailid": req.query.emailid }, req.body, (err, updatedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `Your Password has given below:<br><br>Student Id.: ${updatedObj.stdid}<br>Password: ${updatedObj.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(updatedObj.emailid, subject, body);
            res.send(updatedObj);
        }
    })
}

