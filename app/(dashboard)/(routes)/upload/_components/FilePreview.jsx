import Image from 'next/image';
import { X } from 'lucide-react';

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className='flex gap-2 items-center justify-between mt-5 border rounded-md p-4 border-blue-300'>
      <div className='flex items-center p-2'>
        <Image src='/file.svg' width={50} height={50} alt='file' />
        <div className='text-left'>
          <h2>{file.name}</h2>
          <h2 className='text-gray-500 text-[13px]'>
            {file?.type}/{(file.size / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>
      </div>
      <X className='cursor-pointer text-red-500' onClick={() => removeFile()} />
    </div>
  );
};

export default FilePreview;
