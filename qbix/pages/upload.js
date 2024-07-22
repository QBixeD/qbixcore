// pages/upload.js
import React, { useState } from 'react';
import Head from 'next/head';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', file);

      // Simulate a file upload by logging the file data
      console.log('Title:', title);
      console.log('File:', file);

      // Example: displaying the file name in the result div
      setUploadResult(`Video "${title}" uploaded successfully: ${file.name}`);
    } else {
      alert('Please select a video file.');
    }
  };

  return (
    <>
      <Head>
        <title>Upload Video - MyQbix</title>
        <meta name="description" content="Upload your favorite videos to MyQbix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="transparent p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="video-title" className="block text-gray-400 mb-2">Video Title</label>
              <input
                type="text"
                id="video-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 white text-white rounded focus:outline-none focus:ring focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="video-file" className="block text-gray-400 mb-2">Select Video File</label>
              <input
                type="file"
                id="video-file"
                onChange={handleFileChange}
                className="w-full px-3 py-2 white text-white rounded focus:outline-none focus:ring focus:ring-indigo-500"
                accept="video/*"
                required
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded w-fit hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
          {uploadResult && <div className="mt-4 text-green-400">{uploadResult}</div>}
        </div>
      </div>
    </>
  );
};

export default Upload;
