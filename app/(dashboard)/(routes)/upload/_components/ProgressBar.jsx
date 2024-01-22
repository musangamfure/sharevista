const ProgressBar = ({ progress = 40 }) => {
  return (
    <div className='bg-gray-500 w-full rounded-full h-4 mt-3'>
      <div
        className=' bg-primary rounded-full h-4 text-white text-[10px]'
        style={{ width: `${progress}%` }}
      >{`${Number(progress).toFixed(0)}%`}</div>
    </div>
  );
};

export default ProgressBar;
