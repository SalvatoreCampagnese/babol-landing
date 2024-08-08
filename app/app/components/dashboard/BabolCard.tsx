"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import iconCalendar from '../../assets/icon-calendar.svg';
import iconMembers from '../../assets/icon-members.svg';
const BabolCard = ({ babol, background, ratio }: {
    babol: any;
    background: any;
    ratio: number;
}) => {
  const [containerDimensions, setContainerDimensions] = useState(null);
  const [categoryContainerDimensions, setCategoryContainerDimensions] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (containerDimensions) {
      setContainerDimensions(containerDimensions);
    }
  }, [containerDimensions]);

  const handleNavigate = () => {
    router.push("/app/babol/" + babol.id);
  };

  return (
    <div
      className="relative h-32 p-4 w-[390px] flex justify-between rounded-xl cursor-pointer"
      onClick={handleNavigate}
    >
      <div
        className="absolute inset-0 rounded-xl overflow-hidden"
      >
        <Image
          alt="background"
          layout="fill"
          objectFit="cover"
          src={background.source}
          className="absolute"
        />
      </div>


      <div className="flex flex-col justify-between flex-1 z-10">
        <div
          className={`text-headline ${background.dark ? 'text-white' : 'text-black'} font-bold truncate`}
        >
          {babol.name}
        </div>
        <div
          className="flex items-center gap-2 bg-opacity-60 bg-white px-2 py-1 rounded-full"
        >
          <div className="text-lg font-semibold">{babol.category.emoji}</div>
          <div className="text-md font-medium">{babol.category.name}</div>
        </div>
      </div>
      <div className="relative z-10 w-full">
        <Image src={iconMembers} alt="Members" width={130} height={130} className='absolute  top-[-30px] right-[15px]'/>
        <Image src={iconCalendar} alt="Calendar"  width={130} height={130} className='absolute  top-[5px] z-10 right-[-30px]'/>
      </div>
    </div>
  );
};

export default BabolCard;
