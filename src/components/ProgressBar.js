const ProgressBar = ({initialProgress}) => {
  return (
      //Progress bar
      <div className="relative w-90 h-1 bg-gray-100 rounded-lg mx-10 ">

        {/*Filling the progress bar based on the intial progress % value*/}
        <div
          className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
          style={{ width: `${initialProgress}%` }}
        ></div>
        
      </div>

  );
};

export default ProgressBar;
