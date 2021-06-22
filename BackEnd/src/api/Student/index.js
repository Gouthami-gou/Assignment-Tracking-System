import {Router} from 'express'
import {
    studentlogin,
    addStudent,
    studentprofile,
    updateStudent,
    getSubjects,
    getAssignments,
    giveTest,
    viewMarks,
    getpassword,
    forgetpassword

} from './controller'
const router=new Router();

router.get('/studentlogin', studentlogin);

router.post('/addStudent', addStudent);

router.get('/studentprofile', studentprofile);

router.put('/updateStudent/:id', updateStudent);

router.get('/getSubjects', getSubjects);

router.get('/getAssignments', getAssignments);

router.post('/giveTest', giveTest);

router.get('/viewMarks', viewMarks);

router.put('/getpassword/:htno',getpassword);

router.get('/forgetpassword',forgetpassword);


export default router;