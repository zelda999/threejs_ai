import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className='flex flex-1 flex-col'>
        <input
          id='file-upload'
          accept='image/*'
          type='file'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>
        <p>{file === "" ? "No file selected" : file.name}</p>
      </div>
      <div className='flex flex-wrap gap-3 mt-4'>
        <CustomButton
          title='Logo'
          type='outline'
          handleClick={() => readFile("logo")}
          customStyles='text-xs'
        />
        <CustomButton
          title='Full'
          type='filled'
          handleClick={() => readFile("full")}
          customStyles='text-xs'
        />
      </div>
    </div>
  );
};

export default FilePicker;
