const express = require('express');
const { handleFileUpload, uploadAudio } = require('../controllers/transcriptionController');

const router = express.Router();

//router.post('/upload', handleFileUpload, uploadAudio);
router.post('/upload', handleFileUpload, (req, res, next) => {
    console.log('Upload route hit');
    next();
  }, uploadAudio);

module.exports = router;
