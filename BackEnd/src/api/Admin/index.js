import {Router} from 'express'
import {
    login,
    adminviewStudent,
    deleteStudent,
    Studentdownload,
    addFaculty,
    viewFaculty,
    getFacultyData,
    UpdateFacultyData,
    deleteFaculty,
    Facultydownload

} from './controller'
const router=new Router();

router.get('/', login);


router.get('/adminviewStudent', adminviewStudent);

router.delete('/deleteStudent/:id', deleteStudent);

router.get('/Studentdownload/:id', Studentdownload);

router.post('/addFaculty',addFaculty);

router.get('/viewFaculty', viewFaculty);

router.get('/getFacultyData/:id', getFacultyData);

router.put('/UpdateFacultyData/:id', UpdateFacultyData);

router.delete('/deleteFaculty/:id', deleteFaculty);

router.get('/Facultydownload/:id', Facultydownload);



export default router;