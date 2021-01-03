const express = require('express');

const router = express.Router();

const commonRoutes = require('./common.routes');
const adminRoutes = require('./admin.routes');
const recruiterRoutes = require('./recruiter.routes');
const studentRoutes = require('./student.routes');
const intewrnshipRoutes = require('./internship.routes');

router.use('/admin', adminRoutes);
router.use('/recruiter', recruiterRoutes);
router.use('/student', studentRoutes);
router.use('/internship', intewrnshipRoutes);
router.use(commonRoutes);

module.exports = router;