import Image from 'next/image';
import { useState, useEffect } from 'react';

const FileInfo = ({ file }) => {
  const [fileType, setFileType] = useState();

  useEffect(() => {
    file && setFileType(file?.fileType.split('/')[0]);
    console.log(fileType);
  }, [file]);

  return (
    file && (
      <div className=' text-center border flex flex-col items-center justify-center m-4 p-2 rounded border-blue-200'>
        <Image
          src={fileType === 'image' ? file?.fileUrl : '/file.png'}
          alt='file'
          width='200'
          height='200'
          className='rounded-md h-[200px] object-contain'
        />

        <div className=''>
          <h2> {file.fileName}</h2>
          <h2 className='text-gray-400 text-[13px]'>{file.fileSize}</h2>
        </div>
      </div>
    )
  );
};

export default FileInfo;
