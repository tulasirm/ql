'use client'
//import React from 'react';
import React, { useState } from "react";
//import axios from "axios";

function ApplyForJob({ theme }) {

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/upload", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="comment-form">
      <h5>Apply :</h5>
      <div className="form">
        <form action="">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea placeholder="Cover letter"></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" placeholder="Full Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" placeholder="Phone" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="file" placeholder="upload resume" onChange={handleChange} />
                {/* <button onClick={uploadFile}>Upload</button> */}
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-center">
              <button className= " butn curve full-width" onClick={uploadFile}>send</button>
                {/* <a href="#0" className={`butn ${theme ? (theme === 'light' ? 'dark' : '') : 'light'} curve full-width`}>
                  Send
                </a> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplyForJob