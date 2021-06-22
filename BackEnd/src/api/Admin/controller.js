import admin from './adminModel';
import faculty from '../common/FacultyModel';
import student from '../common/StudentModel'
import { sendEmail } from '../common/email';


export const login = (req, res) => {
    admin.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}

export const adminviewStudent = (req, res) => {
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


export const addFaculty = (req, res) => {
    faculty.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'File Received';
            const body = `You Received a File from Librarian<br><br>Faculty Id: ${req.body.faculty}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            sendEmail(req.body.emailid, subject, body);
            res.send(result);
        }
    })
}

export const viewFaculty = (req, res) => {
    faculty.find((err, result) => {
        res.send(result);
    })
}

export const getFacultyData = (req, res) => {
    faculty.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send([result]);
        }
    })
}
export const UpdateFacultyData = (req, res) => {
    faculty.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}
export const deleteFaculty = (req, res) =>
    faculty.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

    export const Facultydownload = (req, res) => {
        faculty.findById(req.params.id, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send([result]);
            }
        })
    }