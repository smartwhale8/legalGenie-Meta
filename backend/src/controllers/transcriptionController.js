const transcribeAudio = require('../utils/transcribeAudio');
const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

const handleFileUpload = upload.single('audio');

const uploadAudio = async (req, res) => {
  console.log('uploadAudio function hit');
  const filePath = req.file.path;

  try {
    // Return a dummy transcription response
    const dummyTranscription = "This is a new dummy transcription. Replace this with the actual transcription result.";
    console.log('Dummy transcription successful:', dummyTranscription);
    res.json({ transcription: dummyTranscription });
  } catch (error) {
    console.error('Transcription failed:', error);
    res.status(500).json({ error: 'Transcription failed' });
  } finally {
    fs.unlink(filePath, (err) => {
      if (err) console.error('Failed to delete file:', filePath, err);
    });
  }
};

const uploadAudio2 = async (req, res) => {
  console.log('uploadAudio function hit');
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const filePath = req.file.path;

  try {
    const transcription = await transcribeAudio(filePath);
    console.log('Transcription successful:', transcription);
    res.json({ transcription });
  } catch (error) {
    console.error('Transcription failed:', error);
    res.status(500).json({ error: 'Transcription failed' });
  } finally {
    fs.unlink(filePath, (err) => {
      if (err) console.error('Failed to delete file:', filePath, err);
    });
  }
};

module.exports = {
  handleFileUpload,
  uploadAudio,
};
