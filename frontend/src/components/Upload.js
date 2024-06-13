import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('audio', file);

    try {
      // Use the environment variable for the API URL
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/api/upload`, formData);
      setTranscription(response.data.transcription);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <h1>Upload Audio for Transcription</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} accept="audio/*" />
        <button type="submit">Upload</button>
      </form>
      {transcription && (
        <div>
          <h2>Transcription</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
