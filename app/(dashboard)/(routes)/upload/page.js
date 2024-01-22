'use client';
import { useState, useEffect } from 'react';
import { app } from '@/firebaseConfig';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import UploadFolder from './_components/UploadFolder';
import SuccessMsg from './_components/SuccessMsg';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utils/RandomStringGenarator';

const Upload = () => {
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const { user } = useUser();

  const handleUploads = (file) => {
    const contentType = file.type;
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, contentType);

    uploadTask.on('state_changed', (snapshot) => {
      const newProgress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + newProgress + '% done');
      setProgress(newProgress);

      if (newProgress === 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setUploadComplete(true);
          saveDocData(file, downloadURL);
        });
      }
    });
  };

  const saveDocData = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, 'UploadedFiles', docId), {
      fileName: file?.name,
      fileUrl: fileUrl,
      fileSize: file?.size,
      fileType: file?.type,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    });
  };

  useEffect(() => {
    if (uploadComplete) {
      const resetTimeout = setTimeout(() => {
        setProgress(0);
        setUploadComplete(false);
        setShowSuccessMsg(true);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [uploadComplete]);

  const handleUploadComplete = () => {
    setShowSuccessMsg(true);
    console.log('Upload complete. Additional logic can be executed here.');
  };

  return (
    <div className='p-5 px-8 md:px-28'>
      <h1 className='text-[20px] font-bold text-center m-5'>
        {' '}
        Start <strong className='text-primary'>Uploading</strong> Files and{' '}
        <strong className='text-primary'>Share</strong> Them
      </h1>
      <UploadFolder
        progress={progress}
        uploadBtnClick={(file) => handleUploads(file)}
        onUploadComplete={handleUploadComplete}
      />
      {showSuccessMsg && (
        <SuccessMsg onClose={() => setShowSuccessMsg(false)} />
      )}
    </div>
  );
};

export default Upload;
