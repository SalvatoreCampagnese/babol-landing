"use client";
import Image from "next/image";
import iconCalendar from "../../assets/icon-calendar.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonGif from '../../assets/skeleton.gif'
const BabolCard = ({
  babol,
  background,
  ratio,
}: {
  babol: any;
  background: any;
  ratio: number;
}) => {
  const weekDayOptions: Intl.DateTimeFormatOptions = { weekday: "short" };

  const [dayFormatted, setDayFormatted] = useState("");
  const [dayName, setDayName] = useState("");
  const [monthNames, setMonthNames] = useState("");
  const [showTime, setShowTime] = useState(true);
  const [timeFormatted, setTimeFormatted] = useState("");

  const [avatarUids, setAvatarUids] = useState<any[]>([]);

  useEffect(() => {
    const _startDate = new Date(babol.from_date);
    const _endDate = new Date(babol.to_date);

    // If months are same then show only one month
    if (_startDate.getMonth() === _endDate.getMonth()) {
      const startMonth = _startDate.toLocaleString("en-EN", { month: "long" });
      setMonthNames(startMonth);
    } else {
      // Format the date MonthName - MonthName
      const startMonth = _startDate.toLocaleString("en-EN", { month: "short" });
      const endMonth = _endDate.toLocaleString("en-EN", { month: "short" });

      setMonthNames(`${startMonth} - ${endMonth}`);
    }

    // Format time HH:MM to HH:MM if same hour just add one
    const startHour =
      _startDate.getHours() > 9
        ? _startDate.getHours()
        : `0${_startDate.getHours()}`;
    const endHour =
      _endDate.getHours() > 9 ? _endDate.getHours() : `0${_endDate.getHours()}`;
    const startMinute =
      _startDate.getMinutes() > 9
        ? _startDate.getMinutes()
        : `0${_startDate.getMinutes()}`;
    const endMinute =
      _endDate.getMinutes() > 9
        ? _endDate.getMinutes()
        : `0${_endDate.getMinutes()}`;
    if (startHour === endHour) {
      setShowTime(false);
      setTimeFormatted(`${startHour}:${startMinute}`);
    } else {
      setTimeFormatted(
        `${startHour}:${startMinute} to ${endHour}:${endMinute}`
      );
    }

    const startDay = _startDate.getDate();
    const endDay = _endDate.getDate();

    if (startDay === endDay && _startDate.getMonth() === _endDate.getMonth()) {
      setDayFormatted(`${startDay > 9 ? startDay : `0${startDay}`}`);
      // Get the day name
      const dayName = _startDate.toLocaleString("en-EN", weekDayOptions);
      setDayName(dayName.split(",")[0]);
    } else {
      setDayFormatted(
        `${startDay > 9 ? startDay : `0${startDay}`}-${
          endDay > 9 ? endDay : `0${endDay}`
        }`
      );
      // Get the day name
      const startDayName = _startDate.toLocaleString("en-EN", weekDayOptions);
      const endDayName = _endDate.toLocaleString("en-EN", weekDayOptions);
      setDayName(`${startDayName.split(",")[0]} - ${endDayName.split(",")[0]}`);
    }

    let uids = [];
    for (const [index, profile] of babol?.profilesUids.entries()) {
      if (index > 3) break;
      uids.push(profile);
    }
    setAvatarUids(uids);
  }, [babol]);
  return (
    <Link
      href={`/app/babol/${babol.id}`}
      className="relative h-32 p-4 w-full sm:w-3/12 flex justify-between rounded-xl cursor-pointer"
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
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
          className={`text-headline ${
            background.dark ? "text-white" : "text-black"
          } font-bold truncate`}
        >
          {babol.name}
        </div>
        <div className="flex items-center gap-2 bg-opacity-60 bg-white px-2 py-1 rounded-full w-fit">
          <div className="text-lg font-semibold">{babol.category.emoji}</div>
          <div className="text-md font-medium text-nowrap">
            {babol.category.name}
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full">
        <div className="w-[100px] h-[100px] bg-surfaceAccentAlpha rounded-md absolute right-10 -top-4 -rotate-6 shadow-inner p-2 justify-between flex flex-col">
          <div className="flex flex-row">
            {avatarUids?.length > 0 &&
              avatarUids?.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar ? 
                    process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE +
                    "/" +
                    avatar +
                    "/avatar.jpeg" : SkeletonGif
                  }
                  className="w-[24px] h-[24px] bg-gray-400 rounded-full border border-white -mr-[12px]"
                  alt={"avatar"}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-black leading-1">Members</span>
            <span className="text-xl font-bold text-black leading-2">{babol?.countPartecipants}</span>
          </div>
        </div>

        <div className="w-[100px] h-[100px] bg-surfaceAccentAlpha rounded-md absolute -right-4 top-4 rotate-12 shadow-inner p-2 justify-between flex flex-col backdrop-blur-[4px]">
          <div className="text-center font-bold text-red-500">{monthNames}</div>
          <div className="flex flex-col text-center">
            <span className="text-xxxl font-bold text-black leading-6">
              {dayFormatted}
            </span>
            {showTime && (
              <span className="text-xs text-black leading-1">
                {timeFormatted}
              </span>
            )}
            {!showTime && (
              <span className="text-xs text-black leading-1 whitespace-nowrap">
                {dayName}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BabolCard;
