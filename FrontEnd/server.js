const express = require('express');
const app = express();
var image = require('path').join(__dirname, '/images');
app.use(express.static(image));

app.get('/',index);
app.get('/adminlogin',adminlogin);
app.get('/adminhome',adminhome);
app.get('/addfaculty',addfaculty);
app.get('/addstudent',addstudent);
app.get('/studentData',studentData);
app.get('/facultyData',facultyData);
app.get('/facultylogin',facultylogin);
app.get('/facultyhome',facultyhome);
app.get('/facultyProfile',facultyProfile);
app.get('/facultyForgetpassword',facultyForgetpassword);
app.get('/facultyviewStudents',facultyviewStudents);
app.get('/facultyAddAssignments',facultyAddAssignments);
app.get('/facultyviewAnswers',facultyviewAnswers);
app.get('/facultyviewAssignments',facultyviewAssignments);
app.get('/studentlogin',studentlogin);
app.get('/studentforgotPassword',studentforgotPassword);
app.get('/Studenthome',Studenthome);
app.get('/StudentProfile',StudentProfile);
app.get('/Studenttest',Studenttest);
app.get('/StudentviewMarks',StudentviewMarks);


function index(req, res) {
    res.sendFile('index.html', { root: __dirname });
}
function adminlogin(req, res) {
    res.sendFile('Adminlogin.html', { root: __dirname });
}
function adminhome(req, res) {
    res.sendFile('Admin/Adminhome.html', { root: __dirname });
}
function addfaculty(req, res) {
    res.sendFile('Admin/Addfaculty.html', { root: __dirname });
}
function addstudent(req, res) {
    res.sendFile('Addstudent.html', { root: __dirname });
}
function studentData(req, res) {
    res.sendFile('Admin/studentData.html', { root: __dirname });
}
function facultyData(req, res) {
    res.sendFile('Admin/facultyData.html', { root: __dirname });
}
function facultyData(req, res) {
    res.sendFile('Admin/facultyData.html', { root: __dirname });
}
function facultylogin(req, res) {
    res.sendFile('Facultylogin.html', { root: __dirname });
}
function facultyhome(req, res) {
    res.sendFile('Faculty/Facultyhome.html', { root: __dirname });
}
function facultyForgetpassword(req, res) {
    res.sendFile('Faculty/forgetpassword.html', { root: __dirname });
}
function facultyProfile(req, res) {
    res.sendFile('Faculty/profile.html', { root: __dirname });
}
function facultyAddAssignments(req, res) {
    res.sendFile('Faculty/Addassignment.html', { root: __dirname });
}
function facultyviewStudents(req, res) {
    res.sendFile('Faculty/studentData.html', { root: __dirname });
}
function facultyviewAssignments(req, res) {
    res.sendFile('Faculty/Assignments.html', { root: __dirname });
}

function facultyviewAnswers(req, res) {
    res.sendFile('Faculty/viewAnswers.html', { root: __dirname });
}
function studentlogin(req, res) {
    res.sendFile('Studentlogin.html', { root: __dirname });
}
function studentforgotPassword(req, res) {
    res.sendFile('Student/forgotpassword.html', { root: __dirname });
}
function Studenthome(req, res) {
    res.sendFile('Student/Studenthome.html', { root: __dirname });
}
function StudentProfile(req, res) {
    res.sendFile('Student/profile.html', { root: __dirname });
}
function Studenttest(req, res) {
    res.sendFile('Student/Test.html', { root: __dirname });
}
function StudentviewMarks(req, res) {
    res.sendFile('Student/viewMarks.html', { root: __dirname });
}
app.listen(5555, () => console.log("server starts at port number 5555"));