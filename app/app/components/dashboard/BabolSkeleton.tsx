export const BabolSkeleton = () => {
    return (
      <div className="relative h-28 md:h-32 p-4 flex flex-col justify-between rounded-xl bg-gray-700">
        <div className="flex flex-col justify-between flex-1 z-10 w-full">
          <div className={`text-headline text-black font-bold truncate w-3/6 md:w-4/6 h-[25px] md:h-[30px] bg-gray-300 rounded-md animate-pulse`}>
            &nbsp;
          </div>
          <div className="flex items-center gap-2 bg-opacity-60 bg-white px-2 py-1 rounded-full w-2/6 md:w-3/6 h-[25px] md:h-[30px] animate-pulse">
            <div className="text-lg font-semibold">&nbsp;</div>
            <div className="text-md font-medium text-nowrap">&nbsp;</div>
          </div>
        </div>
        <div className="z-10 w-1/6 absolute right-0 flex justify-center items-center h-full top-0">
          <div className="w-[100px] h-[100px] rounded-md bg-gray-400 absolute right-[40px] top-[-5px] -rotate-12 animate-pulse">&nbsp;</div>
          <div className="w-[100px] h-[100px] rounded-md bg-gray-500 opacity-75 absolute right-[0px] bottom-[0px] rotate-12 animate-pulse">&nbsp;</div>
        </div>
      </div>
    );
  };
  