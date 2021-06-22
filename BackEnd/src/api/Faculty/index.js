import {Router} from 'express'
import {
    facultylogin,
    facultyprofile,
    updateFaculty,
    FacultyviewStudent,
    Studentdownload,
    addAssignment,
    viewAssignments,
    viewAnswers,
    getAssignmentData,
    UpdateTestData,
    getpassword,
    forgetpassword,

} from './controller'
const router=new Router();

router.get('/facultylogin', facultylogin);

router.get('/facultyprofile', facultyprofile);

router.put('/updateFaculty/:id', updateFaculty);

router.get('/FacultyviewStudent', FacultyviewStudent);

router.get('/Studentdownload/:id', Studentdownload);

router.post('/addAssignment', addAssignment);

router.get('/viewAssignments',viewAssignments);

router.get('/viewAnswers',viewAnswers);

router.get('/getAssignmentData/:id', getAssignmentData);

router.put('/UpdateTestData/:id', UpdateTestData);

router.put('/getpassword/:htno',getpassword);

router.get('/forgetpassword',forgetpassword);


export default router;