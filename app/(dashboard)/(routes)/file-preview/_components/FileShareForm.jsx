import { useState } from 'react';
import { Copy } from 'lucide-react';

const FileShareForm = ({ file, onPasswordSave }) => {
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [password, setPassword] = useState('');
  return (
    file && (
      <div className='flex flex-col gap-2'>
        <div className=''>
          <label className='text-[14px] text-gray-500'>Short Url</label>
          <div className='flex gap-5 border rounded-md justify-center items-center'>
            <input
              className='disabled:text-gray-500 bg-transparent border-none outline-none focus:outline-none text-center text-lg'
              type='text'
              value={file.shortUrl}
              disabled
            />
            <Copy
              className='text-gray-500 hover:text-gray-600'
              value={file.shortUrl}
            />
          </div>
        </div>
        <div className='gap-3 flex mt-5'>
          <input type='checkbox' onChange={(e) => setIsPasswordEnabled(true)} />
        </div>
      </div>
    )
  );
};

export default FileShareForm;
