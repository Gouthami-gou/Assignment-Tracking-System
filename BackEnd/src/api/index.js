import { Router } from 'express'

import admin from './Admin'
import faculty from './Faculty'
import student from './Student'

const router = new Router()

router.use('/admin', admin)
router.use('/faculty',faculty)
router.use('/student',student)


export default router