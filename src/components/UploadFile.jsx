import React, { useState } from "react";
import "./UploadFile.css";
import { Line } from "rc-progress";
import Upload from "rc-upload";

export default function App() {
  const [percentage, setPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState();
  const [fileSize, setFileSize] = useState();

  const props = {
    action: "https://httpbin.org/post",
    accept: ".pdf, .doc, .docx",
    beforeUpload(file) {
      // Start upload
      setIsUploading(true);
      // Set file details
      setFileName(file.name);
      setFileSize(Math.floor(file.size / 1000));
      // Display file
      
    },
    onSuccess() {
      // Finish upload
      setIsUploading(false);
    },
    onProgress(step) {
      // Update progress
      setPercentage(Math.round(step.percent));
    },
    onError(err) {
      console.log("onError", err);
    }
  };

  return (
    <div className="App">
      {fileName && (
        <React.Fragment>
        
          <div className="upload-list">
            <div className="file-name">
              <b>{fileName}</b>
            </div>
            <div className="progress-container">
              <Line
                percent={percentage}
                strokeWidth={9}
                trailWidth={9}
                trailColor="#FFF"
                strokeColor={isUploading ? "#41C3D2" : "#92ed14"}
                
              />
              <div className="progress-text">
                {isUploading ? `Uploading ${percentage}% ` : `Finished`}
              </div>
            </div>
            <div className="file-size">{`${fileSize} KB`}</div>
          </div>
        </React.Fragment>
      )}
      <Upload {...props}>
        <button id="upload-button">Upload File</button>
      </Upload>
    </div>
  );
}